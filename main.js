var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 0, 0); // le canva fais 290 pour x et 145 pour y
ctx.fillStyle = "red";

ctx.strokeStyle = "green";
ctx.strokeRect(90, 35, 105, 75);

let x = 135;
let y = 70;

setInterval(() => {
  ctx.fillStyle = "black";

  ctx.fillRect(0, 0, 500, 500);
  ctx.fillStyle = "red";

  ctx.strokeStyle = "green";
  ctx.strokeRect(85, 35, 110, 75);

  ctx.fillRect(x, y, 9, 5);
}, 1000 / 60);

document.addEventListener("keydown", (event) => {
  console.log("position x " + x);
  console.log("position y " + y);
  if (event.key == "ArrowDown") if (y < 105) y = y + 5;
  if (event.key == "ArrowUp") if (y > 35) y = y - 5;
  if (event.key == "ArrowRight") if (x < 185) x = x + 5;
  if (event.key == "ArrowLeft") if (x > 85) x = x - 5;
});
