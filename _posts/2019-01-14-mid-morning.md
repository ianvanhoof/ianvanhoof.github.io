---
layout: post

date: 2019-01-14 07:28:49 -0500
title: Back to Canvas, and Python

---

## Back to Canvas

At work now, and seeing what I need to do. Today I am working ahead of two other teams on the Canvas Conversion project. My part in this process consists of me backing up our content, then extracting our content from each course so we don't have to so an extra copy pasta pass. To extract the content I use python to parse and search the .DAT files, then output that data to a common HTML file thus making it easier for our team to consume into the Canvas course front end. 

It all starts with me getting into the Blackboard LMS and downloading the archive. This always turns out to be the longest step in the process. Working in Blackboard is always time consuming because it becomes this,*click*,death of 1000 clicks,*click*,path of torture*click*most huge LMS's are the same. Start by *click* *click* *clicking* all the way into the course you would like to archive. Then *click* *click* into the admin area which holds the archive menu./ *Click* *click* then *click* again to start the archive process. Now you are all set to wait the 5 to 30 minutes it takes for the archive to be created. When your archive is done cooking you will get an email from the Blackboard system, and your fresh from the oven archive will be available in the archive area. Make sure to mash the Refresh button if it doesn't show up immediately. Did you mash the Refresh button? One final *click* downloads the archive locally. 

Once all the ZIP files are downloaded, everything speeds up. I use Python to search each file in the directory tree, find our content, process it, then finally write it to an HTML file. To process the whole batch of courses, it usually takes about thirty seconds. The result is our CeL content organized neatly into HTML files. We retain our layout HTML structure, fix semantic mistakes we have found, then put it in a Canvas friendly structure that the team worked to create.

Can you tell...I am writing this during the "death of 1000 *clicks*" phase.


