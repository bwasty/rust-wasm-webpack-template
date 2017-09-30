const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
  env = env || {} // undefined if webpack called without `--env`
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist',
    },
    module: {
      rules: [
        {
          test: /\.rs$/,
          use: {
            loader: 'rust-wasm-loader',
            options: {
              // The path to the webpack output relative to the project root
              path: '',
              release: env.production,
            }
          }
        }
      ]
    },
    // The .wasm 'glue' code generated by Emscripten requires these node builtins,
    // but won't actually use them in a web environment. We tell Webpack to not resolve those
    // require statements since we know we won't need them.
    externals: {
      'fs': true,
      'path': true,

      // TODO!: This list was manually extracted from bundle.js.map with the help of
      // `source-map-explorer`. It saves 284KB in the final bundle. How to do this better?
      // Shouln't tree shaking take care of it?
      "asn1.js": true,
      // "base64-js": true,
      "bn.js": true,
      "brorand": true,
      "browserify-aes": true,
      "browserify-cipher": true,
      "browserify-des": true,
      "browserify-rsa": true,
      "browserify-sign": true,
      "buffer": true,
      "buffer-xor": true,
      "cipher-base": true,
      "core-util-is": true,
      "create-ecdh": true,
      "create-hash": true,
      "create-hmac": true,
      "crypto-browserify": true,
      "des.js": true,
      "diffie-hellman": true,
      "elliptic": true,
      "events": true,
      "evp_bytestokey": true,
      "hash-base": true,
      "hash.js": true,
      "hmac-drbg": true,
      // "ieee754": true,
      "indexof": true,
      "inherits": true,
      // "isarray": true,
      "md5.js": true,
      "miller-rabin": true,
      "minimalistic-assert": true,
      "minimalistic-crypto-utils": true,
      "node-libs-browser": true,
      "parse-asn1": true,
      "pbkdf2": true,
      "process": true,
      "process-nextick-args": true,
      "public-encrypt": true,
      "randombytes": true,
      "readable-stream": true,
      "ripemd160": true,
      "safe-buffer": true,
      "setimmediate": true,
      "sha.js": true,
      "stream-browserify": true,
      "timers-browserify": true,
      "util-deprecate": true,
      "vm-browserify": true,
    },

    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      })
    ],

    // devtool: 'source-map',

    devServer: {
      contentBase: __dirname + "/dist/",
      overlay: true,    // shows Rust compiler errors in the browser
      open: true,       // opens http://localhost:8080 in browser
      compress: false,  // gzip compression
    }
  }
}