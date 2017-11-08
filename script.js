document.addEventListener('DOMContentLoaded', function(e) {
  
  var calDisplay = document.querySelector("#display");
  var aboutBox = document.querySelector("#about");
  var aboutIcon = document.querySelector(".fa-question-circle");
  var buttons = document.querySelectorAll("input[type='button']");

  //Set click event listeners
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      updateScreen(this.value);
    });
  }

  //Open about box
  aboutIcon.addEventListener("click", function() {
    aboutBox.style.display = "block";
    console.log(aboutBox.style.display);
  }, false);

  //Close about box
  document.addEventListener("click", function(e) {
    var isClickInside = aboutBox.contains(e.target);
    var isIconClick = aboutIcon.contains(e.target);

    if (!isClickInside && !isIconClick) {
      aboutBox.style.display = "none";
    }
  });

  function updateScreen(val) {
    
    //Clear 0 or Error from display on update
    if(calDisplay.innerHTML === '0' || calDisplay.innerHTML === 'Error') {
      calDisplay.innerHTML = '';
    }

    //Clear display
    if(val === 'AC') {
      calDisplay.innerHTML = '0';
      return;
    }
    //Replace operators
    else if(val === '×') {
      val = '*';
    }
    else if(val === '÷') {
      val = '/';
    }
    //Evaluate equation if no errors
    else if(val === '=') {
      try {
        calDisplay.innerHTML = eval(calDisplay.innerHTML);
        return;
      } 
      catch(err) {
        calDisplay.innerHTML = 'Error';
        return;
      }
    }
    
    calDisplay.innerHTML += val;
  }

});
