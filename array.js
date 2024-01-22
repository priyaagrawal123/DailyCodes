// const myArr=[2,3,4,5,6]
// console.log(myArr[0]);

// myArr.push(6)
// console.log(myArr);
// myArr.pop();
// console.log(myArr)

const marvel_heroes=["thor","ironman"]
const dc_heroes=["superman","flash"]
 marvel_heroes.push(dc_heroes)
  console.log(marvel_heroes);
//or
 marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes); 

const allHeroes=marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

console.log(Array.isArray("priya")) 
console.log(Array.from("priya"))
console.log(Array.from({name:"priya"})) //[] it give *******

