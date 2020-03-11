---
title: "On the other side of infinity"
date: 2019-2-15T04:58:15Z
draft: false
---

Every time I start anew I manage to fall into the trap of writing an about page, writing about why I start anew, and someplace along the lines I also dive into writing about the countless sites I've had in the past. I hopes to skip some of that point that for sometime I have had preference for staticly generated websites. I love many aspects of static site generation from the lack of databases, the ability to track/see changes a post/page, and the output can be deploy anywhere. A static build system also lets me tinker until I'm able to generate something that, well... something that satisfy that self-indulgent desire to feel special.

A few years back that same self-indulgent desire lead me to wanting to buy a Raspberry Pi and build something with it... maybe build a NAS, run a personal git server, or even a VPN.  That quickly turned into buying a second Pi that was a little faster and could do a little more. As I became more consumed with the project the more I realize the Pi's where not what I really wanted.

Eventually I landed on vultr, and a $2.50/month micro-cloud instance. I would no longer need to worry about something as simple as a Pi not receiving enough power leading corruption of SD card. The micro-cloud instance also gave me a super fast network and disk I/O. I chose to give Fedora a try and eh... it wasn't want I wanted and I walked away from my project ideas and I kept the instance going... just sitting around burning up the the pre-paid credits and promo credits I had.

I don't know how but I stumbled accross traefik which is a clever peice of software which removes many (of my) headaches while self hosting, but the big one to me is wildcard certificates with Let's Encrypt [ACME V2](https://community.letsencrypt.org/t/acme-v2-and-wildcard-certificate-support-is-live/55579). It helped rekindle my desire to do some self hosting and I circled back to my vultr instance. Now I know a rolling distro isn't the ideal choice for a server, I know so many 'things' can go wrong. However, I prefer Arch Linux over Fedora simply because I find that same contentment in running `pacman -Syu` as I find tinkering with a static build system.

One project I've been wanting to tackle for sometime had running my own git server, with a web presence; which is another topic all together. I knew I would face a few obstacles, documenting the solutions lead me to running an instanace of Ghost.

Ghost is where this all starts. I’ve been growing tired of my Gatsby based site simply because I don’t have the time to invest in the “tooling”. I did not want the site to stagnate and lag behind the tip of the spear. It had lagged because I ultimately did not want to invest the time. That is a telling sign that I need to make a few changes. I already have a Ghost instance running maybe that could work out.

Is running a dockerized instance of Ghost on a low end VPN instance with memory constraints is not a wise choice. I realize all that idiosyncratic, self-indulgent, tinkering has prevent me communicating my thoughts and ideas. A good solution would be keeping a static build, it was involve Lessing “tooling” and mostly it would involve selecting a theme that I could live with. I was left picking between Jekyll and Hugo, Hugo has less tooling and the winner.

With any luck I will be better at communicating me.
