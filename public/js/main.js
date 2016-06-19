// MAP AREA CONTROLLERS
$(() => {
  $('#baseImage').maphilight({
    fill: false,
    stroke: false
  });
  $('area').mouseover(function() {
    var muscleImg = document.getElementById($(this).attr('title'));
    muscleImg.classList.add('hover');
  })
  .mouseout(function(){
    var muscleImg = document.getElementById($(this).attr('title'));
    muscleImg.classList.remove('hover');
  });
});

/**
 * SETTING DEFAULT VALUES
 */
Date.prototype.toDateInputValue = (function() {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});
Date.prototype.toTimeInputValue = (function() {
  var local = new Date(this);
  var stamps = local.toLocaleTimeString().split(':');
  stamps[0] = stamps[0].length===1 ? `0${stamps[0]}` : stamps[0];
  stamps[1] = stamps[1].length===1 ? `0${stamps[1]}` : stamps[1];
  return `${stamps[0]}:${stamps[1]}`;
});

const now = new Date();
document.getElementById('date').value = now.toDateInputValue();
document.getElementById('time').value = now.toTimeInputValue();
