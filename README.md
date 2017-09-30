# rust-wasm-webpack-template
Small template for compiling Rust to WebAssembly with webpack and live reloading.

Based on [rust-wasm-webpack-tutorial](https://github.com/ianjsikes/rust-wasm-webpack-tutorial). The main difference is that it uses `webpack-dev-server` to automatically recompile and reload the browser window on file changes.

[Live Demo](https://bwasty.github.io/rust-wasm-webpack-template/)

## Usage
* set up Rust and Emscripten for compiling to WebAssembly, for example using the beginning of [this](https://medium.com/@ianjsikes/get-started-with-rust-webassembly-and-webpack-58d28e219635) guide.
* `npm install`
* `npm run start` (builds, starts dev server and opens http://localhost:8080)
* change the Rust or JavaScript code and watch the browser reload after a few seconds

### Production build
Use `npm run build` to generate an optimized build in the `dist` folder (compiling the Rust in release mode and using UglifyJS for the JavaScript code). To deploy to GitHub pages use `npm run deploy`.
