# Show warning when someone uses the spread operator for function arguments. (no-argument-spread)

Expressions like `Math.max(...array)` can lead to stack overflows for very large arrays.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

Math.max(...array)
f(2, ...array, 4)

```

Examples of **correct** code for this rule:

```js

Math.max(1, 2)
f(1, 2, 4, {...x, y: 2})

```