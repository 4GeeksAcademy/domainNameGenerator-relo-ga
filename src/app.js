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

pronoun.forEach((pronombre)=> {
  adj.forEach((adjetivo)=>{
    noun.forEach((sustantivo)=>{
      ext.forEach((extension)=>{
        
        const nounMatchExtension = sustantivo.endsWith(extension.slice(1));
        
        if(nounMatchExtension){
          console.log(pronombre+adjetivo+sustantivo.slice(0,ext.length)+extension);
        }
        else{
          console.log(pronombre+adjetivo+sustantivo+extension); 
        }

      })
    })
  })
})
