let btn = document.getElementById("btn-color");
let body = document.body;

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

function changeColor() {
  let hex = selectHex();
  body.style.backgroundColor = hex;
}

btn.addEventListener("click", () => changeColor());
