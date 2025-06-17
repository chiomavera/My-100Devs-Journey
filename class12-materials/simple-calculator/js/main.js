let total = 0;

document.querySelector("#makeZero").onclick = makeZero;
document.querySelector("#addThree").onclick = addThree;
document.querySelector("#addNine").onclick = addNine;
document.querySelector("#subtractTwo").onclick = subtractTwo;

function makeZero () {
  document.querySelector('#placeToPutResult').innerText = total; 
}

function addThree () {
  total += 3;
  document.querySelector('#placeToPutResult').innerText = total; 
}

function addNine () {
  total += 9;
  document.querySelector('#placeToPutResult').innerText = total; 
}

function subtractTwo () {
  total -= 2;
  document.querySelector('#placeToPutResult').innerText = total; 
}

