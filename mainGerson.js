var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 0, 0); // le canva fais 290 pour x et 145 pour y
ctx.fillStyle = "red";

ctx.strokeStyle = "green";
ctx.strokeRect(90, 35, 105, 75);

let x = 144;
let y = 60;

let dx = 141;
let dy = 57;
var image = document.getElementById("SOUL");

var Susie = document.getElementById("Susie");
let sx = 10;
let sy = 46;

var GersonBody = document.getElementById("GersonBody");
let GBx = 220;
let GBy = 50;

var GersonHear = document.getElementById("GersonHear");
let GHx = 230;
let GHy = 40;

ctx.drawImage(image, dx, dy, 10, 10);

cycle = 0;


setInterval(() => {
  ctx.fillStyle = "black";

  ctx.fillRect(0, 0, 500, 500);
  ctx.fillStyle = "red";
  ctx.drawImage(image, dx, dy, 10, 10);

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
    GersonHear,
    1525 + 56 * (Math.floor(cycle / 7) % 5),
    187,
    55,
    33,
    GHx,
    GHy,
    55,
    33
  );
  ctx.drawImage(
    GersonBody,
    571 + 68 * (Math.floor(cycle / 7) % 14),
    181,
    67,
    39,
    GBx,
    GBy,
    67,
    39
  );

  ctx.strokeStyle = "green";
  ctx.strokeRect(111, 27, 70, 70);

  ctx.fillRect(x, y, 4, 4);
  cycle++;
}, 1000 / 60);

document.addEventListener("keydown", (event) => {
  console.log("position x " + x);
  console.log("position y " + y);
  if (event.key == "ArrowDown") {
    if (y < 90) {
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
    if (x < 170) {
      x = x + 5;
      dx = dx + 5;
    }
  }
  if (event.key == "ArrowLeft") {
    if (x > 115) {
      x = x - 5;
      dx = dx - 5;
    }
  }
});
/* taille
Susie : 60 51
GersonBody : 67 39
GersonHear : 55 33
*/