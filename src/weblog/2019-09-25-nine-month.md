---
title: "9 Month Update"
date: 2019-09-25T16:49:10Z
draft: false
---
Here it is nine months later and I have not exactly kept my promise to myself to post more. How was the iPad Pro transition gone? Fairly, well; I used it everyday for the last 9 months I've come to a better understanding of where technology fits into my idealized view of my life.

I have start writing a few post that I just never followed through with and published. I say it is because I'm still working on a work flow that works best for me. I still don't have any process or flow going with the iPad Pro full time. I thought using Drafts as my default work space for writing post would work. Which did seem to help, this post partially started that way. But that just never fully worked.


### Zen Garden

When I moved to the iPad as my daily compute device I still wanted something that had some "power". So I set up a Raspberry Pi for that, at the time it was a 3B+. It was running Arch, with Wireguard so I could phone-home from anyplace to access my little zen garden. Around the same time I also added a Raspberry Pi Zero W to run PiHole. It was a good setup until it wasn't... when I encountered a whole host of home network issue. I made all kinds of changes, but the one important change to note was moving my Wireguard setup from the Arch Linux to Fedora. More I thought about it I felt better having a SE Linux enabled system touching the internet. At the some time I also added PiHole to this server giving me two local DNS servers. But that setup, for me, had issues. First, anytime I would reboot I had a 75% chance the system would hang. Also, I could never get the Wireguard kernel module to auto-load after a kernel update. But I knew the limitations and would only update kernel when I was at home and bought a IoT outlet switch to toggle the power of the Pi if need be.

Then when the Pi Foundation released the Raspberry Pi 4B with true gigabit ethernet and USB 3 I just had to pick one up. Of course Fedora wouldn't run on the new hardware so I opted to go with Raspbian. Mostly because much of the system truly is in flux and staying close to the development chain seemed wise. Also, the other Linux flavors where not ready to support the new board just yet.

### Fidget Spinner

The computing power I was seeking wasn't raw computing power, after all the iPad Pro destroys any Raspberry Pi in any the context. The simplicity the iPad, while powerful and empowers many, does remove that intangible I also craved. What I was seeking was the power over the device, this power is my fidget spinner. I enjoy doing silly things like updating the systems packages. I somehow find it relaxing to explore and tinker.

I like to tinker and tweak things, and I've always known that. It is what I enjoyed about the Classic Mac days and what I enjoyed with the early days of Mac OS X. I still love macOS and I still deeply enjoy Arch Linux. The two need to find a happy medium, and I think that just might replacing macOS on my laptop with Fedora 30.

Going forward I will using the Fedora 30/31 install on my laptop to supplement my computer desires a little more. I will only consider doing that if I can figure out how to get macOS to boot in a virtualized environment on Fedora... well that will be a big main goal.

https://github.com/kholia/OSX-KVM

I also really then want to setup a proper dot files sync/share/consistency among my Raspberry Pi's and laptop. I want to more comfortable using VIM and improve my tmux know how. Which will greatly help me when interfacing with other system on my iPad.