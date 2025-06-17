// function yellName () {
//   const synth = window.speechSynthesis
//   const name = new SpeechSynthesisUtterance('Vera')
//   synth.speak(name)
// }

const synth = window.speechSynthesis;

document.querySelector("#yell").addEventListener("click", run);

function run() {
  const firstName = document.querySelector("#firstName").value;
  console.log(firstName);
  const middleName = document.querySelector("#middleName ").value;
  const lastName = document.querySelector("#lastName").value;
  const yellText = `${firstName} ${middleName} ${lastName}`;

  document.querySelector("#placeToYell").innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);

  assignTodo();
}

function assignTodo() {
  const todo = document.querySelector("#todo")
  todo.classList.remove("hidden")

  const task1 = "<i>Prayed?</i>";
  const task2 = "<i>Read your Bible?</i>";
  const task3 = "<i>Have you eaten?</i>";
  document.querySelector('#task1').innerHTML  = task1;
  document.querySelector('#task2').innerHTML = task2;
  document.querySelector('#task3').innerHTML = task3;
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

//   document.querySelector('#placeToYell').innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText);

//   synth.speak(yellThis);
// }



