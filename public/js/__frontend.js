// ------------------------------
// GLOBAL VARIABLES + INITIALISE
// ------------------------------
// --- HELPER FUNCTION
Date.prototype.toDateInputValue = function () {
  let local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};
Date.prototype.toTimeInputValue = function () {
  let local = new Date(this);
  let stamps = local.toLocaleTimeString().split(':');
  stamps[0] = stamps[0].length === 1 ? `0${ stamps[0] }` : stamps[0];
  stamps[1] = stamps[1].length === 1 ? `0${ stamps[1] }` : stamps[1];
  return `${ stamps[0] }:${ stamps[1] }`;
};
// --- GLOBAL VARIABLES
// const now = new Date();
// let muscleName = null;
// document.getElementById('date').value = now.toDateInputValue();
// document.getElementById('time').value = now.toTimeInputValue();

// ---------------------------
// JQUERY CONTROLLED ELMENTS -
// ---------------------------
$(() => {
  $('#baseImage').maphilight({
    fill: false,
    stroke: false
  });
  $('area').mouseover(function () {
    let muscleImg = document.getElementById($(this).attr('title'));
    muscleImg.classList.add('hover');
  }).mouseout(function () {
    let muscleImg = document.getElementById($(this).attr('title'));
    muscleImg.classList.remove('hover');
  });

  // CLICk ACTION
  $('area').click(function () {
    muscleName = $(this).attr('title');
    document.getElementById('muscleName').innerText = muscleName;
    let muscleImg = document.getElementById(muscleName);
    // keep focusing on that muscle
    let allHovered = document.getElementsByClassName('focused');
    Object.keys(allHovered).forEach(i => {
      allHovered[i] && allHovered[i].classList.remove('focused');
    });
    muscleImg.classList.add('focused');
  });
});

// ----------------
// FORM SUBMISSION
// ----------------
const _serialise = obj => {
  let str = [];
  for (let p in obj) if (obj.hasOwnProperty(p)) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  }
  return str.join("&");
};

const _submitFormHelper = () => {
  'use strict';

  return new Promise((resolve, reject) => {
    let valueSet = new FormData();
    valueSet.append('muscle', muscleName);
    valueSet.append('date', document.getElementById('date').value);
    valueSet.append('time', document.getElementById('time').value);
    valueSet.append('numSets', document.getElementById('numSets').value);
    let type = document.getElementById('type').checked;
    valueSet.append('tool', document.getElementById('tool').value);
    if (type) {
      // cardio training
      valueSet.append('valueOfType', document.getElementById('minutes').value);
      valueSet.append('type', 'cardio');
    } else {
      // weight training
      valueSet.append('valueOfType', document.getElementById('weight').value);
      valueSet.append('type', 'weight');
    }

    // AJAX REQUEST
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        let resJSON = JSON.parse(xhr.responseText);
        if (xhr.status == 200) {
          resolve(resJSON);
        } else {
          reject(resJSON);
        }
      }
    };
    xhr.open('POST', '/trackingRecord');
    xhr.send(valueSet);
  }); // end:: promise
};

const submit = () => {
  _submitFormHelper().then(res => {
    console.log(res);
  }).catch(err => {
    console.error(`Error: ${ err }`);
  });
};