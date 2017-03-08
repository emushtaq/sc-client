# sc-client
## My experiments: learning react by making a soundcloud client

Steps to run the application
- cd sc-client
- npm install
- npm start

The webapp must be running now at http://localhost:8080

Implementing lessons from https://www.robinwieruch.de/the-soundcloud-client-in-react-redux/

Steps to glory:
- we use webpack + webpack-dev-server for bundling, building and serving our app
- we use Babel
- to write in ES6 syntax
- to have .js rather than .jsx files
- the src/index.js file is used by Webpack as entry point to bundle all of its used imports in one file named bundle.js
- bundle.js is used in dist/index.html
- dist/index.html provides us an identifier as entry point for our React root component
- we set up our first React hook via the id attribute in src/index.js
- we implemented our first component as stateless functional component src/components/Stream.js
