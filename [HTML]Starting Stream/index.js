var timerTag = document.getElementById("timer");
var mainText = document.getElementById("startingText");
var myLogo = document.getElementById("MyLogo");
var stayTune = document.getElementById("stayTune");
var social1 = document.getElementById("social1");
var interval;
var intervalMainText;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = timerTag.innerHTML;
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      timerTag.innerHTML = `${minutes} : ${seconds}`;

      if (minutes == 0 && seconds == 0){

        clearInterval(interval);
        socialViewer();
        lowerTime();

      }
  }, 1000);
}

function lowerTime() {
    timer.style.opacity = '0';
    mainText.style.fontSize = '120px';
    mainText.style.marginTop = '45vh';
    stayTune.style.display = 'block';
    
    setTimeout(() => {
    
    myLogo.style.right = '90px'
    myLogo.style.bottom = '0'
    myLogo.style.width = '250px'

  }, 100);

    setTimeout(() => {
      stayTune.style.opacity = '100'
      timer.remove()
    }, 550);

}

function socialViewer() {
  social1.style.display = 'block';
  const socialList = ['Instagram : Shayan._.Williams', 'YouTube : Code_Williams', 'Discord : discord.gg/Willi']
  socialNow = 0;
  setTimeout(() => {
    social1.style.opacity = '1';
    
    setInterval(() => {

      social1.style.opacity = '0';
      setTimeout(() => {      
        if (socialNow > socialList.length - 1){ socialNow = 0;}
        social1.innerHTML = socialList[socialNow]
        socialNow ++;
        setTimeout(() => {

          social1.style.opacity = '1'
        }, 250);
      }, 250);

    }, 5000);

  }, 250);

}

countdown()