---
title: sudoers
date: 2020-07-01T17:12:05.049Z
---

I've just made a few simple changes to my /etc/sudoers.d/wheel


    Defaults editor=/usr/bin/nvim
    %wheel ALL=(ALL) ALL
    %wheel ALL= NOPASSWD: /usr/bin/mount,/usr/bin/umount,/usr/bin/pacman

    # vi:syntax=conf

I know I should probably make this user dependent, but I'm typically just have my user account and a root account. 

