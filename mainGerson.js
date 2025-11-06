const musique = new Audio(
  "musique/Toby Fox - DELTARUNE Chapters 3+4 OST - 58 Hammer of Justice.flac"
);

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 0, 0);
ctx.fillStyle = "red";

const DEBUG = true;

ctx.strokeStyle = "green";
ctx.strokeRect(90, 35, 105, 75);
ctx.lineWidth = 5;

let x = 331;
let y = 240;

let dx = 325;
let dy = 230;
var image = Object.assign(new Image(), { src: "assets/SOUL_red.png" });

var Susie = Object.assign(new Image(), { src: "./assets/Susie.png" });
let sx = 50;
let sy = 186;

var GersonBody = Object.assign(new Image(), { src: "assets/Gerson.png" });
let GBx = 465;
let GBy = 198;

var GersonHear = Object.assign(new Image(), { src: "assets/Gerson.png" });
let GHx = 495;
let GHy = 175;

var flecheBas = Object.assign(new Image(), { src: "assets/fleche.png" });
let fbx = 0;
let fby = 0;

ctx.drawImage(image, dx, dy, 10, 10);

cycle = 0;

setInterval(() => {
  musique.play();
  ctx.fillStyle = "black";

  ctx.fillRect(0, 0, 640, 480);
  ctx.fillStyle = "red";
  ctx.drawImage(image, dx, dy);

  ctx.drawImage(
    Susie,
    5 + 59 * (Math.floor(cycle / 7) % 4),
    3774,
    54,
    45,
    sx,
    sy,
    108,
    90
  );
  ctx.drawImage(
    GersonHear,
    1525 + 56 * (Math.floor(cycle / 10) % 5),
    187,
    55,
    33,
    GHx + 7 * Math.sin(cycle / 20),
    GHy,
    110,
    66
  );
  ctx.drawImage(
    GersonBody,
    571 + 68 * (Math.floor(cycle / 7) % 14),
    181,
    67,
    39,
    GBx + 7 * Math.sin(cycle / 20),
    GBy,
    67 * 2,
    39 * 2
  );
  ctx.drawImage(
    flecheBas,
    0 * (Math.floor(cycle / 1) % 1),
    0,
    25,
    24,
    fbx,
    fby,
    25,
    24
  );

  ctx.strokeStyle = "green";
  ctx.strokeRect(246, 155, 170, 170);

  if (DEBUG) ctx.fillRect(x, y, 4, 4);
  cycle++;
}, 1000 / 60);

document.addEventListener("keydown", (event) => {
  console.log("position x " + x);
  console.log("position y " + y);
  if (event.key == "ArrowDown") {
    if (y < 315) {
      y = y + 5;
      dy = dy + 5;
    }
  }
  if (event.key == "ArrowUp") {
    if (y > 170) {
      y = y - 5;
      dy = dy - 5;
    }
  }
  if (event.key == "ArrowRight") {
    if (x < 401) {
      x = x + 5;
      dx = dx + 5;
    }
  }
  if (event.key == "ArrowLeft") {
    if (x > 256) {
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
