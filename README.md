# React Router v6 useParams Bug: Empty Object Outside Route Context

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The `useParams` hook only functions correctly within components that are direct children of route components defined using `<Route>` or `<Routes>`.  Accessing it outside this context will result in an empty object being returned, leading to issues in rendering data or causing other unexpected behavior.

The `UnexpectedParamBug.jsx` file illustrates the problem.  The `UnexpectedParamSolution.jsx` file demonstrates the correct usage and how to resolve the issue.

## How to Reproduce the Bug

Clone the repository and run the application. You'll observe that the component trying to access route parameters outside the route context renders incorrectly, showing an empty object instead of the expected data.