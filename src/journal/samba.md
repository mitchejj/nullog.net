---
title: The Common Internet File System
subtitle: Samba
date: 2020-09-03T10:46:43.119788509-04:00
---
I've tried using NFS share on my home network, they work until the fail specular fashion; and that was with simple shares. I eventually moved to CIFS network shares I just had one simple problem, I wanted to users to be able to mount shares without sudo. I was the passing username, password, uid and gid all to mount my share in my home directory. I knew a better way had to exist. I knew it was possible, the Arch Wiki told me so [Manual mounting note on the Arch Wiki][wiki]

> To allow users to mount it as long as the mount point resides in a directory controllable by the user; i.e. the user's home, append the `users` mount option. The option is users (plural). For other filesystem types handled by mount, this option is usually user; sans the "__s__".

I just wasn't sure what it was try to tell me I needed to do. Finally I found what I was looking for, in the kernels documentation for the CIFS.

In my `/etc/fstab` I have the following entry:

    //<server name>/<share name> /home/jason/<mountpoint> cifs user 0 0

To make life easier I can also append a credentials file after user mount option. It is important this credentials file needs to be readable by the user and not root. I've yet to figure out the best place to store this file on my system. I'm thinking if my network mounts are at `~/Network/<server>` I might want to place the file inside of `~/Network/` as I don't want any backups to look inside this directory. This would make my mount entry look like:


    //<server name>/<share name> /home/jason/Network/<mountpoint> cifs user,credentials=/home/jason/Network/.cifs 0 0

Of course I can also add countless other mount options but that is the basics. I go `mount Network/home`, have my share mount without the need to sudo or set {u,g}id's.

The next step is to see if a user can have a systemd-mount unit. 



[wiki]: https://wiki.archlinux.org/index.php/Samba#Manual_mounting "See Note"
[kernel-cifs]: https://www.kernel.org/doc/readme/Documentation-filesystems-cifs-README "Allowing User Mounts"
