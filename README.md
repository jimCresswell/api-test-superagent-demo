# api-test-superagent-demo
Demo of Javascript API testing using [Mocha](https://mochajs.org/) and [Supertest](https://github.com/visionmedia/supertest).

## Usage
 * `yarn test` or `npm test`.
 * To generate a specification document from the tests `yarn document` or `npm run document`, the output is in the markdown file [specs.md](specs.md).

## Notes
The tests are written in a [specification like format](test/example.spec.js).

For a more data driven approach using the same tools the tests could be generated programmatically by iterating over collections of endpoints, REST verbs and expected results, [like this](https://mochajs.org/#dynamically-generating-tests).
