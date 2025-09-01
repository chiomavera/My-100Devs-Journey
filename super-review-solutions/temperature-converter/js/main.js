//Write your pseduo code first! 

// i need the value
// convert value from C to F
// Display result

document.querySelector('h1').addEventListener('click', convert)

function convert(){
    //need the value
    let enteredVal = Number(document.querySelector('input').value)
    //convert value c to f
    let temp = enteredVal * 1.8 + 32
    //show value to the user
    document.querySelector('h2').innerText = temp
}
