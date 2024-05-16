/*const urlParams = new URLSearchParams(window.location.search);
const fishCount = urlParams.get("fishCount");
const fishDisplay = document.getElementById("fishDisplay");
fishDisplay.innerHTML = ("Fish Count: " + fishCount);*/
//remove when link is established!
//fishCount = window.prompt("how many fish do you have?")
//parseInt(fishCount)
fishCount=9;
results = document.getElementById("results");
function end(){
  if (fishCount < 1) {
    results.innerHTML = "Grade: F <br/> The cat ate you because you didn't bring any fish"
    document.getElementById("winImg").src = "winImgF.jpeg";
      //add img src
  }
  else if (fishCount < 4) {
    results.innerHTML = "Grade: C <br/> The cat begrudgingly eats your fish but is disappointed in your small offering"
    document.getElementById("winImg").src = "winImgC.jpeg";
      //add img src
  }
  else if (fishCount < 7) {
    results.innerHTML = "Grade: B <br/> The cat eats your fish happily"
    document.getElementById("winImg").src = "winImgB.jpeg";
      //add img src
  }
  else {
    results.innerHTML = "Grade: A++++++ <br/> The cat eats all your fish and is satisfied. Congrats on getting the highest possible score!"
    document.getElementById("winImg").src = "winImgA.jpeg";
  }
}
