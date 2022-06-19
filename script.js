// for intro
const texts =["proud Indian","web developer","Cricket lover"];

let count = 0;
let index = 0;
let currentText =" ";
let letter = " ";

(function type(){
  if(count === texts.length){
    count =0;
  }
  currentText = texts[count];
  letter = currentText.slice(0,++index);

  document.querySelector("#text").textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index=0;
  }
  setTimeout(type,350);
})();

// about script

const texti = ["a journey","LIFE!!","hard","easy","fun","printing Hello World !"];

let c = 0;
let i = 0;
let ct = " ";
let l = " ";

(function typo(){
  if(c===texti.length){
    c=0;
  }
  ct = texti[c];
  l= ct.slice(0,++i);
  document.querySelector("#b").textContent=l;

  if(l.length===ct.length){
    c++;
    i=0;
  
  }
  setTimeout(typo,600);
})();




