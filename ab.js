const text =["proud Indian","web developer","Cricket lover"];

let count = 0;
let index = 0;
let currentText =" ";
let letter = " ";

(function types(){
  if(count === text.length){
    count =0;
  }
  currentText = text[count];
  letter = currentText.slice(0,++index);

  document.querySelector("#b").textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index=0;
  }
  setTimeout(types,350);
})();
