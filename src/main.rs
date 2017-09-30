use std::os::raw::c_char;
use std::ffi::CString;

extern crate gltf;
use gltf::{Glb, Gltf};

fn main() {
    println!("Hello, browser! [from Rust main]");
}

#[no_mangle]
pub fn frobnicate(data: *const u8, len: i32) -> *mut c_char {
	let data: &[u8] = unsafe {
		std::slice::from_raw_parts(data, len as usize)
	};

	let glb = Glb::from_slice(data).unwrap();
	let unvalidated = Gltf::from_glb(&glb).unwrap();
	let gltf = unvalidated.validate_completely();

    // let message = format!("this the data: {:?} {} {}", data, data.len(), len);
	let message = format!("{:#?}", gltf);
    CString::new(message.as_str())
		.unwrap()
		.into_raw()
}
