+++
categories = ["API", "PHP", "Symfony"]
draft = true
date = "2017-05-22"
tags = ["symfony", "symfony3", "php", "api", "mysql", "rest"]
title = "Building a RESTful API with Symfony3"
description = "After learning some basic Symfony at work, I took the knowledge home and applied it to my own sample application. This walkthrough covers CRUD operations and testing with the Symfony 3 framework."

+++

# Intro
I'm going to be utilizing Symfony 3 to build out a RESTful API. 

**Disclaimer:** I am not a PHP developer. I am merely documenting my learning and process I was exposed to. This walkthrough does not address security flaws which exist in this application.

# Stuff you need to install
1. PHP (I'm using version 7.1.2)
2. MySQL
3. Symfony framework

The easiest way to tackle the first 2 steps above are via [homebrew](https://brew.sh/).
```
brew update
brew tap homebrew/homebrew-php
brew install php71
brew install mysql

# check if successful (may need to open new terminal window/tab)
php --version
mysql --version
```
Lastly, it's probably useful to install [Symfony](http://symfony.com/doc/current/setup.html) as well.

The link above is for the Symfony setup page, but for the lazy here's what you need.
```
sudo mkdir -p /usr/local/bin
sudo curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony
sudo chmod a+x /usr/local/bin/symfony

# Did it work?! (again, may need new tab/window)
symfony -v
```

# Let's create a project
Imagine for a second... imagine something exciting we could build with our API, now forget your idea because we are making a TODO app.

<img class="img-160" src="/blog/images/dealwithit.gif" alt="Deal with it">
```
# run this in your terminal
symfony new todo_api
# after Symfony does its thing
cd todo_api
```
> NOTE: I'm sure you have used other package managers to install dependencies, [Composer](https://getcomposer.org/) is what php uses. This should be included when you drop a new symfony project. Follow [this link](https://getcomposer.org/doc/00-intro.md) for details on how to install manually to your global PATH or otherwise.


