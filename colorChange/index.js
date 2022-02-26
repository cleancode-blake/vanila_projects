let btn = document.getElementById("btn-color");

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

function changeColor() {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexArray[genNum()];
  }
  console.log(hexCode);
  return hexCode;
}

btn.addEventListener("click", () => changeColor());
