var north = document.querySelector(".north");
var south = document.querySelector(".south");
var northUp = 0;
var northLeft = 0;
var southDown = -50;
var southRight = 200;
var opacity = 0;

function fade() {
 if (opacity<1) {
    opacity += .1;
    setTimeout(function(){fade()},100);
 }
 document.querySelector('president').style.opacity = opacity;
 document.querySelector('h1').style.opacity = opacity;
}

function split() {
  if (northUp >= -330) {
    northUp -= 2;
    northLeft -= 4;
    southDown += 4;
    southRight += 5;
    north.style.marginTop = northUp + 'px';
    north.style.marginLeft = northLeft + 'px';
    south.style.marginTop = southDown + 'px';
    south.style.marginLeft = southRight + 'px';
  }
  else {
    north.style.marginTop = northUp + 'px';
    north.style.marginLeft = northLeft + 'px';
    south.style.marginTop = southDown + 'px';
    south.style.marginLeft = southRight + 'px';
    document.querySelector(".president").style.display = "block";
    document.querySelector(".president").style.marginLeft = "auto";
    document.querySelector(".president").style.marginTop = "auto";
    document.querySelector("h1").style.display = "block";
    var x = document.querySelector('.fade-in');
    if (x.classList.contains('is-paused')){
      x.classList.remove('is-paused');
}
    north.style.display = "none";
    south.style.display = "none";


  }
  animation = requestAnimationFrame(split);
}

north.addEventListener("mouseover", split);
south.addEventListener("mouseover", split);
