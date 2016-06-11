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
