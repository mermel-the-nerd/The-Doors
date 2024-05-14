function checkAnswer(){
    let userguess = document.getElementById("input");
    let winlose = document.getElementById("winlose");
    if (userguess.value === "ding-dong"){
      winlose.innerText = "Correct.";
      document.getElementById("startButton").style.display = "block";
    }
    else {
      winlose.innerText = "Incorrect.";
    }
}