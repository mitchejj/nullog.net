---
title: An update
date: 2020-11-19T16:31:37.993498589-05:00
---
I've been spending the last couple of month thinking about how I want to store notes. Far to often I write down a note and forget it. This method is far form ideal, it pile of sticky notes tossed into the filing cabinet.

At first I thought [vim-wiki](vim-wiki) would be my savior. I could use markdown and easy to navigate. After a couple of days of use a some obstacles arose. First, the plug in processed all markdown files I was editing and would hide/alter the text. The fix:

    let g:vimwiki_global_ext = 0

Next I wanted the ability to type `notes something` and be right in my notes for something. For this I made a silly bash function:

    function notes {
      cd ~/git/notes
      if [[ "$#" -gt 0 ]]; then
        edit $*".md"
       else
          edit Index.md
      fi
      cd ~-
    }

That does work. Yet, I still don't fully like how Vimwiki formats displayed text, namely URL's.

I then tried out [vim-gist][vim-gist], I know this is not the intendant use case for gist and a has potential issue with sensitive information. Yet, this is nearly ideal for my needs. First, it has git commits built right. Second, all my note are now accessible when away from my computer. I can update them when anywhere. To make this work for me I also crafted a little function, which I will need to turn into a script.

This might be want I need to fuel one goal I've think of putting on my 2021 to-do list --- spend more time working on programing. I'm thinking I should invest time into Python, TypeScript/JavaScript and possibly Rust.
