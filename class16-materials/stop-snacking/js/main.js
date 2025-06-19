//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking () {
   const numOfSnacks = Number(document.querySelector('input').value)

   let help = document.querySelector("#stops")
   help.innerHTML = ''

   for(let i = 1; i <= numOfSnacks; i++) {
      const line = document.createElement("p")
      line.innerText = "Stop Sncaking!"

      help.appendChild(line)
   }
}

stopSnacking()