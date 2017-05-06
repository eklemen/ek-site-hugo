+++
title = "Hugo post on Hugo"
tags = [
    "go",
    "golang",
    "hugo",
    "themes",
    "development"
]
date = "2014-04-06"
categories = [
    "Blog",
    "golang",
]
description = "First blog post. I have to start somewhere right? This blog was built using the [Hugo](http://gohugo.io) static stite generator. Here's how mine is set up."
+++

## Intro
[Hugo](https://gohugo.io) is a static site generator, not unlike Jekyll or [one of the many others out there](https://www.staticgen.com/). There's a decent number of [themes](https://themes.gohugo.io/) to choose from, and the simplicity to get a functioning site up and running in such little time/effor made this an appealing choice. The appeal of a static site generator is that the build files are... well static. This keeps hosting cheap, and you generally don't need to worry about security breaches *cough wordpress*. 
## Setup
My current set up is to develop and build the site/blog locally and then sync the `public` directory to my s3 bucket which is set up to serve a static site. Here's a quick setup.

#### First update brew and install the hugo cli
```bash
brew update && brew install hugo
```
#### Create a new site
```bash
hugo new site yourCoolSite
cd yourCoolSite
```
#### Hugo needs a theme before it will render anything
For this example we will install the [Cactus Plus](https://themes.gohugo.io/hugo-theme-cactus-plus/) theme, which is the theme this blog is based off.
```bash
# clone theme into your themes/ directory
git clone https://github.com/nodejh/hugo-theme-cactus-plus.git themes/hugo-theme-cactus-plus
```

*NOTE: some themes haven't been updated or are incomplete. The best ones to start with are themes that include an `exampleSite`. This directory will contain the configuration we need to get started quickly.

Copy the contents of `themes/hugo-theme-cactus-plus/exampleSite/config.toml` into the `config.toml` file at your project root. You will see a long list of different configurations. These can be accessed from within the templates in your theme. We will look at how to override certain parts of your new Hugo site a little later on.

#### Serve it
```bash
hugo server
```
Point your browser to `localhost:1313` and boom (hopefully).

#### Adding content
Since this theme is a blogging theme, we should add some blog posts.
```bash
hugo new post/firstPost.md
```
The file gets generated and added to `content/post/firstPost.md`.

#### Overwriting the theme
We don't want to modify the theme directly. One reason is version control will ignore the files inside the theme you cloned earlier. This means if you were to pick it up on another machine, you would have to re-clone the theme. Looking at the files inside a theme, we notice that the folder structure is set up like our own site with images, layout, and static. If you wanted to make some css changes simply create a css file in your `static/css` directory.

Some themes, like the one we are using make injecting new css and javascript easy. Below, I have added `css/overrides.css` since the paths are relative to `static/`.
```toml
# config.toml

customCSS = ['css/overrides.css']
customJS  = []
```

To change layouts, copy the appropriate file from the themes `layouts` directory into your `layouts/` directory and it will overwrite accordingly.

#### The build
To build we simply run:
```bash
hugo
```
This will build your site into `public/` directory which can be moved up to s3 or your own hosting service.

AWS and hosting on s3 is another topic all together, so this conversation will be continued in the [next post](https://evanklemen/blog/s3hosting).