const wasm = require('./main.rs')

wasm.initialize({noExitRuntime: true}).then(module => {
  // Create a Javascript wrapper around our Rust function
  window.frobnicate = module.cwrap('frobnicate', 'string', [
    'array',
    'number'
  ])

  let url = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Binary/Box.glb"
  fetch(url)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
      window.glb = new Uint8Array(arrayBuffer);
      console.log("loaded Box.glb into window.glb", window.glb);
      console.log(frobnicate(glb, glb.length))
    })
})
