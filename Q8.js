//Q8) For a given array with prices of 5 items -> [250,645,300,900,50] All items an offer 10% OFF on them. Change the array to store final price after applying offer.

let price = [250,645,300,900,50];

let idx= 0;

for (let val of price){
    console.log(`Value of index ${idx} = ${val}`);
    let offer = val / 10;
    price[idx] = price[idx] - offer;
    console.log(`Price after offer = ${price[idx]}`);
    idx++;


}