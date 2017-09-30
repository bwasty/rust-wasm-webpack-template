const wasm = require('./main.rs')

// TODO!!!: where does the double .wasm fetch come from?
wasm.initialize({noExitRuntime: true}).then(module => {
  // Create a Javascript wrapper around our Rust function
  const multiply = module.cwrap('multiply', 'number', ['number', 'number'])

  document.body.innerHTML = `Calling Rust multiply(7, 6)<br>${multiply(7, 6)}`
})
