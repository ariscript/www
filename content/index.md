---
layout: layout/entry.njk
title: Home
description: PL researcher, but also a person.
---

{%- css %} {% include "style/index.css" %} {% endcss %}

{%- html "head" %}

<link rel="alternate" type="text/mf2+html" href="/blog" />
{% endhtml %}

<header class="index-header">
    <div>
        <h1 id="index-name">{{ config.author.name }}</h1>
        <p id="pronouns">she/her</p>
        <p id="welcome">👋🏽 Welcome!</p>
    </div>
    <figure>
        <img 
            id="headshot"
            src="/img/me.jpg"
            width="128"
            alt="photo of {{ config.author.name }}"
        />
        <figcaption>
            photo by
            <a href="https://elaine.foo/">Elaine Zhu</a>
        </figcaption>
    </figure>
</header>

Hi! I'm a third-year computer science undergraduate at Northeastern University.
My research interests lie in the intersection of programming languages and
human-computer interaction: I want to design tools to make it easier for
developers to formally reason about their code and build safer systems.

<h2>News</h2>

- **January 2026:** I will be TAing for CS 4400 (Programming Languages) this
  spring
- **December 2025:** Our PriSC workshop submission on RichWasm 2 was accepted!
- **October 2025:** I presented our work on miniDusa at Scheme 2025 at
  ICFP/SPLASH
- **October 2025:** Zachary Eisbach and I presented our work on miniDusa at
  RacketCon!
- **June 2025:** I attended
  [OPLSS 2025](https://www.cs.uoregon.edu/research/summerschool/summer25/index.php)
- **March 2025:** I have been accepted as a research assistant under
  [Prof. Amal Ahmed](https://ccs.neu.edu/~amal)!

<h2>Publications</h2>

{%include "partials/pubs.njk" %}

<h2>Speaking</h2>

- **miniDusa: an Extensible Finite-Choice Programming Language:**
  [RacketCon 2025](https://youtu.be/9HNrYJLeJ5k),
  [Scheme 2025](https://youtu.be/FoBvgu5enh8)

<h2>Teaching</h2>

- **Spring 2026:** TA for CS 4400/5400
  [Programming Languages](https://pages.github.khoury.northeastern.edu/sholtzen/cs4400-spr25/)
  with [Prof. Steven Holtzen](https://ccs.neu.edu/~sholtzen)
- **Summer 1 2025:** Course assistant developing materials for
  [CS 2000](https://neu-pdi.github.io/cs2000-public-resources) (Intro to Program
  Design and Implementation) with [Prof. Daniel Patterson](https://dbp.io/)
- **Spring 2025:** TA for
  [CS 2510 accelerated](https://course.ccs.neu.edu/cs2510asp25) with
  [Prof. Ben Lerner](https://blerner.github.io/)
- **Fall 2024:** TA for
  [CS 2500 accelerated](https://course.ccs.neu.edu/cs2500accelf24) (Fundamentals
  of CS 1) with [Prof. Ben Lerner](https://blerner.github.io/)
- **Summer 1 2024:** TA for CS 2510 (Fundamentals of CS 2) with
  [Prof. Leena Razzaq](https://ccs.neu.edu/~lrazzaq)

<p class="flag">🏳️‍⚧️</p>
