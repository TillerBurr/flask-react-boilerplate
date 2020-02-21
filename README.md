# Flask React Boilerplate

Essentially https://github.com/YaleDHLab/flask-react-boilerplate, but modified to suit my needs

Simple boilerplate for a Flask backend and React client including:

- ES6 transpiling via Webpack
- Hot module reloading via Webpack Dev Server
- State management via Redux
- Tests via Pytest and Jest
- Linting via Pylint and Eslint
- Travis CI for automatic testing and linting

## Dependencies

To install the boilerplate dependencies, you can run:

```bash
git clone https://github.com/baurt/flask-react-boilerplate
cd flask-react-boilerplate
npm install --no-optional
poetry install
```

## Quickstart

Once the dependencies are installed, you can start the api with the following command:

That will start the server on port 3000. To run the development server with hot module reloading, run:

```bash
npm start
```

That will start the webpack dev server on port 3000.

## Tests

To run the Javascript tests (located in `src/tests/`), run:

```bash
npm run jest
```

To run the Python tests (located in `server/tests/`), run:

```bash
pytest
```

## Linting

To lint the Javascript files (located in `src`), run:

```bash
npm run lint-js
```

To lint the Python files (located in `server`), run:

```bash
npm run lint-py
```
