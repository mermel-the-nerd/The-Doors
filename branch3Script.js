
const urlParams = new URLSearchParams(window.location.search);
let fishCount = urlParams.get("fishCount");
const fishDisplay = document.getElementById("fishDisplay");
const room0img = document.getElementById("room0");
const info = document.getElementById("info");
const door0 = document.getElementById("door0");
const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");
const arrow = document.getElementById("arrow");
const roomTxt = document.getElementById("roomTxt");
const input = document.getElementById("input");
const answer = document.getElementById("answer");
let doorCounter = 1;
const contBtn = document.getElementById("backBtn");
const room1img = document.getElementById("room1");
const room2img = document.getElementById("room2");
let catImage = document.getElementById("catImg");
let link = document.getElementById("link");

fishCount = parseInt(fishCount);
fishDisplay.innerHTML = ("Fish Count: " + fishCount);
catImage.style.display = "none";

function door0Enter(){
    if (fishCount >= 5) {
        info.innerHTML = ("Click on the door to open it or click on the arrow to go to the next door. You can go into the first door because you have 5 fish!");
        door0.style.display = "block";
    }
    else {
        info.innerHTML = ("You can't go into the first door because you don't have 5 fish!");
        door0.style.display = "none";
    }
}

function openDoor(){
 if (doorCounter === 1){
    //if more than 5 fish you can enter and get ur fish doubled if not
    room1img.style.display = "block";
    enterRoom();
    info.innerHTML = "You had 5 fish so you were able to open the first door! Your fish doubled!"
    fishCount = (fishCount * 2);
    fishDisplay.innerHTML = ("Fish Count: " + fishCount);
    toEnd();
 }
 else if (doorCounter === 2){
    //room 2 random amount of fish 1-3
    room2img.style.display = "block";
    fishCount --;
    fishDisplay.innerHTML = ("Fish Count: " + fishCount);
    door1.style.display = "none";
    enterRoom();
    let randomFsh = Math.floor(Math.random() * 5) + 2;
    info.innerHTML = "You have spent 1 fish and opened the second door. You got " + randomFsh +" fish. Press the link to continue.";   
    fishCount += randomFsh;
    fishDisplay.innerHTML = ("Fish Count: " + fishCount);
    toEnd();
 }
 else {
    //room back
    catImage.style.display = "block";
    door2.style.display = "none";
    enterRoom();
    info.innerHTML = "This is the last room press the link to be judged by the almighty cat"; 
    catImage.display = "block";
    fishDisplay.innerHTML = ("Fish Count: " + fishCount);
    toEnd();
 }
}

function enterRoom() {
    door0.style.display = "none";
    door1.style.display = "none";
    door2.style.dislpay = "none";
    arrow.style.display = "none";
}

function nextDoor() {
    //continue to next door
    doorCounter++;
    if (doorCounter === 2){
        info.innerHTML = ("Would you like to spend one fish to open this door? If not click the arrow button.");
        door0.style.display = "none";
        door1.style.display = "block";
    }
    else{
        info.innerHTML = ("this is the last door");
        door1.style.display = "none";
        door2.style.display = "block";
    }
}

function toEnd(){
    link.href = ("ending.html?fishCount=" + fishCount);
    link.style.visibility = "visible"; 
}


//display the cat image
function displayCat(response) {
  catImage.src = response;
}