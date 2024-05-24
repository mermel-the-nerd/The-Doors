const urlParams = new URLSearchParams(window.location.search);
const fishCount = urlParams.get("fishCount");
const fishDisplay = document.getElementById("fishDisplay");
fishDisplay.innerHTML = ("Fish Count: " + fishCount);
endDoor= document.getElementById("endDoor");
endDoor.style.visibility = 'visible';
results = document.getElementById("results");
endBtn = document.getElementById("endBtn")
function end(){
    endBtn.style.visibility = 'hidden';
  if (fishCount < 1) {
    results.innerHTML = "Grade: F <br/> The cat ate you because you didn't bring any fish"
    endDoor.src = "winImgF.jpeg";
  }
  else if (fishCount < 7) {
    results.innerHTML = "Grade: C <br/> The cat begrudgingly eats your fish but is disappointed in your small offering"
    endDoor.src = "winImgC.jpeg";
  }
  else if (fishCount < 12) {
    results.innerHTML = "Grade: B <br/> The cat eats your fish happily"
    endDoor.src = "winImgB.jpeg";
  }
  else if (fishCount < 15) {
    results.innerHTML = "Grade: A++++++ <br/> The cat eats all your fish and is satisfied. Congrats on getting the highest possible score!"
    endDoor.src = "winImgA.jpeg";   
  }
  else {
    results.innerHTML = "  "
    endDoor.src = "403Error.png";
    fishDisplay.style.visibility = 'hidden';
  }
}
