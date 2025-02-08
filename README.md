# Next.js Client-Side Error Handling

This repository demonstrates a common issue in Next.js applications: unhandled client-side errors causing the entire application to crash.  The example shows a simple `About` page that throws an error.  The solution demonstrates how to implement error boundaries to gracefully handle these errors.

## Bug

The `about.js` file throws a JavaScript error.  In a production Next.js app, this would result in a blank page or a generic error message, a poor user experience.

## Solution

The `aboutSolution.js` file demonstrates the use of error boundaries to catch and handle the error, preventing the entire app from crashing. This provides a much better user experience.