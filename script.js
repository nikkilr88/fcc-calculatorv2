document.addEventListener('DOMContentLoaded', function(e){
  var calDisplay = document.querySelector("#display");
var equalsBtn = document.querySelector("#submit");
var clearBtn = document.querySelector("#ac");
var aboutBox = document.querySelector("#about");
var aboutIcon = document.querySelector(".fa-question-circle");
var btn = document.querySelectorAll("input[type='button']");

//Keydown functions
calDisplay.addEventListener("keydown", function(e) {
  switch (e.which) {
    //'Enter' clicks equals button
    case 13:
      e.preventDefault();
      equalsBtn.click();
      break;
    //'C' clears display
    case 67:
      e.preventDefault();
      clearBtn.click();
      break;
  }
});

//Open about box
aboutIcon.addEventListener("click", function(){
  aboutBox.style.display = "block";
  console.log(aboutBox.style.display);
}, false);

//Close about box
document.addEventListener("click", function(e){
  var isClickInside = aboutBox.contains(e.target);
  var isIconClick = aboutIcon.contains(e.target);
  
  if(!isClickInside && !isIconClick) {
    aboutBox.style.display = "none";
  }
});
  
});
