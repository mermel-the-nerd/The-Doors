//eveyerhting in here is in the function!
let answer = "ding-dong"
let userguess = document.getElementById("input");
let lose = "Incorrect."
let winlose = document.getElementById("winlose")
if (userguess === answer){
  winlose.innerText = win
  
}
else {
  winlose.innerText = lose    
}