# Restful Monsters API

a rewrite of [berto's example](https://github.com/berto/monsters-restful-api) in JavaScript

## About

I liked the use of classes to organize the app and the routes, and was motivated to write a version of it from scratch in JS (as opposed to TypeScript) to see how it felt.

And then I rewrote it again stripping out the classes and using object literals instead (see `objects` branch).

__Verdict:__ The organization of the code using classes was really tight and modularized, and I liked that aspect of it a lot. However, I still think classes are the wrong abstraction in most cases, including this one:

1. There was no inheritance or extension going on, so constructors just called `init` methods and didn't invoke `super`.

2. No multiple objects were created, so you don't really need a class or even a factory: in each case here we're only ever using the object literal or prototype itself as a singleton. A simple object literal is the best representation of the data.

Ultimately, classes _look_ good and are very readable, but 99% of the time are misapplied, and they misrepresent how objects work in JS, and so they should be avoided in favor of 1) object literals or 2) factory functions.

## Getting started

1. set up your database

  ```
  brew install postgres
  brew services start postgres
  psql -c 'create database monsters;' -d postgres
  ```

1. `npm install`

1. Run it: `npm start`

## There are tests

run the tests: `npm run test`.

Note: I used `supertest` for the first time here for making http calls with `tape`:

1. Separating the app from the server allowed for easy testing with `supertest`.

2. Did not find a clean way to close whatever node handle `supertest` creates when connecting to the app. Instead am using a dirty `test.onFinish(() => process.exit(0));` to exit the tests 😒 See [#216](https://github.com/substack/tape/issues/216)
