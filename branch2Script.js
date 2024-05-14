//get quarry string from branch 1
//fishCoun = get...

const urlParams = new URLSearchParams(window.location.search);
let fishCount = urlParams.get("fishCount");
const fishDisplay = document.getElementById("fishDisplay");
const room0img = document.getElementById("room0");
const info = document.getElementById("info");
const door0 = document.getElementById("door0");
const arrow = document.getElementById("arrow");
const roomTxt = document.getElementById("roomTxt");
const input = document.getElementById("input");
const answer = document.getElementById("answer");
const doorCounter = 1;
const contBtn = document.getElementById("backBtn");

fishCount = parseInt(fishCount);
fishDisplay.innerHTML = ("Fish Count: " + fishCount);

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
    let randomFsh = Math.floor(Math.random() * (3));
    info.innerHTML = "You have opened the second door. You got " + randomFsh +" fish";
    fishCount += randomFsh;
    fishDisplay.innerHTML = ("Fish Count: " + fishCount);
 }
 else if (doorCounter === 3) {
    //room 3 -1 fish then back
 }
 else {
    //room back
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
}

function toEnd() {
    //to ending
}