/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon','ventus'];
let ext = [ '.com', '.net', '.us', '.io'];

pronoun.forEach((pro)=> {
  adj.forEach((ad)=>{
    noun.forEach((no)=>{
      ext.forEach((e)=>{
        //console.log(pro+ad+no+e);  
        if(no.slice(-1*(e.length-1)) == e.slice(1)){
          console.log(pro+ad+no.slice(0,ext.length)+e);
        }
        else{
          console.log(pro+ad+no+e); 
        }

      })
    })
  })
})
