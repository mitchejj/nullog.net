---
title: Backing up with gnome-disks and LVM
---

Prepping my system head in for repair I want to have an image of my system to get up and running quickly. I know I could use `dd`, however I just didn't like that approach as it is more likely I could make a mistake and loose all my data, `dd` also feels slow.

Knowing Gnome Disks has an image drive image system that seemed to be the best choice. I plugged in my USB boot rescue drive and installed the `gnome-disk-utility` all good. Not so fast, I ran into issues with udisk and polkit permissions. My first thought was to add my user to the `disk` user group. That didn't solve the problem, I needed a polkit authentication agent. To me the best solution is `polkit-gnome` mostly because it has the fewest dependencies, oh and start it. Success, oh wait... `/dev/sda2` is a LVM portion and to gnome-disks the drive is active. The fix

    vgchange -an /dev/<vol>
    gnome-disk &
    vgchange -ay /dev/<vol>

So make the volume group inactive, run gnome-disks to the back up, then make the volume group active again.
