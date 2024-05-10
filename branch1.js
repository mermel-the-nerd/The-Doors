let counter = document.getElementById("fishcounter");
let door = document.getElementById('door1');
let info = document.getElementById('info');

const urlParams = new URLSearchParams(window.location.search);
  let fishCount = Number(urlParams.get('fishCount'));
  counter.innerHTML = fishCount

function openDoor(){
 if (doorCounter == 1){
    door.style.visibility = 'hidden';
    fishCount += 3
    //go back to lobby
    counter.innerHTML = fishCount
 }
 else if (doorCounter==2){
    door.style.visibility = 'hidden';
    //go back
 }
 else {
    door.style.visibility = 'hidden';
    //hide arrow?
    fishCount -= 2
    counter.innerHTML = fishCount
    fishCount += 1
    counter.innerHTML = fishCount
    
 }
}
let doorCounter = 1;
function nextDoor(){
    doorCounter +=1;
    if (doorCounter == 2){
info.innerHTML = 'This door is also free to enter! Click on it to find whats inside or click the arrow to keep exploring'
//door.src = new door photo
    }
    else {
        //door.src = new door photo
        info.innerHTML = 'This door costs two fish to enter'
        if (fishCount > 2){
            info.innerHTML = "Oh no! You don't have enough fish! :( This door is also the last door of the branch. Click this link to return back to the path"
            //link back to start
        }
    }
   
    //change door photo, maybe add numbers to the front of them?
}
