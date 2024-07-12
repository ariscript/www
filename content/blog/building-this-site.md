---
title: Building This Website
description: An exploration of beauty in simplicity
date: 2024-07-12
tags:
    - tech
    - meta
---

# Building This Website

It's the year 2024 and I want to make a website. The number of options in the
cross-product of all the JS frameworks and CSS libraries are insane, and each of
them comes with its own problems (mainly having to write JS). I wanted to make a
relatively simple website with as much as possible already statically generated
on the server.

## Enter Eleventy

I'm not building the next billion-dollar startup with this page, so I don't need
the power of (or need to pay the relatively large cost of) a huge framework like
NextJS or SvelteKit. Ideally, I'd write some stuff into a few markdown and HTML
files, and that would be my entire website. [Eleventy](https://11ty.dev) is a
framework that lets me do just that.

Eleventy is a static site generator that can render markdown and supports
templating using several libraries (I'm using nunjucks here). You can also
obtain data from external sources through JS and use that at build time to
generate pages.

The initial setup was a little bit annoying and I had to copy some things off
[their example](https://github.com/11ty/eleventy-base-blog/) to get some basic
things working, but once I got that down, I was able to get to a working state
pretty quickly.

The nicest part about this was the flexibility, I could write something as
simple as a plain markdown file, or something more complex resembling a server
component in other frameworks, and it all just works[^1]. RSS and JSON feeds are
almost free with the infrastructure it provides.

## Control

With Eleventy I maintain full control of all the HTML in the rendered output, so
I can avoid ugly JS framework artifacts like a bunch of nested `<div>`s that do
nothing in my beautiful semantic HTML. I can maintain a reasonable appearance
even on [CSS Naked Day](https://css-naked-day.github.io) with a semantic layout.

I believe there's beauty in simplicity and presenting HTML as it was intended to
be written, with a small amount of CSS and JS (let JS run the show when there's
a show to be run, not a paper to be published). All the CSS I wrote is fully
handwritten and serves to enhance, not patch over, the original HTML.

Eleventy also lets me run custom transforms on build outputs, and people usually
run minifiers here. On the other hand, I decided that it would be cooler if
people can see and _understand_ the page content, so I run files through
Prettier instead[^2].

You can see the entire source code for this website
[here]({{ config.repoUrl }}).

[^1]:
    To comply with open source licenses like MIT that require me to reproduce
    the license notice in derived work, I [wrote a
    page]({{ config.repoUrl }}/blob/main/content/licenses.11ty.cjs) that scans
    my dependency tree and writes their license into [/licenses](/licenses).

[^2]:
    There are some artifacts with Prettier that I couldn't easily get rid of,
    specifically indentation for comments, but that's a fairly small area of
    code.
