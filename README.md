# Reproducible Bundle Error

This is a minimal reproducible example of the occuring bundling error.

Follow the steps below.

1. Run `yarn install` in root dir
2. Run `yarn start` in `packages/cra`

3. The following error should occur on `localhost:3000`
   1. `TypeError: zustand__WEBPACK_IMPORTED_MODULE_0__ is not a function`
   2. Occuring at `Module.../lib/dist/index.mjs`

## Important

- Note that if you want to rebuild the `packages/lib` module in this example, you have to move the resulting dist output manually.
- To rebuild the library execute `yarn build && mv dist/src/* dist/ && rm -rf dist/src` in the `packages/lib` directory.