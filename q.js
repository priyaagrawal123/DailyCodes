let a = 40;
let b = 60;
const sum = a + b;
if (a === 100 || b === 100 || sum) {
    console.log(true);
}
else {
    console.log(false);
}

//js to give file extension
const getFileExtension = (str) => str.slice(str.lastIndexOf("."));
console.log(getFileExtension("index.html"));
console.log(getFileExtension('cpp.cpp'));

//get mm-dd-yyyy mm/dd/yyyy
const formatDate = (date = new Date()) => {
    const days = date.getDay() + 4;
    const months = date.getMonth() + 4;
    const years = date.getFullYear() + 4;
    return `${days}/${months}/${years}`;
}
console.log(formatDate());

//nw
const makeNewString = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
console.log(makeNewString("abc"));
console.log(makeNewString("abcdefhdh"));

//njdjjd
const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(concatenate('abe', "dejkhg"));
//solve
let c = 8;
let d = 6;
const closeTo100 = (c, d) => (100 - c) < (100 - d) ? c : d;
console.log(closeTo100(c, d));
//djdj
const evenNum = (arr) => (arr.filter(num => num % 2 === 0).length);
console.log(evenNum(2, 3, 4, 5, 6, 7, 3, 4, 5, 6));

//nw   
const evenValue=(arr)=>arr.filter()