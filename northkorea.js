const canvasT = document.getElementById("nk");
const contextT = canvasT.getContext("2d");

var referenceWidth = 600;
var referenceHeight = 400;

canvasT.style.width = referenceWidth + 'px';
canvasT.style.height = referenceHeight + 'px';

var scale = window.devicePixelRatio;
canvasT.width = referenceWidth * scale;
canvasT.height = referenceHeight * scale;
contextT.scale(scale, scale);

function draw() {
var frames = 0;
var image = document.getElementById("hum");
function animate() {
  contextT.clearRect(0, 0, 600, 400);
  contextT.save();
  contextT.translate(300, 100);
  contextT.rotate((Math.PI / 180) * frames);
  contextT.translate(-300, -100);
  contextT.drawImage(image, 0, 0, referenceWidth, referenceHeight);
  contextT.restore();
  frames += 1;
  window.requestAnimationFrame(animate);

  var imageData = contextT.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    data[i+1] = 255 - data[i+1];
    data[i+2] = 255 - data[i+2];
  }
  contextT.putImageData(imageData, 0, 0);
}
animate();

}


draw();
