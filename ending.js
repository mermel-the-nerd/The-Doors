const urlParams = new URLSearchParams(window.location.search);
const fishCount = urlParams.get("fishCount");
const fishDisplay = document.getElementById("fishDisplay");
fishDisplay.innerHTML = ("Fish Count: " + fishCount);
endDoor= document.getElementById("endDoor");
endDoor.style.visibility = 'visible';
results = document.getElementById("results");

function end(){

    if (fishCount < 1) {
    results.innerHTML = "Grade: F <br/> The cat ate you because you didn't bring any fish"
    endDoor.src = "winImgF.jpeg";
      //add img src
  }
  else if (fishCount < 4) {
    results.innerHTML = "Grade: C <br/> The cat begrudgingly eats your fish but is disappointed in your small offering"
    endDoor.src = "winImgC.jpeg";
      //add img src
  }
  else if (fishCount < 7) {
    results.innerHTML = "Grade: B <br/> The cat eats your fish happily"
    endDoor.src = "winImgB.jpeg";
      //add img src
  }
  else {
    results.innerHTML = "Grade: A++++++ <br/> The cat eats all your fish and is satisfied. Congrats on getting the highest possible score!"
    endDoor.src = "winImgA.jpeg";
  }
}
