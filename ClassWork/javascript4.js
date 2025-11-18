// function sum(...values){
//     console.log(values);
//     let sum=0;
//     let i; 

//     for(const value of values){
//         sum+=value[i];
//     }
//     console.log(sum);
// }
// sum(1,2,3,4,5,6,7,8,9);
// sum(10,20,30,40,50);
// sum(7); 


// 
// console.log(10) ; 
// setTimeout (()=>
//     console.log(20) , 5000);
// console.log(30) ;



let count = 1 ;
const timer= setInterval(() => {console.log("hello" + count); 
count++ ; 
if(count>5){
    clearInterval(timer) ; 
},1000});
