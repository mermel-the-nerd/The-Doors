for (i=0; i<3; i++){
    function checkAnswer(){
    let userguess = document.getElementById("input");
    let winlose = document.getElementById("winlose");
    let i=0;
    if (userguess.value === "ding-dong" || userguess.value === "a ding-dong"){
      winlose.innerText = "Correct.";
      document.getElementById("startButton").style.display = "block";
      i--;
    }
    else if (i>2){
        winlose.innerText = "You have run out of chances. You cannot pass through the door.";
      }
    else {
        winlose.innerText = "Incorrect.";
      }
    }
    console.log (i);
  }

