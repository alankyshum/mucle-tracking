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
  .mouseout(function() {
    var muscleImg = document.getElementById($(this).attr('title'));
    muscleImg.classList.remove('hover');
  });

  // CLICk ACTION
  $('area').click(function() {
    var muscleName = $(this).attr('title');
    document.getElementById('muscleName').innerText = muscleName;
    var muscleImg = document.getElementById(muscleName);
    // keep focusing on that muscle
    var allHovered = document.getElementsByClassName('focused');
    Object.keys(allHovered).forEach((i) => {
      allHovered[i] && allHovered[i].classList.remove('focused');
    });
    muscleImg.classList.add('focused');
  })
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


// SUBMIT function
const submitForm = () => {
  'use strict';
  let valueSet = {};
  valueSet.date = document.getElementById('date').value;
  valueSet.time = document.getElementById('time').value;
  valueSet.numSets = document.getElementById('numSets').value;
  valueSet.type = document.getElementById('type').value;
  valueSet.tool = document.getElementById('tool').value;
  if (type) { // cardio training
    valueSet.valueOfType = document.getElementById('minutes').value
  } else { // weight training
    valueSet.valueOfType = document.getElementById('weight').value
  }
  console.log(valueSet);
}
