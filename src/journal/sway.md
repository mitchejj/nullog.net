---
title: swayed by ansiable
date: 2020-02-17T14:53:01.628560077-05:00
---
So I moved to Linux; again.

This needs more of a back story, and this isn't the place for that. What this is about is my use of the Raspberry Pi's in providing a good chunk of critical infrastructure to suit my needs. Most of this started with using an iPad Pro as my main daily computing device. The initial use case, initially, was to create a Wireguard interface as many public wifi's I was using was not allowing me to connect to some mainstream sites... like github.io, mozilla.org. Secondary, I need to connect to a something where I could work on my site, which yeah that never really happened. From that I thought about setting up a DNS server to help block ads and now I was off to the races.

Most of year I was happy with this setup, until I started to think about redundancy after all the Pi's are all running of an SD card. Failure waiting to happen, I wanted to find a quick and easy way to help replicate my setup. I chose Ansiable, moved everything to containers and once again was happy. Then out of nowhere my ISP implemented CG-NAT. I could no longer access my home network from a distance. 

I eventually found a method that would allow me do what I wanted, but it required jump server between my remote location and home home network. I created an Ansiable project just for that. It has some rough edges, yet I'm happy with the initial outcome.

As the year ended I have a two RPi4's a 1GB and 4GB model both running Ubuntu 19.10 with an identical software stack, mostly. The 4GB model also is my main file server (smb) and Wireguard interconnect between the server in cloud and my home network. I also have a Pi Zero W tucked away in the basement running my main Pi Hole instance.

I found myself starting to embrace the keyboard as my main way to interface with the computing environment, when I started to have keyboard issues with my iPad my usage when down. I have since bought a cheap Windows laptop, a Motile from Walmart, and replaced with with Arch Linux... installed Sway as my WM and been happy thus far.
