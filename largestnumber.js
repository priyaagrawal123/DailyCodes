//print largest number among two intergers

let int1 = 1;
let int2 = 5;
if (int1 > int2) {
    console.log(int1);
}
else {
    console.log(int2)
}

//Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign
var a = 3;
var b = -4;
var c = 8;
if (a > 0 && b > 0 && c > 0) {
    alert("the sign is +");
}
else if (a > 0 && b < 0 && c < 0) {
    console.log("the sign is -");
}
else if (a < 0 && b < 0 && c < 0) {
    console.log("the sign is +");
}
else {
    console.log("the sign is -");
}