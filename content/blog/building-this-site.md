---
title: Building This Website
description: Write your own markup for fun and profit
date: 2024-07-12
updated: 2024-09-20
tags:
    - tech
    - meta
---

# Building This Website

It's the year 2024 and I want to make a website. The number of options in the
cross-product of all the JS frameworks and CSS libraries are insane, and each of
them comes with its own problems (mainly in the amount of required JS). I wanted
to make a relatively simple website with as much as possible already statically
generated on the server.

## Enter Eleventy

I'm not building the next billion-dollar startup with this page, so I don't need
the power of (or need to pay the relatively large cost of) a huge framework like
NextJS or SvelteKit. Ideally, I'd write some stuff into a few markdown and HTML
files, and it goes on the internet. [Eleventy](https://11ty.dev) is a framework
that lets me do just that.

Eleventy is a static site generator that can render markdown with zero
configuration to start! But you can also configure it infinitely to your heart's
content, using templating (I use Nunjucks) and **build time** JS processing.

The initial setup was a little bit annoying and I had to copy some things from
[their example](https://github.com/11ty/eleventy-base-blog/) to get some basic
functionality working, but once I got that down, I was able to get to a working
state pretty quickly.

The nicest part about this was the flexibility, I could write something as
simple as a plain markdown file, or something more complex resembling a server
component in other frameworks, and it all just works[^1]. RSS and JSON feeds are
almost free with the infrastructure it provides.

## Semantic HTML

With Eleventy I maintain full control of all the HTML in the rendered output, so
I can avoid ugly JS framework artifacts like a bunch of nested `<div>`s that do
nothing in my beautiful semantic HTML. I can maintain a reasonable appearance
even on [CSS Naked Day](https://css-naked-day.github.io) with a semantic layout.

Semantic HTML is beautiful and accessible by default, and creates websites as
they were intended to be. Using a small amount of CSS and an even smaller amount
of JavaScript can go a long way, a library like Tailwind is not necessary here
\- CSS should serve to _enhance_ your HTML, not to patch its flaws. Let
JavaScript run the show when there's a show that needs to be run, not a paper
that needs to be published.

Eleventy also lets me run custom transforms on build outputs, and people usually
run minifiers here. On the other hand, I decided that it would be cooler if
people can see and _understand_ the page content, so I run files through
[Prettier](https://prettier.io) instead[^2].

## Control

The nicest thing about static site frameworks, especially for smaller projects
like this, is that I have full control over what makes it to my final output,
and therefore what the user sees. Visiting my website this page downloads
exactly the following:

-   The HTML for this page, including all relevant CSS
-   474 _bytes_ of JS
-   JetBrains Mono (in case there are code blocks in my blog posts)
-   Favicons to appear next to exeternal links

I've tried my best to minimize the amount of clientside JS I ship as much as
possible - short of codegolfing the file I do send. Currently, I send a
[single file](https://github.com/ariscript/www/blob/main/public/js/cssNakedDay.js)
that checks if it is April 9th somewhere on earth, and if so, removes all CSS.
So except for 50 hours out of the year, my website works exactly as intended
with JS disabled.

During the build process, I also go through external links in my blog posts, and
insert the favicon of the website that it leads to. It has trouble in some
cases, leaving an empty space for missing favicons and almost invisible icons
for some websites in dark mode. I haven't been able to find a good solution
short of special casing websites, which I've done for GitHub links. since I
forsee I'll use them quite a bit - try switching betwen light and dark mode and
see how the link icon changes! I'd be happy to hear any other ideas to fix this
that don't massively slow down builds.

You can see the entire source code for this website
[here]({{ config.repoUrl }}).

[^1]:
    To comply with open source licenses like MIT that require me to reproduce
    the license notice in derived work, I [wrote
    a page]({{ config.repoUrl }}/blob/main/content/licenses.11ty.cjs) that scans
    my dependency tree and writes their license into [/licenses](/licenses).

[^2]:
    There are some artifacts with Prettier that I couldn't easily get rid of,
    specifically indentation for comments, but that's a fairly small area of
    code.
