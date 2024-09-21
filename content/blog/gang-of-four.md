---
title: Dear Gang of Four
description: No, we have function pointers at home.
date: 2024-09-20
tags:
    - tech
    - education
---

# Dear Gang of Four

You wrote a book. It was a really good book - in 1994. Should it still be _the_
book three decades later?

> Note: I'm aware the book has its examples written in C++ and Smalltalk, but
> both are langauges I don't know. I'll mainly be talking about these in the
> context of Java, since that's what I was taught in class and am most familar
> with - though the substance of my point carries throguh to any pure-OOP
> language regardless.

In 1994, Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides published
a book titled
[_Design Patterns: Elements of Reusable Object-Oriented Software_](https://en.wikipedia.org/wiki/Design_Patterns).
Naturally, this book discussed various design patterns that, in the authors'
opinions, make for good code. There are three major types of design patterns
represented in the book: creational, structural, and behavioral.

## Behavioral Patterns

To get the good parts out of the way, I don't have too many complaints against
the creational patterns: Pure-OOP languages like Java really provide no better
mechanism to do what they do, so they're good patterns to learn about. Beyond
these, most of the other patterns we went over in class did not spark joy.

## Structural Patterns

Here's really where my main issue lies with the Object-Oriented design patterns.
There are some good ones here, though I'd argue that many of even those are
results of limitations imposed by pure-OOP languages. I'm going over selected
examples from how I learned about them in class and from my understanding of
them as written on [refactoring.guru](https://refactoring.guru/).

### Adapter

The adapter pattern is a good design pattern simply based on how
self-explanatory it is. It's fairly simple to think about two similar interfaces
and needing to have a way for one implementation to be used as both of them.

### Composite

This is just a tree.

### Decorator

"Mom can we have functional programming?"

"No, we have functional programming at home."

Functional programming at home: Decorator.

The decorator pattern is presenting function composition to people who are too
deep in OOP to understand such niceities. They're composable wrappers over other
objects that don't affect how the caller has to handle them, just like taking
functions over a given signature - it doesn't matter what the function does if
you can call it and get the result you want. The decorator pattern is just a way
to monkey-patch this feature into a language that doesn't have them.

## What now?

As much as I'd like to, I will not seriously suggest that everyone should
rewrite their old code in Rust, or some other language.

What I will suggest though, is to try to untie your code from the hegemony of
this book and its design patterns. They're useful tools to see what your code is
doing, and many of these are common enough occurences that they ought to have
names - but they shouldn't be the first, let alone only reason why your code is
organized the way it is.

There are even modern features in languages like Java and C++ that let you
improve most of these boilerplate patterns to concise and declarative functional
programming. You can see how this is done in Java in
[this talk](https://www.youtube.com/watch?v=V7iW27F9oog).
