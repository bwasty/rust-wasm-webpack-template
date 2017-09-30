fn main() {
    println!("Hello, browser! [from Rust main]");
}

// Functions that you wish to access from Javascript
// must be marked as no_mangle
#[no_mangle]
pub fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

#[no_mangle]
pub fn sqrt(a: f64) -> f64 {
    a.sqrt()
}
