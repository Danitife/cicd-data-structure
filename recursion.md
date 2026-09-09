# Recursion Practice Tasks

These tasks are designed to build confidence with recursive thinking. For each task, identify the base case, decide how the problem becomes smaller on every recursive call, and make sure the recursion eventually terminates. Do not use loops unless a task explicitly allows them.

## 1. Countdown to Zero

Write a recursive function that receives a non-negative integer `n` and produces the numbers from `n` down to `0` in descending order.

For example, an input of 4 should produce the sequence 4, 3, 2, 1, 0. The function must stop when it reaches zero. Decide how invalid input, such as a negative number, should be handled and document that decision.

## 2. Sum of the First N Natural Numbers

Write a recursive function that returns the sum of all natural numbers from `1` through `n`.

For an input of 5, the result represents `1 + 2 + 3 + 4 + 5`. Treat zero as a valid input whose result is zero. Clearly define the behavior for negative inputs, and ensure each recursive call moves closer to the base case.

## 3. Calculate a Factorial

Write a recursive function that calculates the factorial of a non-negative integer `n`.

The factorial of `n` is the product of every positive integer from `1` through `n`. Remember that the factorial of both zero and one is one. Consider how your function should respond to negative integers and how large inputs could exceed the numeric range of the chosen programming language.

## 4. Find the Nth Fibonacci Number

Write a recursive function that returns the Fibonacci number at position `n`.

Use the definition in which position zero contains `0`, position one contains `1`, and every later value is the sum of the two preceding values. Handle negative positions as invalid input. After implementing the basic recursive solution, explain why it performs repeated work and becomes slow for larger values of `n`.

## 5. Reverse a String

Write a recursive function that returns a string with its characters in reverse order.

An empty string and a single-character string should be returned unchanged because they cannot be reduced meaningfully any further. The solution should process a smaller portion of the string during each recursive call. Consider whether spaces, punctuation, letter case, and Unicode characters should be preserved exactly.

## 6. Determine Whether a String Is a Palindrome

Write a recursive function that determines whether a string reads the same from left to right and from right to left.

Compare the characters at the two ends, then recursively examine the smaller section between them. The recursion may stop successfully when no characters or only one character remains. State whether the comparison is case-sensitive and whether spaces and punctuation are included or ignored.

## 7. Find the Maximum Value in an Array

Write a recursive function that returns the largest number in a non-empty array.

Reduce the problem by comparing one value with the maximum found in the remaining portion of the array. A one-element array provides a natural base case. Decide how the function should handle an empty array, and confirm that it works when every value is negative or when the maximum value occurs more than once.

## 8. Compute an Integer Power

Write a recursive function that calculates a number `base` raised to a non-negative integer `exponent`.

Any base raised to the power zero should return one, including when the base is zero if that convention is used in your program. Each recursive call should reduce the exponent. Test zero, one, and larger exponents, and document how negative exponents are handled if they are outside the task's supported input range.

## 9. Perform Recursive Binary Search

Write a recursive function that searches for a target value in a sorted array and returns its index, or a clear not-found result if it is absent.

Each call should inspect the middle element and continue searching only the left or right half where the target could still exist. The recursion ends when the target is found or when the remaining search range is empty. State whether the array must be sorted in ascending order and what index may be returned when duplicate target values exist.

## 10. Solve the Tower of Hanoi

Write a recursive procedure that describes the moves required to transfer `n` disks from a source peg to a destination peg using one auxiliary peg.

Only one disk may be moved at a time, and a larger disk may never be placed on top of a smaller disk. The recursive strategy should move the top `n - 1` disks out of the way, move the largest disk to its destination, and then move the smaller disks onto it. Use one disk as the base case, and verify that the total number of moves for `n` disks is `2^n - 1`.

## Completion Checklist

For every task:

- Identify and document the base case.
- Show that every recursive call receives a smaller problem.
- Define behavior for empty, zero, negative, or otherwise invalid inputs where relevant.
- Test the smallest valid input and at least two larger inputs.
- Consider recursion-depth and performance limitations.
