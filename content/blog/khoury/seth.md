---
title: "Guest Article: An Opinion on Proposed CS Curriculum Changes"
description: Written By Seth Margolin
author: Seth Margolin
date: 2024-11-18
tags:
    - education
    - khoury
license: N/A
hidden: true
---

> This article was written by Seth Margolin, not myself.

# An Opinion on Proposed CS Curriculum Changes

After hearing about the upcoming changes to the CS curriculum here at
Northeastern, I feel obligated to write my opinion on them. As a first-semester
freshman, what changes or doesn't have a major impact on my education, my path
at Northeastern, and my career beyond.

While I cannot speak on the changes to higher-level courses, I can talk about
the change from Racket to Python for Fundies 1.

## Who am I?

My name is Seth, and I am a current F1a student. This blog's author happens to
be one of my TAs as I'm sure they've mentioned. Huge thanks to them for allowing
me to speak my mind on their blog.

Before Northeastern I'd been coding for around 7-8 years, mostly making projects
that I found fun or interesting. Recently, that has extended to more
professional projects as I look to enrich my skills to prepare for co-op and
life beyond Northeastern.

Admittedly, I am not well qualified to talk about the changes to the curriculum.
I am confident that many of my fellow students have more direct reasoning for
why we as a whole disapprove of this change. That is why, instead, I'd like to
talk about how F1a has changed everything I know about programming, how I
program, and everything in between.

The above sentiment is something I've heard from plenty of my fellow F1a
classmates. That simple fact is astounding to me; 8 years of habits, skills, and
ideas, completely altered and changed over the course of a single 3-month class.
Data Definitions, design recipes, breaking apart tasks into functions that do
only one part of it, all of this has infected the way in which I code, and has,
without question, made me a better programmer.

It is my belief that moving away from HTDP Racket as the introductory CS course
at Northeastern will deprive future students of learning how to program coherent
and legible programs. Further, HTDP Racket teaches students how to build their
programs from the most basic of data into complicated, beautiful ideas, and do
that in a legible way.

## Changing Fundies 1 from HTDP Racket to Python

### Why this seems good:

1. Python is a fundamentally easier language to pick up and understand due to
   its readable syntax and unrestrictive program design.
2. Python encourages iteration, which feels much more natural to understand than
   HTDP's near requirement for recursion (especially at the beginning)
3. Variables in Python are easy to work with and are mutable, while Racket only
   has immutable constants that are much more restrictive.
4. Fundies 1 in Racket can dissuade new programmers from continuing down the CS
   path and doesn't teach very practical skills for students taking it only to
   learn a little bit of coding
5. Unlike Racket, Python is widely used in all sectors of the CS industry and
   therefore is more "practical" to teach.

### Why this is not:

1. Python's unrestrictive and forgiving syntax is its greatest boon to an
   inexperienced programmer
    - You don't _have_ to follow any design recipe or structure in Python
    - The structure of Pythonic programs is therefore up to the programmer
    - For inexperienced programmers (myself included, especially before F1a),
      following a rigorous structure feels tedious, time-consuming, and
      unnecessary.
    - If it works it works, right?
    - However, without good design, other people cannot read or understand the
      program.
        - In fact, the programmers themselves may not be able to some time after
          writing it.
2. Iteration is, frankly, too easy.
    - For and While loops are versatile, intuitive, and easy to use
    - Recursion on the other hand is tedious, less intuitive, more restrictive,
      and far slower
    - However, Recursion forces the programmer to think about what is happening
      at every step of the program
    - Especially in the case of Racket where you commonly lose previous context
      in recursion, it forces good design and coding practices
3. The mutability of variables adds variability.
    - While this makes sense, this allows for poorly designed programs where the
      types and data stored in variables, well, variable.
    - Meanwhile, the only way to update variables in Racket is to completely
      reconstruct the datatype and return it from a function
    - This forces the programmer to be very intentional with what they are
      computing, changing, and returning, enforcing good design

## Ideas 4 and 5

-   I think these are the strongest reasons for beginning to teach Fundies 1 in
    Python, and I agree with them.
-   However, I think teaching Python as the first course in the CS Curriculum
    deprives CS majors of important fundamental skills
-   Therefore, I would like to propose a new standalone course (or series
    thereof) that teaches Python and can accommodate students new to programming

### A Potential Solution

-   I've already explained above why Python for the start of the Fundies
    curriculum can teach new students bad habits.
-   However, as 4. and 5. point out, Racket/HTDP teaches very little other than
    good fundamentals.
-   While this is great for people who are committed to learning CS, this can be
    very detrimental for those unsure or interested in learning only the basics
-   A new course taught in Python and aimed at these groups, to teach the basics
    of coding in a widely used and practical language, solves this issue
    1. For those who are committed to CS, they still learn the proper
       fundamentals and design habits for programs that will benefit them in
       future classes and their career beyond Northeastern.
    2. The Fundies curriculum retains its rigor, producing students that
       companies will want to hire for co-ops.
    3. For those unsure or wanting the basic ideas, this new course provides
       them with a new gateway to learn programming.
        - This would reduce potential bars of entry to the CS curriculum, or
          more aptly provide a more enjoyable initial experience to programming
        - This would also give any student who takes it actual programming
          know-how and skills
        - Any student who now finds themselves uninterested in pursuing
          programming as a career at least walks away with basic skills in a
          practical language, which can be used in a casual or professional
          context later in life
        - This class (or maybe a more rigorous version of it) can also be
          offered to CS majors as a way to gain practical skills that would be
          valuable to job interviewers

## The Takeaway

After experiencing Fundies 1 taught in HTDP, I can confidently say that I am
happy the class was taught in Racket and not a more "practical" language such as
Python. The fundamental skills I have learned in this class are transforming how
I think about programming and have proven quite valuable in all of my
extracurricular projects. I do admit that Racket is imperfect and not the best
as a beginning coding experience, especially for those unsure about programming.
I believe a parallel course to Fundies taught in Python solves these issues,
maintaining the virtues that Racket teaches while giving a separate path to
learning programming with more emphasis on practicality and immediate learning.

I realize the hypocrisy in my statements, saying that I am not qualified to talk
about the changes to the CS curriculum as a whole, and then providing a solution
to the issue. I'd like to chalk that up to my naivety in both programming as a
whole and the CS curriculum at Northeastern. But isn't that the entire argument?
I used to be a very naive programmer, one that never tested, barely considered
types, and one that did not care about readability. Now, all of these define how
I approach programming. Objectively, that makes me a better programmer. I
attribute all of that to the HTDP Racket ideology. This growth would have been
impossible, or quite challenging to achieve if I was taught in a different
language. Removing that from the graduates Northeastern produces, I find, would
be a tragedy.
