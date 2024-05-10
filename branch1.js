function openDoor(){

}

function nextDoor(){

}
let info = document.getElementById("info");
const urlParams = new URLSearchParams(window.location.search);
  info.innerHTML = urlParams.get('fishCount');