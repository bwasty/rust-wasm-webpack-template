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
      let result = frobnicate(glb, glb.length);
      document.body.innerHTML =
        `<pre style="white-space: pre-wrap; word-break: keep-all;">${result}</pre>`;
    })
})
