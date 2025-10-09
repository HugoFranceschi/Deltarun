var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 0, 0); // le canva fais 290 pour x et 145 pour y
ctx.fillStyle = "red";

ctx.strokeStyle = "green";
ctx.strokeRect(90, 35, 105, 75);

let x = 144;
let y = 70;

let dx = 141;
let dy = 67;
var image = document.getElementById("SOUL");

ctx.drawImage(image, dx, dy, 10, 10);

setInterval(() => {
  ctx.fillStyle = "black";

  ctx.fillRect(0, 0, 500, 500);
  ctx.fillStyle = "red";
  ctx.drawImage(image, dx, dy, 10, 10);

  ctx.strokeStyle = "green";
  ctx.strokeRect(101, 27, 90, 90);

  ctx.fillRect(x, y, 4, 4);
}, 1000 / 60);

document.addEventListener("keydown", (event) => {
  console.log("position x " + x);
  console.log("position y " + y);
  if (event.key == "ArrowDown") {
    if (y < 110) {
      y = y + 5;
      dy = dy + 5;
    }
  }
  if (event.key == "ArrowUp") {
    if (y > 30) {
      y = y - 5;
      dy = dy - 5;
    }
  }
  if (event.key == "ArrowRight") {
    if (x < 180) {
      x = x + 5;
      dx = dx + 5;
    }
  }
  if (event.key == "ArrowLeft") {
    if (x > 105) {
      x = x - 5;
      dx = dx - 5;
    }
  }
});

/* taille
Kirs : 36 38
Ralsei : 50 47
Susie : 54 45
*/
