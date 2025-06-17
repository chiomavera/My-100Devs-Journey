//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)


document.querySelector('#check').addEventListener('click', check)

function check() {
  
  const day = document.querySelector('#day').value.toLowerCase()
  const declaration = document.querySelector("#declaration");

  if(day === "tuesday" || day === "thursday"){
   return declaration.innerText = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
   return declaration.innerText = "IT'S A WEEKEND"
  }else if (day === "wednesday") {
   return declaration.innerText = "HUMPDAY"
  }else{
   return declaration.innerText = "BORING"
  }

}


