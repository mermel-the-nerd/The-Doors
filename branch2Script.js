//get quarry string from branch 1
//fishCoun = get...

const urlParams = new URLSearchParams(window.location.search);
const fishCount = urlParams.get("fishCount");
const fishDisplay = document.getElementById("fishDisplay");
const room0img = document.getElementById("room0");
const info = document.getElementById("info");
const door0 = document.getElementById("door0");
const arrow = document.getElementById("arrow");
const roomTxt = document.getElementById("roomTxt");
fishDisplay.innerHTML = ("Fish Count: " + fishCount);

function door0Open() {
    //room 1 one try riddle and 4 fish if they get it right
    info.innerHTML = "You have opened the first door answer the riddle to get fish:"
    enterRoom();
    room0img.style.display = "block";   
}

function door1Open() {
    //room 2 random amount of fish 1-3
}

function door2Open() {
    //room 3 -1 fish then back
}

function door3Open() {
    //room back
}

function enterRoom() {
    door0.style.display = "none";
    arrow.style.display = "none";
}

function nextDoor() {
    //continue to next door
}