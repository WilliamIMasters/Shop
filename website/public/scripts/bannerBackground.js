var canvas;
var canvasContext;
//let r = 0;
//let g = 0;
//set b = 0;

window.onload = function() {
   canvas = document.getElementById("bannerC");
   canvasContext = canvas.getContext("2d");
   canvasContext.fillStyle = "#EA3D77";
   canvasContext.fillRect(0,0, canvas.width, canvas.height);

   animate();

}

function animate() {

   requestAnimationFrame(animate);
}
//https://ayylienclothing.com
