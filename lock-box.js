const ps = require("prompt-sync");
let prompt = ps();

const pinCode = "1234";

let unlock = prompt("Enter the passcode to unlock the lock box: ");

console.log(unlock === pinCode ? "success" : "failure");
