const urlParams = new URLSearchParams(window.location.search);
const fishCount = urlParams.get("fishCount");
const fishDisplay = document.getElementById("fishDisplay");
fishDisplay.innerHTML = ("Fish Count: " + fishCount);

function end(){
    fishCount=3
    results=document.getElementById("results")
    if (fishCount<1){
        results.innerHTML=("Grade: F "/n 
        "The cat ate you because you didn't bring any fish")
    }
    else if (fishCount<3){
        fishDisplay.innerHTML=("Grade: C"/n "The cat begrudgingly eats your fish but is disappointed in your small offering")
    }
    else if (fishcount<7){
    fishDisplay.innerHTML=("Grade: B"/n "The cat eats your fish happily")
    }
    else {
    fishDisplay.innerHTML=("Grade: A++++++"/n "The cat eats all your fish and is satisfied. Congrats on getting the highest possible score!")
    }
    
}