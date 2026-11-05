let randnum1 = Math.floor(Math.random() * 6) + 1; //generira random broj od 1-6, bez +1 bi bilo od 0-5, math.floor zaokruži
let randnum2 = Math.floor(Math.random() * 6) + 1;

let randimgsource1 = "images/dice" + randnum1 + ".png";
let randimgsource2 = "images/dice" + randnum2 + ".png";

let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randimgsource1);

let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randimgsource2);

if (randnum1 > randnum2) {
  document.querySelector("h1").innerHTML = "Player 1 pobijedio";
} else if (randnum1 < randnum2) {
  document.querySelector("h1").innerHTML = "Player 2 pobijedio";
} else {
  document.querySelector("h1").innerHTML = "Izjednačeno";
}
let btn = document.querySelector("button");
btn.style.textAlign = "center";
