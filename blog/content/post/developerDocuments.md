+++
draft = false
categories = []
date = "2017-06-27"
tags = []
title = "Developer Documents"
description = "This post will be about keeping error logs, noting your install scripts/procedures/tools. Stuff that you should write down or make note of to reference later."

+++

# Document your s#!t
Scenario: You set up a new project on your machine, run into problems, missing packages, installation errors, system configs, etc. So you spend time Googling and finally get all up and running. Once the project is finally up, you are so ready to _actually_ get started working you never make notes of the small trolls that stand in your way. 

Fast forward a couple weeks/months and you are helping a friend or coworker set up this project on their machine, or just trying to reinstall on another machine of your own. All those little things will likely pop up again, and the cycle starts over. If you haven't had this happen yet, you will.

# Places to start
The first place I started, and the simplest way (even for those who are not programmers) is to make a Google Sheet. It is accessible from anywhere and thus kept up to date. 

### A few basic columns to set up:
#### Error
* The error message or problem that you ran into. The more info the better, copy the whole damn stack trace.

#### Solution
* See title. The command you ran in the terminal, a link to the stack overflow answer, whatever steps helped solve that error.

#### Additional Columns
* A column for what operating system this occured on. Also screen shots can be helpful.

# Setup scripts
I started getting annoyed with setting up new machines. Within 2 years I had set up my personal laptop, my work laptop, my personal laptop again (after getting new SSD), then my work laptop again (was issued new machine), then installed Ubuntu on my desktop while saving up for a new macbook, then my macbook once purhchased, and finally the iMac at my next job. 

### Make notes of what you install
At some point I started making notes in a `setup.txt` file of what steps I took and what programs I installed. This served as a reminder of all the small packages that needed to be installed to get me up and ready to develop.

#### Dotfiles
These notes started out as notes, but later transitioned to actual `.sh` scripts which can be executed in one command. These are commonly referred to as dotfiles. Many people have their own dotfiles repos on github and some have become very popular amongst the community. 

[Github list of Dotfiles](https://dotfiles.github.io/)

My current dotfiles repo is a work in progress, but here is a link to how I have started converting mine from `.txt` to `.sh` [ekDotfiles](https://github.com/eklemen/ekDotfiles)
