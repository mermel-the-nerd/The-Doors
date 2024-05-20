let wrongCount = 0;
function checkAnswer(){
    let userguess = document.getElementById("input");
    let winlose = document.getElementById("winlose");
    let i=0;
    if (userguess.value === "ding-dong" || userguess.value === "a ding-dong" || userguess.value === "ding dong" || userguess.value === "a ding dong"){
      winlose.innerText = "Correct.";
      document.getElementById("startButton").style.display = "block";
      i--;
    }
    else if (wrongCount>1){
        winlose.innerText = "You have run out of chances. You cannot pass through the door.";
        document.getElementById("input").style.display = "none";
      }
    else{
        winlose.innerText = "Incorrect.";
        wrongCount++;
      }
    }