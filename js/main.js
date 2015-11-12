//position of the ball
var x = 10;

//how far the ball moves every time
var speed=1;

//toggle while on an off to see the ball moving
while(x<200) {
draw = function() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//clear the background
ctx.fillStyle="pink";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Draw the ball
ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(x+40, 50, 40, 0, 2*Math.PI);
ctx.fill();

//move the ball
x=x+speed;
};
draw();
}