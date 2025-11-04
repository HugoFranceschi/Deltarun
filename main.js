var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 0, 0); // le canva fais 290 pour x et 145 pour y
ctx.fillStyle = "red";

const DEBUG = false;

ctx.strokeStyle = "green";
ctx.strokeRect(90, 35, 105, 75);

let x = 144;
let y = 70;

let dx = 141;
let dy = 67;
var image = document.getElementById("SOUL");

var Kris = document.getElementById("Kris");
let kx = 20;
let ky = 16;
var Susie = document.getElementById("Susie");
let sx = 10;
let sy = 46;
var Ralsei = document.getElementById("Ralsei");
let rx = 15;
let ry = 79;

ctx.drawImage(image, dx, dy, 10, 10);

cycle = 0;

setInterval(() => {
  ctx.fillStyle = "black";

  ctx.fillRect(0, 0, 500, 500);
  ctx.fillStyle = "red";
  ctx.drawImage(image, dx, dy, 10, 10);

  ctx.drawImage(
    Kris,
    7 + 41 * (Math.floor(cycle / 7) % 6),
    233,
    36,
    38,
    kx,
    ky,
    36,
    38
  );
  ctx.drawImage(
    Susie,
    5 + 59 * (Math.floor(cycle / 7) % 4),
    3774,
    54,
    45,
    sx,
    sy,
    54,
    45
  );
  ctx.drawImage(
    Ralsei,
    5 + 74 * (Math.floor(cycle / 7) % 5),
    2595,
    69,
    47,
    rx,
    ry,
    69,
    47
  );

  ctx.strokeStyle = "green";
  ctx.strokeRect(101, 27, 90, 90);

  if (DEBUG) ctx.fillRect(x, y, 4, 4);
  cycle++;
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
Ralsei : 69 47
Susie : 60 51
*/
