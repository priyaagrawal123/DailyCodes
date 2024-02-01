//Q6) prompt the user to enter thier full name. Generate a username for them based on the input Start username wirh @, followed by thier full name and ending with full name length.


let fullName = prompt ("Enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);
