let btn = document.getElementById("btn-color");
let body = document.body;
let text = document.getElementById("text-color");

let hexArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function genNum() {
  let newNum = Math.floor(Math.random() * 16);
  return newNum;
}

function selectHex() {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexArray[genNum()];
  }
  return hexCode;
}
function changeText(hexValue) {
  text.innerHTML = "This is " + hexValue;
}

function changeColor(hexValue) {
  body.style.backgroundColor = hexValue;
}
function change() {
  let hex = selectHex();
  changeColor(hex);
  changeText(hex);
}

change();
btn.addEventListener("click", () => change());
