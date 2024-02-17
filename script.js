let body = document.querySelector("body");

//const start = document.querySelector('#start');
const stop = document.querySelector("#stop");
const container = document.querySelector(".container");
const subContainer = document.querySelector(".sub-container");

//---------- Start Button Events----------
let setIntervalId;
const colorChangeStart = function () {
  if (!setIntervalId) {
    setIntervalId = setInterval(setbgColor, 1000);
  }
};
function setbgColor() {
  body.style.backgroundColor = randomColorCodes();
}
document.querySelector("#start").addEventListener("click", colorChangeStart);
//---------- Stop Button Events----------
function colorChangeStop(){
  clearInterval(setIntervalId);
  setIntervalId = null;
}

document.querySelector("#stop").addEventListener("click", colorChangeStop);
//-------- Hexa Code generation Method==1 ----------------
function randomColorCodes() {
  const hex = "123456789abcdef";
  let colorCodeLength = 6;
  let colorCodes = "#";
  for (let i = 0; i < colorCodeLength; i++) {
    let randomNumber = Math.floor(Math.random() * hex.length);
    colorCodes += hex.substring(randomNumber, randomNumber + 1);
  }
  return colorCodes;
}
console.log(randomColorCodes());
//-------- Hexa Code generation with arrow Function Method==2 ----------------

// const randomColors = () =>{
//     const hex = "123456789ABCDEF";
//     let colorCodes = "#";
//     for (let i = 0; i < 6; i++) {
//         colorCodes += hex[Math.floor(Math.random()* 16)]
//     }
//     return colorCodes;
// }

// console.log(randomColors())
// console.log(randomColors())

//---------- Method =3 --------------

// const randomColors = function () {
//     const hex = "123456789ABCDEF";
//     let colorCodes = "#";
//     for (let i = 0; i < 6; i++) {
//         colorCodes += hex[Math.floor(Math.random()* 16)]
//     }
//     return colorCodes;
// }

// // console.log(randomColors())
// console.log(randomColors())
