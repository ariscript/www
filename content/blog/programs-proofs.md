---
title: Programs are Proofs
description: And the Curry-Howard Correspondence
date: 2025-01-01
tags:
    - education
    - tech
---

A postdoc at my university once told me that anyone that wants to become an
academic writes about the Curry-Howard Correspondence, so here it is. This is
aimed as an _introduction_ to these topics and is by no means exhaustive, and
I'll certainly be liberally handwaving things away in the name of simplicity.

> In this article, I'll mainly be using Haskell because its type system is great
> for explaining these things in the context of code (you could much easier
> imagine the same code in Rust or even Java). If you're actually dealing with
> PL research you would probably be working with a real proof assistant such as
> [Rocq](https://coq.inria.fr), which comes with a more powerful type system
> (but is more complex because of that).

## Booleans

As you should be aware, most if not all programming languages offer facilities
to do logic, most easily understood in the form of _boolean_ logic. The three
fundamental operations of Boolean Algebra:`and` ($\land$), `or` ($\lor$), and
`not` ($\lnot$) are quite readily accessible in most programming languages, and
we can build from this to define our own quite easily. The most important such
definition we should keep in mind is the _implication_ ($\implies$):

$$
A \implies B \equiv \lnot A \lor B
$$

It's best expressed using this truth table:

| $A$   | $B$   | $A \implies B$ |
| ----- | ----- | -------------- |
| True  | True  | True           |
| True  | False | False          |
| False | True  | True           |
| False | False | True           |

It's worth visiting each of these operations in the context of programs.

## And (Conjunction)

The conjunction operation wants you to have both values. We can represent this
using a pair or tuple. The type `(a, b)` provides a _single value_ that contains
both values you want.

> What if you want more? Like $A \land B \land C$?
>
> Consider that $\land$ is associative, and $$ A \land B \land C \equiv A \land
> (B \land C) $$ So, we can create nested pairs of however many things we like,
> as `(a, (b, c))`. Many languages provide longer tuples as well, but they're
> not strictly necessary.

Since you have access to both internal types, you can destructure the tuple
using `fst` and `snd`. With this, we can represent conjunctions in boolean
"formulas". The type `(String, Int)`, for our purposes, simply lets us use these
definitions:

```haskell
fst :: (String, Int) -> String
snd :: (String, Int) -> Int
```

> **Terminology:** We say pairs _introduce_ the conjunction, and the
> destructuring functions `fst` and `snd` _eliminate_ (or use) it.

## Or (Disjunction)

The disjunction operation only requires you to have one or the other value. In
the logical sense, both may be true in some cases, but you can't assume that ---
you can only rely on having one at a time! Languages vary here on what sort of
language constructs exist to accommodate disjunctions, but good
languages[^enums] have constructs to define these types. In Haskell, the
`Either` type is defined for us as:

```haskell
data Either a b = Left a | Right b
```

> Again, what if you want $A \lor B \lor C$? You can nest as
> `Either a (Either b c)`, but the `data` mechanism lets you define as many
> variants as you want (each case is also a condition, so you can think of this
> as a [DNF](https://en.wikipedia.org/wiki/Disjunctive_normal_form)).

We also need a complementary language construct to eliminate the disjunction,
using whichever value we actually end up having: pattern matching.

```haskell
getInt :: Either Int String -> Int
getInt (Left i) = i * 3
getInt (Right s) = length s
```

The `Either Int String` here introduces the disjunction, and the pattern match
eliminates it (in the sense that regardless of which variant we pass into
`getInt`, we always know what we get).

## Not (Negation)

Hey, what's that over there? It's much more interesting than negating types!

In reality, negative types are not very useful in languages normal people use,
but we can think of them as implying falsehood (note that from false we can
imply anything, per the above table). You can vaguely think of this as the
bottom/never type, though this is not totally accurate either. Negation is
possible in more complex type systems used in proof assistants, but that's
outside the scope of this introductory article.

## Implication

This "arrow" notation for the implication operator might remind you of a certain
language construct (at least if you know some programming languages like). There
are programs that, if provided an `A`, will give you a `B`.

```haskell
incrStr :: Num a => a -> String
incrStr = show . (+1)
```

This program will, given a `Num`[^typeclass], give back a `String`. We can think
of the _signature_ of the function as a theorem, and the _implementation_ as its
proof (there are many functions from numbers to strings, and as such they
correspond to different proofs of the same theorem), and they can correspond to
any theorem we could express in mathematics.

## Acknowledgements

This article was mostly inspired by a small tangent that Prof. Lerner went on at
Northeastern, that made the whole concept click for me in a way that no prior
explanation had. Hopefully I managed to carry on at least some of that in this
article, and it made a bit of sense.

[^enums]:
    Of course, the proof assistants have these types, as do most functional
    languages like Haskell and Ocaml. Though I'd wager most people are familiar
    with this due to Rust's enums these days. Even in Java you can think of
    interfaces as an open disjunction in some ways, this might deserve its own
    article later.

[^typeclass]:
    `Num` is a _typeclass_, so things are not exactly `Num` in the way you'd
    expect. It's vaguely analogous to an interface in languages like Java.
    Specifically, it represents a numeric type like `Int`, `Float`, or
    `Integer`. This function is just generic enough to work on any such numbers.
