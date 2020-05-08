---

layout: post

date: 2019-01-22 09:03:21 -0500
title: Canvas Interuptus

---

## Moar Canvas

I am struggling to gain traction on the Canvas Redesign Project because I am constantly getting side tracked into more important endeavors. I am doing my best to get the vertical rhythm right. This requires a whole bunch of adjusting of line heights, font sizes, margins, and padding. The work itself gets tweak-y, but I have my numbers in place so it is now just a matter of forcing elements into place. 

As you can imagine that takes a bunch of micro-adjustments. Those adjustments require a huge amount of clicks&mdash;Both to implement and test each change to each page, and as a result adjustments take a huge amount of time. Anything in my life that takes time gets interrupted. I have accepted that, and am using this post as a device to change my thought process. 

## From Canvas to Blackboard. 

At least my mind can stay in the conversion project space, just not in Canvas. Our content is currently in Blackboard which prompted me to build a way to get our content out of Blackboard without having to click myself to death. Python is awesome for things like this. My Python searches a folder full of course archives that I previously downloaded from Blackboard. Each archive contains .dat files that hold our content. My Python extracts our content from these files, and renders them to a separate HTML file. That HTML file then gets fed to a team inserting that curated content into the Canvas front end.

## The content is varied.

This team has been making courses for over 5 years so the content profile varies widely depending on if you are working on a new course or an old one. The instructional & web design philosophy used to build these courses has naturally changed over time as well. For example, in the older courses the module names were trapped in large banner type header graphics. Now we put those headers into proper H2 elements. Both types of header exist in the content, but the newer courses make it easier for me to scrape the content from them. 

Once the content has been scraped it then needs to be written to a file. That means I will need a file name. To make things easier for the people down the production line, I would like for the file name to have something to do with the content that it is containing. To do this I grab some sort of data from the file itself as I am reading it. 

This process has been working for the most part, but each time we come across a course that just would not render. This was always due to the fact that I had found another out lier case where I could find no info in the file to name the file. I am well into the random() mind space already, but still the files will not render. 

This is my task this morning. 

I still have one last outstanding course I need to work on, and that has been my morning. Once I create code that works to fix THIS courses problem, that code is currently breaking other courses that have a slightly different, yet similar, content profile. 

Such is my task this day. 