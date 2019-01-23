---

layout: post

date: 2019-01-22 12:55:00 -0500
title: Meetings

category:   [dev]

---

## I have discovered an ODD bug. 

At work&mdash;I have a Dropbox folder that holds local git repositories of working code. I find this to be horribly convenient when I want to work on my code at odd times. I can just fire up an editor, and have at it. No need for github, these are local repositories. 

One of these repositories needs to be shared with my team members. My team members use JetBrains WebStorm to edit HTML that eventually ends up in an LMS, or in a learning object on a web server. We use Jekyll to build and manage learning units, and Canvas LMS for courses. They do not use git, nor have they ever been required to. I do not use WebStorm. I use SublimeText along with SourceTree. 

Since my team members need access to the code in repository on Dropbox, I just shared the root folder of the repository using Dropbox. They could then just work from that same folder to make all the HTML copy pasta that they need to. Once I shared the folder I started to get notices from Windows saying that team member one had made changes to WORKSPACE.XML. Every time one of my teammates saved any change I got that same notification. 

The XML file I was getting the notification for is located inside a hidden directory named ".idea". Each time a different team member edited a file&mdash;a notification was triggered. After a little research I found that that file is used to keep track of options for JetBrians projects. I could get this to stop updating if I just disable any plug in that was associated with any version control systems. The ones we had installed, by default, were git and subversion. Once those were disabled I restarted their WebStorm, and no more weird notifications. 