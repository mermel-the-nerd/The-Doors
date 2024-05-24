let counter = document.getElementById("fishcounter");
let door = document.getElementById('door1');
let info = document.getElementById('info');
let results = document.getElementById('dooresults');
let arrow = document.getElementById('arrow');
let link = document.getElementById('link');
let hangmantext = document.getElementById('hangman');
let hangmandisplay = document.getElementById('hangmandisplay');
const input = document.getElementById("input");
let submitbutton = document.getElementById('inputbutton');


const urlParams = new URLSearchParams(window.location.search);
  let fishCount = Number(urlParams.get('fishCount'));
      let counterdisplay = 'Fish: ' + fishCount;
    counter.innerHTML = counterdisplay;

results.style.visibility = 'hidden'
link.style.visibility = 'hidden'
input.style.visibility = 'hidden'
submitbutton.style.visibility = 'hidden'

let doorCounter = 1;

function openDoor(){
 if (doorCounter == 1){

    door.style.visibility = 'hidden';
    results.style.visibility = 'visible'
        fishCount += 3
        counterdisplay = 'Fish: ' + fishCount;
        counter.innerHTML = counterdisplay;
        toNextBranch();
    //go back to lobby
    
    results.innerHTML = 'You found three fish!'
 }
 else if (doorCounter==2&door2open==true){
    door.style.visibility = 'hidden';
    results.style.visibility = 'visible'
    results.innerHTML = 'You found three fish';
    fishCount+=3;
    counterdisplay = 'Fish: ' + fishCount;
    counter.innerHTML = counterdisplay;
    toNextBranch();
    //go back
 }
 else if (doorCounter == 3){
    door.style.visibility = 'hidden';
    results.style.visibility = 'visible'
    arrow.style.visiblity = 'hidden'
    //hide arrow?
    fishCount -= 2
    counter.innerHTML += fishCount
    fishCount += 1
    counter.innerHTML += fishCount
    results.innerHTML = "You didn't find any fish :("
    toNextBranch();
    
 }
}
let door2open = false
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
            toNextBranch();
            //link back to start
        }
    }
   
    //change door photo, maybe add numbers to the front of them?
}
let word = ''
let answer = []
function hangman(){
    let wordbank = ['hungry', 'sabrina','yolanda','fiala','maddie','autumn','kitty'];
   word = wordbank[Math.floor(Math.random() * wordbank.length)];
   
    
    hangmantext.innerHTML = "Your word has " + word.length + " letters"
    input.style.visibility = 'visible'
    submitbutton.style.visibility = 'visible'
    door.src = 'hangman photos/0.png'

     
    for (let i=0;i<word.length;i++){
       answer.push('')
    }
    hangmandisplay.innerText = answer;


}



let count =0
function submit (){
    let letterguess = input.value;
      if (word.indexOf(letterguess) === -1){
        if (count<7){
         door.src = 'hangman photos/'+(count+1)+'.png';
            count +=1;
        }
        else{
                   hangmantext.innerHTML ="Oh no! You lost the hangman game. This door is now barred to you."
                            toNextBranch();
                            input.style.visibility = 'hidden'
                            submitbutton.style.visibility = 'hidden'
                                                       hangmandisplay.style.visibility = 'hidden'
        
         }
        } 
    else{
              for(let i=0;i<word.length;i++){
        if(word[i]===letterguess){
          answer[i] = letterguess
          hangmandisplay.innerText = answer;
          //something exempt repeats
        }
      }
    }
    if(answer.join('') === word){   
        hangmantext.innerHTML = 'Hooray! You guessed the secret word! You can now enter the door'
        //somehow allow door to now be opened
        door.src = "https://aarsunwoods.com/wp-content/uploads/2021/10/Entrance-Door-with-Helm-and-Kalash-128-jpg.webp"
        door2open = true
    }
    
}

//updates link to fishCount and makes link visible
function toNextBranch(){
    link.href = ("branch2.html?fishCount=" + fishCount);
    link.style.visibility = "visible"; 
}