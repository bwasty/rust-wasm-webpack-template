# rust-wasm-webpack-template
Small template for compiling Rust to WebAssembly with webpack and live reloading. 

Based on [rust-wasm-webpack-tutorial](https://github.com/ianjsikes/rust-wasm-webpack-tutorial). The main difference is that it uses `webpack-dev-server` to automatically recompile and reload the browser window on file changes.

## Usage
* set up Rust and Emscripten for compiling to WebAssembly, for example using the beginning of [this](https://medium.com/@ianjsikes/get-started-with-rust-webassembly-and-webpack-58d28e219635) guide.
* `npm install`
* `npm run start`
* open http://localhost:8080
* change the Rust or JavaScript code and watch the browser reload after a few seconds

### Production build
Does not exist (yet), but you can use `npm run build` to generate files (`webpack-dev-server` serves from memory).
