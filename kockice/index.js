let randomNumber1 = Math.floor(Math.random() * 6) + 1; //random generira od 1 do 6
let randomNumber2 = Math.floor(Math.random() * 6) + 1; //random generira od 1 do 6

let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Igrač 1 je pobijedio!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Igrač 2 je pobijedio!";
} else {
  document.querySelector("h1").innerHTML = "Nerješeno.";
}
