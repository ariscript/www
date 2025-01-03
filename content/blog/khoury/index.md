---
title: To Khoury College
description: Hear Us Out.
date: 2024-11-18
updated: 2024-11-27
license: CC-BY 4.0
tags:
    - education
    - khoury
---

I had another post lined up singing the praises of the Design Recipe, but first
I must defend it in the hour of need.

I want to make this very clear:

> **[We, the students of Khoury College](https://change.org/savefundies)[^1],
> want our voices to be heard as these changes to the curricula are being
> discussed.**

We are not asking to fully abandon the changes being worked on, some of the
changes being discussed are net positives. What we do want is for representation
in the process of making these changes.

The [How to Design Programs](https://htdp.org/2024-11-6/Book/index.html)
curriculum teaches students how to think, and how to approach good software
design, rather than teaching them to use the current tool du jour. In the spirit
of the Design Recipe, (as one of my friends put it) the most important thing
that we need to preserve through these changes is "the purpose statement, not
the implementation" of our current curriculum.

This post will be updated as I cohere my thoughts further and have more to say,
or as I get further information.

> This post was heavily edited on Nov. 23 as my understanding of the situation
> has changed significantly.
>
> I also rewrote much of the later half of this article on Nov. 27 to
> incorporate more information from Prof. Felleisen and added some polishing
> touches.

## Who am I?

I'm a second-year Computer Science student who has taken the accelerated
sections of CS 2500 and 2510. I'd like to take CS 6410 and 4500 in the future,
if they'll even be offered after the current or next semesters.

I also was a TA for CS 2510 in the past summer, and for the accelerated section
of CS 2500 currently. I want to TA other courses, like accelerated CS 2510 and
potentially CS 4410/6410 in the future. I am also strongly considering going to
graduate school, and potentially considering teaching classes in the
introductory track as a career.

I want current and future students to get a good education, and I feel that
these changes have the potential to undermine the value of a Khoury degree, even
for students that have taken the current versions of these courses.

I have my horses in this race and want Northeastern to remain a top-tier
undergraduate school, particularly in the Programming Languages field.

## Designing Programmers

The current introductory curriculum is to get students to _think systematically
about design_, not teach a specific programming language.

The HtDP curriculum enables students to approach problems in the right way,
letting data be the most important informer of how the code is laid out. The
actual language being used in the course is not the most important, but the
concepts being taught are vital. Python as a language has a lot of annoyances
that are not particularly conducive to introductory students, and I would prefer
if a more education-oriented language like Pyret was the first encounter
students have with designing good programs. Many advanced concepts in Python
need to be introduced for students to do even some basic things, and they'll be
oversimplified or hand-waved until they're ready to fully understand what
they're writing. In contrast, an education-oriented language will let students
build up from first principles without having this issue.

To adequately prepare students to become highly skilled software developers, the
introductory courses need to start from the ground up - and (especially for
students with prior experience writing code) filter out anti-patterns from the
way they write and reason about their programs.

## Computer Science for Everyone

Khoury's main mission is "CS for everyone". It is not "CS should be easy".

Every course in Khoury should be very possible to pass given appropriate effort
from the student, sufficient support from the course staff, and knowledge of
prerequisite topics as described by the course listing. This is very much true
of the courses I've taken so far: CS 2500, 2510, 2800, and 3500. If the course
offerings on satellite campuses don't sufficiently prepare students to take
higher level courses in Boston, those are the courses that should be updated to
be more rigorous. As
[Daniel Melcer](https://melcer.dev/2024/11/20/open-letter-khoury-curriculum.html)
put it, "it would be an error to let the lowest common denominator prevail".

It's infeasible to make the introductory courses easier or worse to get more
people to pass them. In a classic case of
[Goodhart's Law](https://en.wikipedia.org/wiki/Goodhart's_law), changing these
courses to chase better statistics will end up in providing a worse educational
experience where more people pass, but everyone learns less as a result.
Admitting that classes need to become easier in order for more students to pass
them is a failing from the administration and shows the lack of support systems
in place for students to get the best education possible. This will be
counterproductive to the College's interests by creating worse graduates,
diminishing its reputation to employers and making it harder to serve its main
mission.

## My Personal Experience

> For a more concise summary of (current public knowledge of) proposed changes,
> see [Owen's Post](https://owen.duckham.dev/blog/curriculum-info) outlining
> these details. I'll be sprinkling in what I know along with my thoughts on it.

As stated before, I've taken many of the courses slated on the chopping block to
be either fully eliminated or heavily modified. I also want to take some more of
these in future semesters. It's worth going into how I feel about each one
individually.

### Fundamentals I

Let's start from the beginning.

I took the accelerated section of CS 2500 with Prof. Patterson in Fall 2023. My
section was a little different from the others, but I hope I can still speak
generally here, from what I know talking to other students that took the
standard sections of the course.

I came into Northeastern with years of programming experience and felt like I
was too good for even the accelerated section and should be placed in OOD at
least. In hindsight, I think that having this opportunity would've been
detrimental to my education - and know some people who regret testing out of
these classes as well. Importantly, this course changed the way I think about
the code I write, and got me out of the habit of many bad patterns.

Though not the primary purpose of the course, program design was approached from
a functional perspective, which offered my first real foray into the world of
functional programming. If it weren't for the design of the course, along with
the specific assignments, I wouldn't have discovered my interest in the field of
programming languages as early as I did (or ever). If I was allowed to skip the
proposed CS0 because of my AP credit, and take CS1 purely in Python, I don't
think I would be anywhere close to where I am now - both in terms of programming
ability and in terms of knowing what I want to do with my life.

### Fundamentals II

As the next course in the Fundamentals track, this course developed on much of
the concepts taught in Fundamentals I, with a specific focus on object-oriented
design and bringing in static type checking as another tool in the students'
toolbox. It's taught in Java for a somewhat similar reason as the proposal calls
to teach earlier courses in Python, to use a relevant industrial language to get
students prepared for co-ops - though there are still many guardrails around the
mess of Java to keep students writing well-designed code (notably
course-specific libraries like `funworld`).

A lot of the course is focused on making good abstractions using `abstract`
classes to share common functionality between several classes implementing an
interface. This culminated a longer-term project to make two separate games with
one codebase by sharing almost all the game logic with very small differences in
each of the classes driving the two different games, encoding their specific
rule sets.

The course also later transitions to a more imperative programming style, which
is more representative of industrial Java due to its poor support of true OO
design, as outlined in books such as
[Effective Java](https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997)
Concepts like imperative `while` and `for` loops must be introduced as an
alternative to recursive code in a context where the language doesn't implement
proper tail call optimization for deeply recursive functions.

I also took the accelerated section of the course with Prof. Lerner this past
spring. Our section went over concepts than this, and had a brief foray into
data structures and algorithms. We worked on tree and graph-based algorithms
such as Kruskal's and some dynamic programming problems - resulting in some cool
projects like a maze generator and an image
[Seam Carving](https://en.wikipedia.org/wiki/Seam_carving) app.

Fundamentals II teaches OO design from first principles they learned in the
previous semester, and builds to the way that these concepts are currently used
in industry. Students leave this course well-prepared to take Fundamentals III:
the gatekeeper of co-op.

### Logic and Computation

I took CS 2800 with Prof. Patterson, with his rework of the course, and it was
really quite good. It was definitely on the easier side for someone coming
directly from 2500 as it was in a familiar language with some additional
features. Once again this course had some PL-y undertones and helped me learn
about these topics further: Prof. Patterson connected me to Prof. Ahmed and the
Rocq Reading Group that ran this semester.

The course provided a gentle on-ramp into formal methods and verification topics
that students will otherwise never see in their coursework, and will never know
if they like it and want to pursue this area further. Removing a course like
this will significantly reduce the proportion of undergrads that end up doing
research or wanting to do a PhD.

### Object-Oriented Design | Fundamentals III[^2]

I must admit this was my least favorite course on this list, but not for the
usual reasons. Unlike the previous courses where I thought I knew everything but
had my eyes opened, it was somewhat the opposite with this one: I expected that
it would cover concepts I didn't know, but it was mostly going through the
[Gang of Four's book](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)
but in Java instead of in C++, and covering some MVC concepts. I previously
wrote an [article](/blog/gang-of-four) directly inspired by my experience taking
this course and my thoughts on the book (it definitely isn't my best-written
article).

The course that I took was not particularly hard, just a lot of homework to do.
There were a lot of things covered in it, but I felt I learned more overall in
Fundamentals II than my section of OOD. I think there could be value in reducing
the workload for students, and there certainly is value in increasing the
educational value of the course (in the way that the course is offered by Profs.
Lerner and Nunez as a "small Software Dev"). In either case, students will come
into this course well-prepared if their Fundamentals I and II were as intended.

> The below higher-level courses are in high risk of being eliminated or watered
> down to compensate for the lower standards taught in the introductory
> material. These are also classes that I haven't yet taken (and may not ever be
> able to take), so use the appropriate amount of salt for this segment.

### Software Development | Fundamentals IV

I haven't taken Software Development yet, but it was definitely in my plans to
do so, as long as it continues being offered (and I hope it does). I'm not
qualified to comment on what I liked about it or why it should stay, but it's
the culmination of the four-part Fundamentals track, and offers a much more
in-depth approach to design and (most importantly) _talk about_ software.
Codewalks are the core of the course and build very important career skills for
students. I fully believe that this course, or something substantially like it,
is critical to develop a student into a skilled and highly competent developer
\- and it very much raises the value of a Khoury graduate over those of other
schools.

### Compilers

I'm registered to take Compilers this upcoming semester with Prof. Lerner. Much
like Software Development, this course is also a in some ways a culminiating
course in the Fundamentals track, and in the words of Professor Lerner himself,
"the final form" of the design topics introduced in the previous three
Fundamentals track courses. The course teaches a modern approach to compiler
design, using industrial languages created specifically for this purpose -
giving students practical experience in compiler systems. Northeastern is very
unqiue among universities to teach the course in this way, and I believe that
our computer science program benefits from it greatly. It helps students get
prepared both for industrial jobs in this area and for further education or
research.

## Other Testimonies

I'm not the only one having these feelings about the course changes, and there
are many others that want to share their own opinion; I'll link to them on
[the Voices page](voices) and update it regularly.

## Acknowledgements

I want to thank Prof. Felleisen for his input, which heavily informed a lot of
the things I wrote about. If you want to hear about the motivations behind the
way the current curriculum is taught directly from the source, I would highly
recommend reading his
[Developing Developers](https://felleisen.org/matthias/Thoughts/Developing_Developers.html)
article.

I also want to thank my other sources, whom I did not name. You should know who
you are.

Please note that this article is licensed CC-BY 4.0 in the hopes that this
allows further reach. I only ask that you credit anything from this article to
me, but you're free to use anything here.

[^1]:
    I was actually not involved with the creation of this petition, but it is a
    clear indication of support from the general student population that they
    support keeping the unique nature of our curriculum through whatever changes
    may happen.

[^2]:
    I took OOD this past summer. It was not the "Fundamentals III" that it was
    made out to be, and it probably would've been much more useful for me if I
    had taken it in the fall instead. From talking to Prof. Lerner recently
    about OOD, there are definitely portions that my class did not cover, so
    your mileage may vary depending on who taught your course and when.
