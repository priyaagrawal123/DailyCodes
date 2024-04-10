//roots of 
let root1;
let root2;

let a = parseFloat(prompt("enter the first number"));
let b = parseFloat(prompt("enter the second number"));
let c = parseFloat(prompt("enter the third number"));

//discriminant nismkkdjkd
discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    root2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    console.log(`the roots of the quadratic equation are ${root1}${root2}`);
} else if (discriminant === 0) {
    root1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    root2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    console.log(`the roots of the quadratic equation are ${root1}${root2}`);
} else {
    console.log("discriminant is less than zero so roots cant be given ");
}