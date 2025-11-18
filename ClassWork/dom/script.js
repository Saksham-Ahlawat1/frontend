// console.log("hello");
// // document.getElementById("title").textContent = "faltu";

// document.getElementById("btn").onclick = function() {
//     alert("you clicked me");
//     document.getElementById("title").textContent = "faltu ki baatein";
// }



// const box= document.quueryselector("box");
// box.style.width="100px";
// box.style.height="100px";
 box.style.backgroundcolor="red";

const box= document.queryselector("box");
const btn= document.queryselector("btn");

btn.addEventListener("click", function(event){
    // box.style.backgroundcolor="blue";
    // console.log("hello"); 
    // box.style.width="400px";
    // box.style.height="400px";
    box.classlist.add("big-box"); 
    box.classlist.add("box");


    LETISSMALL=true ; 
    if(LETISSMALL){
        box.classlist.remove("big-box") ; 
        LETISSMALL=false ; 
    }   else{
        box.classlist.add("big-box") ; 
        LETISSMALL=true ;

    

        



        

    }




}

















