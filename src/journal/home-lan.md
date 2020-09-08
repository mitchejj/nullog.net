---
title: Pi4 Network Servers
subtitle: Manjaro
date: 2020-05-13T02:39:27.026Z
---
I've been a distro hopper for sometime when it comes to my home network. First, I deploy everything on Raspberry Pi's. Currently I have three in "production" Zero W (ns0), Raspberry Pi 4 1GB (ns1) and a Raspberry Pi 4 4GB (ns4).

The Zero W has one and only one function, DNS. This is done with Pi Hole and unbound, running on DietPi. Simple install that I log in from time to time to update Pi Hole.

The bigger Pi's is where my hopping comes into play. With the older 3 and 3B's I typically found myself drifting to ARM Arch. Simply because I enjoy running pacman -Syu, but also because I was able to finely control what was running on the system. When the 4's came out I stuck with Raspbian because it was the only game in two until Ubuntu announced the Pi's where now a board they supported. I jumped right away, 64-bits and a proper distro. At the time we also had the ability to you know, travel. I really was in the phase of having easy to reproduce installs as I also had a Wireguard setup to get back to my home network and access my Pi Hole DNS... then my ISP installed CG-NAT and I need to find a work around. Vultr and Ubuntu... same OS in the cloud and at home.

Now I have more time, I'm still not found of Ubuntu

A new Ubuntu release is around the corner, I have some time and well everything is still running on an SD card. NS4 link the home LAN to the cloud and acts a my file server and is my main canidate have root on an external SSD drive. However, ns1 my testing/proving ground.

I'm going to install Manjaro on it and use an SSD for root. First things first is to download the [minimual image][manjaro-min], which is an older release image and extra work will need to be done.

This is still a work in progress

#### Write the image
Write the image to both the SD card and SSD. Typically, its done via `dd` but I chose to use gnome-disks. I would write to the SD card first then the SSD second.

#### Change root
~~While the SSD is being imaged mount the SD card and edit `/boot/cmdline.txt` change `root=` to `root=/dev/sda2` I think this should have issue once I add my file server storage... but for now.~~
Manjaro used to use set the root partition with `root=/dev/mmcblk0p2` since I moved root to a SSD every kernel update required editing `/boot/cmdline.txt` and change the `root=` paramater, thankfully it now use the [`root=LABEL=ROOT_MNJRO`][ROOT_MNJRO]. 

#### [Extra Work][extra-work]
This can be done by mounting the SSD or after the initial setup on the Pi, so either mount the SSD or move everything to the Pi

I'm using an older image for this, and since the image was released the Manjaro ARM project has been selected to be the main install for the Pine Book Pro. As a result the ARM portion of the project has been promoted and now uses the Manjaro mirror infrusture, if one runs `pacman -Syu` you would get a `GPGME error` so edit `/etc/pacman.d/mirrorlist`

    Server = https://manjaro.moson.eu/arm-stable/$repo/$arch 

#### Next
Update the system, reboot and it just works. Well, sort of. I want also want to use `iwd` for wireless, which requires the mainline kernel.

    sudo pacman-mirrors -c United_States,Canada
    sudo pacman -S linux-rpi4-mainline linux-rpi4-mainline-headers

This removes `linux-rpi4` and `linux-rpi4-headers` it also changes `/boot/cmdline.txt` and will need to point to change it again.

~~It might be a good idea to also [install the eeprom updater][eeprom].~~

As of now Manjaro does have the required tools to update the eeprom in the community repo.

    sudo pacman -Syu rpi-eeprom raspberrypi-userland-aarch64-git

The default firmware release status is set to critical. I want to try and consistently stay on the stable branch; to do so I need to edit `/etc/default/rpi-eeprom-update` and change `FIRMWARE_RELEASE_STATUS` from critical to stable. On one Pi (ns1) I am using the beta release so that I have native SSD booting without an SD card.

    sudo rpi-eeprom-update -a
    sudo reboot
    sudo rpi-eeprom-update -r

[manjaro-min]: https://osdn.mirror.constant.com//storage/g/m/ma/manjaro-arm/rpi4/minimal/19.12/Manjaro-ARM-minimal-rpi4-19.12.img.xz
[extra-work]: https://archived.forum.manjaro.org/t/gpgme-error-no-data-minimal-19-12/134588
[eeprom]: https://archived.forum.manjaro.org/t/eeprom-update-working/126500
[ROOT_MNJRO]: https://archived.forum.manjaro.org/t/raspberry-pi-kernel-changes/146653

#### Extra

I installed a few extra packages:

`neovim tmux polkit dbus-broker samba manjaro-settings-samba stow bash-completion` 

and \-\-asdep `python-pynvim crda`


#### Extra Extra

At first I was useing a much older base image which required some modifaction. I need to mount the `*.img` and [found the answer on Stack Exchange][stack]. I no longer need this but I wanted to keep this bit of knowledge just incase I need it again.

[stack]: https://unix.stackexchange.com/questions/316401/how-to-mount-a-disk-image-from-the-command-line]

    fdisk -lu /path/disk.img

Then I would mount it passing the offset.

    sudo mount -o loop,offset=99614720 Manjaro-ARM-minimal-rpi4-19.12.img test
    sudo mount -o loop,offset=xxxx /path/disk.img /mnt/local

The offset value is in bytes, whereas fdisk shows a block count, so you should multiply the value from the "Begin" or "Start" column of the fdisk output by 512 (or whatever the block size is) to obtain the offset to mount at.
