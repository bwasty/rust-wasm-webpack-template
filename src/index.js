const wasm = require('./main.rs')

wasm.initialize({noExitRuntime: true}).then(module => {
  // Create a Javascript wrapper around our Rust function
  window.multiply = module.cwrap('multiply', 'number', ['number', 'number'])
  window.sqrt = module.cwrap('sqrt', 'number', ['number'])

  document.body.innerHTML = `Calling Rust multiply(7, 6)<br>${multiply(7, 6)}`

  // floats are truncated to i32s
  console.log("multiply(2.9, 3) = ", multiply(2.9, 3)) // -> 6

  console.log("sqrt(2) = ", sqrt(2))
})
