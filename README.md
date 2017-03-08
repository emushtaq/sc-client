# sc-client
## My experiments: learning react by making a soundcloud client

Steps to run the application
- cd sc-client
- npm install
- npm start

The webapp must be running now at http://localhost:8080

Implementing lessons from https://www.robinwieruch.de/the-soundcloud-client-in-react-redux/

Steps to glory:
- use webpack + webpack-dev-server for bundling, building and serving the app
- use Babel
- to write in ES6 syntax
- to have .js rather than .jsx files
- the src/index.js file is used by Webpack as entry point to bundle all of its used imports in one file named bundle.js
- bundle.js is used in dist/index.html
- dist/index.html provides us an identifier as entry point for a React root component
- set up the first React hook via the id attribute in src/index.js
- implemented the first component as stateless functional component src/components/Stream.js
- setup mocha, jasmine, jsdom, enzyme as the test framework
- wrote a basic test for the Stream component
- 