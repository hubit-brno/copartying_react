# Installation and dev mode

    $ npm install
    $ npm run open:src

# Individual node modules description

These are dependencies bundled together even for production build (needed on runtime):

* *object-assign* - polyfill for ES6's Object.assign (copies props from one object to another) - [npm](https://www.npmjs.com/package/object-assign)
* *react* - react core, providing lifecycle methods, definition and creation of elements - [npm](https://www.npmjs.com/package/react)
* *react-dom* - bridge between react core and browser DOM, (eg. `render` and `findDOMNode` functions) - [npm](https://www.npmjs.com/package/react-dom)
* *redux* - single state and one way data flow framework, super simple and easy to use with any JS library - [npm](https://www.npmjs.com/package/redux)
* *react-redux* - utilities functions, reducing boilerplate and providing glue between redux and react - [npm](https://www.npmjs.com/package/redux)
* *immutable* - library with data structures that are not allowed to change theirs content - [npm](https://www.npmjs.com/package/immutable)
* *redux-immutable* - utility allowing to create redux reducers with use of immutable state - [npm](https://www.npmjs.com/package/redux-immutable)
* *lodash* - utility functions for manipulation with arrays, objects, strings and some extras - [npm](https://www.npmjs.com/package/lodash)
* *redux-thunk* - middleware for redux, allowing to return function from action creator (async actions with promises) - [npm](https://www.npmjs.com/package/redux-thunk)
* *es6-promise* - polyfill for ES6's Promise implementation (needed for AJAX requests tracking) - [npm](https://www.npmjs.com/package/es6-promise)
* *isomorphic-fetch* - wrapper for HTTP requests to backend, working with Promises - [npm](https://www.npmjs.com/package/isomorphic-fetch)

And here are the ones for dev time only, not needed on runtime:

* *babel* - transpiler from ES6 to "plain old" javascript - [npm](https://www.npmjs.com/package/babel)
* *babel-eslint* - allow more of the advanced syntax provided by babel to pass eslint - [npm](https://www.npmjs.com/package/babel-eslint)
* *babel-loader* - loader for webpack, see [webpack loaders](https://webpack.github.io/docs/loaders.html) for more details - [npm](https://www.npmjs.com/package/babel-loader)
* *babel-plugin-react-display-name* - transformer for react components, setting component's name - [npm](https://www.npmjs.com/package/babel-plugin-react-display-name)
* *babel-plugin-react-transform* - wrapper for react components to manage them in different ways - [npm](https://www.npmjs.com/package/babel-plugin-react-transform)
* *browser-sync* - keeping the developed page in sync across multiple browsers or devices - [npm](https://www.npmjs.com/package/browser-sync)
* *chai* - assertion library for TDD (and BDD) - [npm](https://www.npmjs.com/package/chai)
* *cheerio* - core of the jQuery, useful in tests, to easily work with DOM - [npm](https://www.npmjs.com/package/cheerio)
* *colors* - just some colors for your console output - [npm](https://www.npmjs.com/package/colors)
* *cross-env* - working with env variables across platforms - [npm](https://www.npmjs.com/package/cross-env)
* *css-loader* - loader for webpack, enabling to link CSS into the bundle automatically. See [webpack loaders](https://webpack.github.io/docs/loaders.html) for more details - [npm](https://www.npmjs.com/package/css-loader)
* *eslint* - syntax checking and suggestions, enforcing one code style across whole project - [npm](https://www.npmjs.com/package/eslint)
* *eslint-loader* - loader for webpack, see [webpack loaders](https://webpack.github.io/docs/loaders.html) for more details - [npm](https://www.npmjs.com/package/eslint-loader)
* *eslint-plugin-react* - rules for eslint to allow React specific rules - [npm](https://www.npmjs.com/package/eslint-plugin-react)
* *file-loader* - link any file into bundle, loader for webpack, see [webpack loaders](https://webpack.github.io/docs/loaders.html) for more details - [npm](https://www.npmjs.com/package/file-loader)
* *mocha* - test framework for frontend - [npm](https://www.npmjs.com/package/mocha)
* *node-sass* - compilation of sass into css - [npm](https://www.npmjs.com/package/node-sass)
* *parallelshell* - run several commands parallelly, in one shell - [npm](https://www.npmjs.com/package/parallelshell)
* *react-transform-catch-errors* - show errors inside react component, rendered in page - [npm](https://www.npmjs.com/package/react-transform-catch-errors)
* *react-transform-hmr* - hot reloading for react - [npm](https://www.npmjs.com/package/react-transform-hmr)
* *redbox-react* - red box of death, for errors in react components - [npm](https://www.npmjs.com/package/redbox-react)
* *redux-devtools* - time travel, state and action tracking console for redux - [npm](https://www.npmjs.com/package/redux-devtools)
* *redux-devtools-dock-monitor* - redux console can be moved and resized - [npm](https://www.npmjs.com/package/redux-devtools-dock-monitor)
* *redux-devtools-log-monitor* - tree view for redux console - [npm](https://www.npmjs.com/package/redux-devtools-log-monitor)
* *rimraf* - allows to deeply delete dist folder, without prompts and directory errors - [npm](https://www.npmjs.com/package/rimraf)
* *sass-loader* - loader for webpack, see [webpack loaders](https://webpack.github.io/docs/loaders.html) for more details - [npm](https://www.npmjs.com/package/sass-loader)
* *style-loader* - loader for webpack, see [webpack loaders](https://webpack.github.io/docs/loaders.html) for more details - [npm](https://www.npmjs.com/package/style-loader)
* *watch* - allows to watch application directory tree for files changes - [npm](https://www.npmjs.com/package/watch)
* *webpack* - combine modules into packages, split code and decorate your module dependencies with loaders - [npm](https://www.npmjs.com/package/webpack)
* *webpack-dev-middleware* - allows running a dev server, providing in-memory bundled packages - [npm](https://www.npmjs.com/package/webpack-dev-middleware)
* *webpack-hot-middleware* - hot reloading bindings for webpack and its dev server - [npm](https://www.npmjs.com/package/webpack-hot-middleware)
* *yargs* - passing of command line params into node as a hash - [npm](https://www.npmjs.com/package/yargs)
