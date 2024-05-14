for (i=0; i<3; i+0){
    function checkAnswer(){
    let userguess = document.getElementById("input");
    let winlose = document.getElementById("winlose");
    if (userguess.value === "ding-dong" || userguess.value === "a ding-dong"){
      winlose.innerText = "Correct.";
      document.getElementById("startButton").style.display = "block";
    }
    else {
      winlose.innerText = "Incorrect.";
      i++
    }
  }
}