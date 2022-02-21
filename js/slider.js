var changeSlide = function(number) {
  // Enable all buttons
  // var buttons = document.getElementsByClassName("slides");
  // var lengthOfArray= buttons.length;

  // for (var i=0; i<lengthOfArray;i++) {
  //     buttons[i].disabled=false;
  // }  
  // Disable topic button
  // var topicButton = document.getElementById(number);
  // topicButton.disabled=true;
  
// Hide all videos
  allElements = document.getElementsByClassName("slides");
  var lengthOfArray= allElements.length;

  for (var i=0; i<lengthOfArray;i++) {
      allElements[i].style.display='none';
  } 

  // Set all buttons to purple
  allElements = document.getElementsByClassName("slide-buttons");
  var lengthOfArray= allElements.length;

  for (var i=0; i<lengthOfArray;i++) {
      allElements[i].style.color = 'gray';
  }  

// Show correct slide
  var slide = "slide-" + number;
  document.getElementById(slide).style.display='block';

// Set pressed button to grey
  var button = slide + "-button"
  document.getElementById(button).style.color='#7E3F8F';


    
}