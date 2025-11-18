// const[first,second , , fourth]=["apple","banana","cherry"];
// console.log(first);
// console.log(second);

const [,, , fourth, fifth]=["apple","banana","cherry","mango","grape"];
// console.log(fifth);4
// console.log(fourth);
console.log(fourth,fifth);



const fruits=["apple","banana","cherry"];
const morefruits=["mango","grape", "orange"];
//1st way
// const combinedfruits=fruits.concat(morefruits);
// console.log(combinedfruits);

//right side spread operator
/*const combinedfruits=[...fruits,...morefruits];
console.log(combinedfruits) ; */


// const[firstfruit,secondfruit,...restfruits]=combinedfruits ;
// console.log(restfruits) ; 

const[, , , , restfruits] = combinedfruits ;
const[]= combinedfruits ; 