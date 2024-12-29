# Next.js Client-Side 'process' Access Error

This repository demonstrates a common error in Next.js applications: attempting to access the `process` global object in client-side code.  The `process` object is only available in Node.js environments (server-side), not in browsers (client-side).  Accessing it directly in a component's code results in a runtime error.

## Problem

The `about.js` file tries to check the `NODE_ENV` environment variable using `process.env.NODE_ENV`. This works fine on the server, but fails on the client, because `process` is not a global object in the browser environment.

## Solution

The solution involves using the `process.env` values provided by Next.js at build time.  These values are available in the components during server-side rendering (SSR) and static site generation (SSG), but not directly in client-side code.  Instead, you can pass the `NODE_ENV` value as a prop to the client side component. Alternatively, environment variables should be read at build time, server-side, and the results passed as props or stored in a store.