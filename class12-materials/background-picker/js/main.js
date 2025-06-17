document.querySelector("#purple").onclick = partyPurple;
document.querySelector("#green").onclick = partyGreen;
document.querySelector("#blue").onclick = partyBlue;
document.querySelector("#orange").onclick = partyOrange

function partyPurple () {
  document.querySelector("body").style.backgroundColor = 'purple'
}

function partyGreen () {
  document.querySelector('body').style.backgroundColor = 'green'
}

function partyBlue () {
  document.querySelector("body").style.backgroundColor = "blue"
}

function partyOrange () {
  document.querySelector('body').style.backgroundColor = 'orange'
}
