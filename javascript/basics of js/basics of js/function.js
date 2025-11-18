// 1. Function Declaration

// / function returnValue(){
//     return parameter*parameter;
// }
// let sixSquared = returnValue(6);



// 2 Function Expression





// let a = returnValue(5); 
// console.log(a);

// const returnValue= function(parameter){
//     return parameter ;
// };  

// 3.arrow Function

// const returnValue= (parameter) => parameter*parameter;  
// let a = returnValue(5); 
// console.log(a);
 
// console.log("ABC");
// a=10;
// console.log(a);
//  let a=20;
 /** */
// console.log(a);
// var a=10;
// console.log(a);
// /** */

// function abc(){ 
// if(char=='a'){
//     return a;
// }else if(char=='b'){
//     return b;
// }
// else if(char=='c'){
//     return c;
// }else{("not found");
// }

// }


// topic - Function with default parameter ;//
// function returnValue(value = "hello not given"){
//     return value;
// }
// let returnedValue=returnValue();
// console.log(returnedValue);

// topic- Rest Parameter in function ;//
// function sum(...numbers){
//     let overallSum=0 ; 
//     for(const number of numbers){
//         overallSum+=number;
//     }
//     console.log(numbers);}
//     sum(1,2,3,4,5,6,7,8,9);
//     sum(10,20,30);
//     sum(7); 
//     sum();

// function sum(a,b ,...numbers){
//     console.log(a);
//     console.log(b);
//     console.log(numbers);
//     let oversum=0;
//     for(let number of numbers){
//         oversum+=number;
//     }   
//     return oversum;
// }
// const value=sum(1,2,3,4,5,6,7,8,9);


//create  a function calculate(num1,num2,operation)
// let a = returnValue(5); 
// console.log(a);

// const returnValue= function(parameter){
//     return parameter ;
// };  

let calculate = (num1, num2 , operation, ...otherNumbers)
    // if(operation=='add'){
    //     return num1+num2;
    for(const number of otherNumbers){
        if(operation=='add'){
            num1+=number;}
            return num1;
        else if(operation=='sub'){
            num1-=number;}
        else if(operation=='mul'){
            num1*=number;}
        else if(operation=='div'){
            num1/=number;}
        else{
            return "operation not found";
        }   
    }
;
let result=calculate(1,2,'add',3,4,5);
console.log(result);

    // if(operation=='add'){
    //     return num1+num2;
//     // }
// for(const number of otherNumbers){
// else if(operation=='sub'){
//         num1-=number;}
    
// //     else if(operation=='mul'){
// //         return num1*num2;
// //     }
// //     else if(operation=='div'){
// //         return num1/num2;
// //     }
// //     else{
// //         return "operation not found";
// //     }
// // };
// let result=calculate(1,2,3,4,5,'add');
// console.log(result);


// }

