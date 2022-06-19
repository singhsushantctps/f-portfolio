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