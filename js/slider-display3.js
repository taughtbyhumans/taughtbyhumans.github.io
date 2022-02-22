// Hide all videos
var leftButton = document.getElementById("slide-left");
var rightButton = document.getElementById("slide-right");
rightButton.disabled=false;
leftButton.disabled=true;


let width = screen.width;





var allElements = document.getElementsByClassName("videos");
var lengthOfArray= allElements.length;
console.log(lengthOfArray);

if (width > 751){
  i = 3;
}
else {
  i = 1;
}
for (var i; i<lengthOfArray;i++) {
  var number = i+1;
  var slide = "video-" + number;
  console.log(slide);
  document.getElementById(slide).style.display='none';
  // allElements[i].style.display='none';
  
}



var count = 1;


var changeSlide = function(direction) {
  allElements = document.getElementsByClassName("videos");
  var lengthOfArray= allElements.length;

  for (var i=0; i<lengthOfArray;i++) {
      allElements[i].style.display='none';
  }
  if (direction == "left") {
    count = count - 1;
  }
  else if (direction == "right") {
    count = count + 1;
  }


  if (width > 751){
    for (var i=count; i<=count+2;i++) {
      var slide = "video-" + i;
      // console.log(slide);
      document.getElementById(slide).style.display='block';
        // allElements[i].style.display='none';
    }
  }
  else {
    var slide = "video-" + count;
    document.getElementById(slide).style.display='block';
  }




  if (count == 1) {
    var leftButton = document.getElementById("slide-left");
    var rightButton = document.getElementById("slide-right");
    rightButton.disabled=false;
    leftButton.disabled=true;
  }
  else if (count == lengthOfArray - 2) {
    var leftButton = document.getElementById("slide-left");
    var rightButton = document.getElementById("slide-right");
    rightButton.disabled=true;
    leftButton.disabled=false;
  }
  else {
    var leftButton = document.getElementById("slide-left");
    var rightButton = document.getElementById("slide-right");
    rightButton.disabled=false;
    leftButton.disabled=false;
  }


}