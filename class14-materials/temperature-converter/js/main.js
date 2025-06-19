//Write your pseduo code first! 


// I need to get the temperature value from input
// convert the value
// show the result

function convertTempToCelcius () {
    const tempValue = prompt ('Enter temperature value');
    if (tempValue === '' || tempValue === null) {
       alert('You didn\'t enter any value')
    }else if (isNaN(tempValue) ) {
        alert('Please enter a numeric value')
    }else { 
        const conversion = (tempValue - 32) * (5/9)
        alert(`${conversion.toFixed(2)}\u00B0 C`)
    }
}


convertTempToCelcius();