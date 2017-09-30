use std::os::raw::c_char;
use std::ffi::CString;

fn main() {
    println!("Hello, browser! [from Rust main]");
}

#[no_mangle]
pub fn frobnicate(data: *const u8, len: i32) -> *mut c_char {
	let user_data;

	unsafe {
		user_data = std::slice::from_raw_parts(data, len as usize);
	}

    let message = format!("this the data: {:?} {} {}", user_data, user_data.len(), len);
    CString::new(message.as_str())
		.unwrap()
		.into_raw()
}
