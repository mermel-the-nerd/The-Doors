let counter = document.getElementById("fishcounter");
let door = document.getElementById('door1');
let info = document.getElementById('info');
let results = document.getElementById('dooresults');
let arrow = document.getElementById('arrow');
let link = document.getElementById('link');
let hangmantext = document.getElementById('hangman');


const urlParams = new URLSearchParams(window.location.search);
  let fishCount = Number(urlParams.get('fishCount'));
  counter.innerHTML += fishCount

results.style.visibility = 'hidden'
link.style.visibility = 'hidden'
let doorCounter = 1;

function openDoor(){
 if (doorCounter == 1){

    door.style.visibility = 'hidden';
    results.style.visibility = 'visible'
    link.style.visibility = 'visible'
    counter.innerHTML -= fishCount
    fishCount += 3
    
    //go back to lobby
    counter.innerHTML += fishCount
    results.innerHTML = 'You found three fish!'
 }
 else if (doorCounter==2){
    door.style.visibility = 'hidden';
    results.style.visibility = 'visible'
    results.innerHTML = 'You didnt find any fish :('
    link.style.visibility = 'visible'
    //go back
 }
 else if (doorCounter == 3 && fishCount>2){
    door.style.visibility = 'hidden';
    results.style.visibility = 'visible'
    arrow.style.visiblity = 'hidden'
    //hide arrow?
    fishCount -= 2
    counter.innerHTML += fishCount
    fishCount += 1
    counter.innerHTML += fishCount
    results.innerHTML = 'You found one fish!'
    link.style.visibility = 'visible'
    
 }
}

function nextDoor(){
    doorCounter +=1;
    if (doorCounter == 2){
info.innerHTML = 'This door needs you to play a game of hangman to enter! Click on it to find whats inside or click the arrow to keep exploring'
door.src ='https://aarsunwoods.com/wp-content/uploads/2021/10/Entrance-Door-with-Helm-and-Kalash-128-jpg.webp'
hangman();
    }
    else {
        //door.src = new door photo
        info.innerHTML = 'This door costs two fish to enter'
        if (fishCount > 2){
            info.innerHTML = "Oh no! You don't have enough fish! :( This door is also the last door of the branch."
            link.style.visibility = 'visible'
            //link back to start
        }
    }
   
    //change door photo, maybe add numbers to the front of them?
}

function hangman(){
    let wordbank = ['hungry', 'sabrina','yolanda','fiala','maddie','autumn','kitty'];
    let word = wordbank[Math.floor(Math.random() * wordbank.length)];
    let answer = []
    hangmantext.innerHTML = "Your word has " + word.length + " letters"
     
    for (let i=0;i>word.length;i++){
       //answer.''
    }
    letterguess = window.prompt("Guess a letter!")
    if (word.indexOf(letterguess) != -1){
        //somehow add to a blank arrayindexOf(letterguess)
    }

}