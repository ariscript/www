---
title: Programs are Proofs
description: And the Curry-Howard Correspondence
date: 2025-01-10
tags:
    - education
    - tech
---

Someone at my university once told me that anyone that wants to become an
academic writes about the Curry-Howard Correspondence, so here it is. This is
aimed as an _introduction_ to these topics and is by no means exhaustive, and
I'll certainly be liberally handwaving things away in the name of simplicity.

> In this article, I'll be using Haskell mainly because its type system is great
> for explaining these things in the context of code (you could much easier
> imagine the same code in Rust or even Java). I'm not an expert on Haskell, but
> the minimal code snippets shown here should be accessible to anyone that's
> familiar with a functional programming language. If you're actually dealing
> with PL research you would probably be working with a real proof assistant
> such as [Rocq](https://rocq-prover.org/), which comes with a much more
> powerful type system (but is more complex because of that).

## Booleans

Almost all programming languages have ways to encode logic, most easily
understood in the form of boolean logic. The three fundamental operations of
Boolean Algebra: `and` ($\land$), `or` ($\lor$), and `not` ($\lnot$) are quite
readily accessible in most programming languages, and we can build from this to
define our own quite easily. The most important such definition we should keep
in mind is the _`implication`_ ($\implies$):

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

Think about how you can represent these in the context of a program, without
doing the boolean logic yourself. In particular, you can imagine a proposition
as "having" something of a certain type, and operations as doing something with
those.

## And (Conjunction)

The conjunction operation combines two propositions into a single one, which is
true when both components are true. In our type-based context, we want a single
type that combines two types, and requires that both be satisfied. We can
represent this using a pair or tuple. The type `(a, b)` provides a _single
value_ that contains both values you want.

> What if you want more? Like $A \land B \land C$?
>
> Consider that $\land$ is associative, and
> $A \land B \land C \equiv A \land (B \land C)$ So, we can create nested pairs
> of however many things we like, as `(a, (b, c))`. Many languages provide
> longer tuples or structures, but strictly speaking they're not necessary.

Since you have access to both internal types, you can destructure the tuple
using `fst` and `snd`. With this, we can represent conjunctions in boolean
"formulas". The type `(String, Int)`, for our purposes, simply lets us use these
definitions:

```haskell
fst :: (String, Int) -> String
snd :: (String, Int) -> Int
```

> **Terminology:** We say pairs _introduce_ (or create) the conjunction, and the
> destructuring functions `fst` and `snd` _eliminate_ (or use) it.

## Or (Disjunction)

Similar to conjunction, the disjunction operation combines two propositions into
a single one, which is true if _either_ of them are true. In mathematical
settings, when you might have a disjunctive condition, you can only ever assume
that _one_ option is true at a time. Usually this is done by destructuring into
cases: writing a proof based on each case separately, and showing the common
conclusion applies when any of them are true.

Languages vary here on what sort of language constructs exist to accommodate
disjunctions, but good languages[^enums] have constructs to define these types.
In Haskell, the `Either` type is defined for us as:

```haskell
data Either a b = Left a | Right b
```

> Again, what if you want $A \lor B \lor C$? You can nest as
> `Either a (Either b c)`, but the `data` mechanism lets you define as many
> variants as you want (each case is also a condition, so you can think of this
> as a [DNF](https://en.wikipedia.org/wiki/Disjunctive_normal_form)).

Much like proving by cases in math, we need a way to do case analysis on the
disjunction here. Languages also differ on how this is done, but in Haskell we
have access to pattern matching, which allows us to very explicitly break our
code apart into cases:

```haskell
getInt :: Either Int String -> Int
getInt (Left i) = i * 3
getInt (Right s) = length s
```

The `Either Int String` here introduces the disjunction, and the pattern match
eliminates it (in the sense that regardless of which variant we pass into
`getInt`, we always know what we get).

## Not (Negation)

Hey, look a bird!

In reality, negative types are not very useful in languages normal people use,
but we can think of them as implying falsehood (note that from false we can
imply anything, per the above table). You can vaguely think of this as the
bottom/never type, though this is not totally accurate either. Negation is
possible in more complex type systems used in proof assistants, but that's
outside the scope of this introductory article.

## Implication

This is the most important section of the article, because of the central role
implications play in mathematics.

The "arrow" notation for the implication operator might remind you of a certain
language construct. There are constructs that, if provided an `A`, will give you
a `B`. In most languages, we call these functions.

```haskell
incrStr :: Num a => a -> String
incrStr = show . (+1)
```

This function will, given a `Num`[^typeclass], give back a `String`. We can
think of the _signature_ of the function as a theorem, and the _implementation_
as its proof (there are many functions from numbers to strings, and as such they
correspond to different proofs of the same theorem), and they can correspond to
any theorem we could express in mathematics.

It's also worth noting here that the function's signature only applies if the
function returns a value. Therefore, a function like:

```haskell
magic :: forall a b. a -> b
magic a = magic a
```

is perfectly legal! This function's signature claims that, _for all_ types `a`
and `b`, if given an `a`, and the function returns, then it will return a value
of type `b`. Since we have no idea what the type `a` and `b` are, and so can't
do anything with the values[^universal], there is no way for us to actually
return a `b`. But this signature is valid (vacuously true in a sense) because
our premise is false: the function will never return!

From these building blocks, we can start encoding more complex statements, and
proving those statements via implementation.

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

[^universal]:
    Think about how you would have written this in TypeScript, or someother
    language with generic types if this is strange to you:

    ```ts
    function magic<T, U>(a: T): U {
        // you have access to `a` here of type `T`.
        // what operations can you do on it that that will
        // _always_ return something of type `U`?

        // of course, we are disallowing things like
        // reinterpreting the bits as a new type, which is
        // almost never a safe operation
    }

    // such that all of these are true:
    typeof magic<number, string>(3) === "string"
    typeof magic<number, boolean>(3) === "boolean"
    typeof magic<
        string,
        () => [boolean; string]
    >("foo") === "function"
    typeof magic<
        ReadonlyArray<(arg: [number; function]) => symbol>,
        {
            id: number;
            name: string;
            age: number;
            company: string;
        }
    >([]) === "object" // where this object does have this shape
    ```
