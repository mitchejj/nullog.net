---
title: My Arch Install
date: 2020-03-07T21:03:00.910Z
---

I've been trying to maintain the idea of reproducable installs and setup accross my devices. One surch reason was having to send my Motile laptop in for repair.

The Arch wiki has a snippit entited [List of installed packages][wiki-installed]. Eventurally I should look into using the pacman hook and commit said package output git.

At the same time I'm looking to do self hosted backups and off site backups via Borg. From that I have yet deceide on the of schdule I want to use for that. I'm thinking daily/nightly locally and weekly remotely.

Finally, because I'm will need to send my laptop in for repair I really want to create a backup image so I can just dump that back on the system get up and running ASAP. However I've encountred a few issues using `gnome-disk-utility` mostly around premissions with udisk. The solution was installing a polkit agent. I chose `polkit-gnome` due to having the fewest dependancies.

[wiki-installed]: https://wiki.archlinux.org/index.php/Pacman/Tips_and_tricks#List_of_installed_packages
