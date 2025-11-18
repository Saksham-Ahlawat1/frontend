const person = {
    name :" jyoti", age: "19", city: "mathura" , 
     introduce:function(){return `hello, my name is ${this.name}, i am ${this.age} years old and i live in ${this.city}.`;},

     };

     console.log( person.age);
      console.log( person.city);

        console.log( person.introduce());

        // let herage = "age ";
        console.log( person[herage]);
        person.birthyear= 2025 - person.age ; 
        console.log(person) ; 

        person.tellbirthyear=function(){
            console.log('my birth year is  ${this.birthyear} years old.') ; 
        }
        person.tellbirthyear() ;

        const personname= person.name ;
        const personage= person['age'] ;
        console.log(personname) ;
const personcity= person.city ;
const herage= personage ;
const hername= personname ;
        // const{ name: hername, age: herage, city: hercity} = person ;
        // console.log(name) ;
        // console.log(age) ;
        // console.log(city) ;
        console.log(hername) ;
        // console.log(herage) ;
        // console.log(hercity) ;

        


        


      
