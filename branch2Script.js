//https://cataas.com/

const urlParams = new URLSearchParams(window.location.search);
let fishCount = urlParams.get("fishCount");
const fishDisplay = document.getElementById("fishDisplay");
const room0img = document.getElementById("room0");
const info = document.getElementById("info");
const door0 = document.getElementById("door0");
const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");
const door3 = document.getElementById("door3");
const arrow = document.getElementById("arrow");
const roomTxt = document.getElementById("roomTxt");
const input = document.getElementById("input");
const answer = document.getElementById("answer");
let doorCounter = 1;
const contBtn = document.getElementById("backBtn");
const room1img = document.getElementById("room1");
const room2img = document.getElementById("room2");
let link = document.getElementById('link');
const catImage = document.getElementById("catImg");
link.style.visibility = 'hidden'

fishCount = parseInt(fishCount);
fishDisplay.innerHTML = ("Fish Count: " + fishCount);

//get cat function
async function getCat() {
  let response = await fetch('https://cataas.com/');
    
  if (response.ok) {
    let data = await response.json();
    let imageUrl = data[0].url;
    displayCat(imageUrl);
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

//display cat function
function displayCat(response) {
  catImage.src = response;
}

function openDoor(){
 if (doorCounter === 1){
    //room 1 one try riddle and 4 fish if they get it right
    info.innerHTML = "You have opened the first door answer the riddle to get fish:"
    enterRoom();
    roomTxt.innerHTML = "What is green, fuzzy, has legs, and would kill you if it fell out of a tree?";
    room0img.style.display = "block";
    input.style.display = "block";
    answer.style.display = "block";
 }
 else if (doorCounter === 2){
    //room 2 random amount of fish 1-3
    room1img.style.display = "block";
    door1.style.display = "none";
    enterRoom();
    let randomFsh = Math.floor(Math.random() * 3) + 1;
    info.innerHTML = "You have opened the second door. You got " + randomFsh +" fish. Press the button to continue.";   
    fishCount += randomFsh;
    fishDisplay.innerHTML = ("Fish Count: " + fishCount);
    contBtn.style.display = "block";
 }
 else if (doorCounter === 3) {
    //room 3 -1 fish then back
    room2img.style.display = "block";
    door2.style.display = "none";
    enterRoom();
    fishCount--;
    info.innerHTML = "You have opened the third door. A cat took one of your fish. Press the button to continue.";   
    fishDisplay.innerHTML = ("Fish Count: " + fishCount);
    contBtn.style.display = "block";
 }
 else {
    //room back
    catImage.style.display = "block";
    door3.style.display = "none";
    enterRoom();
    info.innerHTML = "This is the last room press continue to be judged by the almighty cat";   
    fishDisplay.innerHTML = ("Fish Count: " + fishCount);
    contBtn.style.display = "block";
 }
}

function riddle() {
    //riddle
    let guess = input.value;
    guess = guess.toLowerCase();

    if (guess === "pool table" || guess === "a pool table") {
        roomTxt.style.display = "none";
        info.innerHTML = "Congratulations!! You got it right! You get 4 fish. Press the button to continue";
        fishCount += 4;
        fishDisplay.innerHTML = ("Fish Count: " + fishCount);
        contBtn.style.display = "block";
        input.style.display = "none";
        answer.style.display = "none";
    }
    else {
        roomTxt.style.display = "none";
        info.innerHTML = "Sorry thats not right. You get no fish from this room. Press the button to continue ";
        input.style.display = "none";
        answer.style.display = "none";
        contBtn.style.display = "block";
    }

}

function enterRoom() {
    door0.style.display = "none";
    arrow.style.display = "none";
}

function nextDoor() {
    //continue to next door
    doorCounter++;
    if (doorCounter === 2){
        door0.style.display = "none";
        door1.style.display = "block";
    }
    else if (doorCounter === 3){
        door1.style.display = "none";
        door2.style.display = "block";
    }
    else {
        door2.style.display = "none";
        door3.style.display = "block";
    }
}

function toEnd() {
    link.style.visibility = 'visible'
}