/**
 * STACKING TRANSPARENT IMAGES
 * 1. add images to .rollover class
 * 2. add styles for .over
 */

(function(){

  var c = document.createElement('canvas');
  var cx = c.getContext('2d');
  var images = document.querySelectorAll('.rollover');
  var all = images.length;
  var hideIndex = -all; // stack up layers from the bottom
  var ox = 0;
  var oy = 0;

  while (all--) {
    images[all].addEventListener('mouseover', copyimage, false);
    images[all].addEventListener('mousemove', hover, false);
    images[all].addEventListener('mouseout', resetimg, false);
  }

  function copyimage(ev) {
    var img = ev.target;
    c.width = img.offsetWidth;
    c.height = img.offsetHeight;
    cx.drawImage(img, 0, 0, img.offsetWidth, img.offsetHeight);
    ox = img.offsetLeft;
    oy = img.offsetTop;
  }

  function resetimg(ev) {
    ev.target.classList.remove('over');
  }

  function hover(ev) {
    var x = ev.clientX - ox;
    var y = ev.clientY - oy;
    var pixelcolour = cx.getImageData(x, y, 1, 1);
    console.log(pixelcolour.data);
    if (pixelcolour.data[3] === 0) {
      ev.target.classList.remove('over');
      ev.target.style.zIndex = hideIndex;
      hideIndex++; // stack new layers on top of abandoned layers
    } else {
      ev.target.classList.add('over');
      Object.keys(images).forEach((i) => {
        images[i].style.zIndex = 1;
      });
      ev.target.style.zIndex = 2;
      hideIndex = -all;
    }
  }

})();
