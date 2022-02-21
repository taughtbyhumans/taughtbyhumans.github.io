// Buttons for toggling between Topics

var all = document.getElementById("all");
all.disabled=true;

var filter_topic = function(topic) {
    // Enable all buttons
    var buttons = document.getElementsByClassName("options");
    var lengthOfArray= buttons.length;

    for (var i=0; i<lengthOfArray;i++) {
        buttons[i].disabled=false;
    }  
    // Disable topic button
    var topicButton = document.getElementById(topic);
    topicButton.disabled=true;
    
    if (topic != "all"){
        // Hide all videos
        allElements = document.getElementsByClassName("videos");
        var lengthOfArray= allElements.length;

        for (var i=0; i<lengthOfArray;i++) {
            allElements[i].style.display='none';
        }  

        // Show those in the topic
        topicElements = document.getElementsByClassName(topic);
        lengthOfArray= topicElements.length;

        for (var i=0; i<lengthOfArray;i++) {
            topicElements[i].style.display='block';
        } 
    }
    else {
        // Show all videos
        allElements = document.getElementsByClassName("videos");
        var lengthOfArray= allElements.length;

        for (var i=0; i<lengthOfArray;i++) {
            allElements[i].style.display='block';
        } 
    }
      

}