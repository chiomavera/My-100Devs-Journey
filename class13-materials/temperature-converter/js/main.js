//Write your pseduo code first!

// Step 1:
/**
 * Get temperature value
 * input validations: check if temperature value is empty
 * convert value to celcius
 * display result
*/

function fahrenheitToCelcius() {
  const tempValueInFahrient = prompt(" Enter temperature value");  // get temperature value 

  if (tempValueInFahrient === "" || tempValueInFahrient === null) { // check if temperature value is empty
    alert(`you didn't enter any value`);
  } else  if ( isNaN(tempValueInFahrient)) { // check input entered is a numeric value
    alert('please enter a numeric value')
  } else{
    const celciusConversion = (tempValueInFahrient - 32) * (5 / 9); // convert temperature value to celcius
    alert(`${celciusConversion.toFixed(2)}\u00B0 C`); // Display result to 2 decimal places
  }
}

fahrenheitToCelcius();

// Step 2:

/**
 * Create another calculator that converts from celcius to fahrenheit.
 */

function celciusToFahrenhient () {
   const tempValueInCelcius = prompt(" Enter temperature value");  // get temperature value 

  if (tempValueInCelcius === "" || tempValueInCelcius === null) { // check if temperature value is empty
    alert(`you didn't enter any value`);
  } else  if ( isNaN(tempValueInCelcius)) { // check input entered is a numeric value
    alert('please enter a numeric value')
  } else{
    const fahrenheitConversion = (tempValueInCelcius * 9/5) + 32; // convert temperature value to celcius
    alert(`${fahrenheitConversion.toFixed(2)}\u00B0 F`); // Display result to 2 decimal places
  }
}

//celciusToFahrient()

// Step 3:
//  Modify the code to accept temperature values through an input field.

//step 4
//see if you csn build a ui such that one could switch between the calculators