//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function savage21 () {
    for (i = 1; i < 22; i++) {
        //console.log("21")
        document.querySelector('#savageSays').innerHTML += `Savage says ${i} is 21 <br>`
    }
}

//savage21()

// Adapting savage21 further;
function savage21 () {
    const savagePlaceholder = document.querySelector('#savageSays');
    savagePlaceholder.innerHTML = ''; // clears the DOM each time function is called, to avoid duplicates of 21's

    for (let i = 1; i < 22; i++) {
        const line = document.createElement('h1'); // creates a heading tag (<h1>) to hold each iteration

        line.innerText = `${i}: 21`; // sets text content to '21'
        savagePlaceholder.appendChild(line); // Add the new <p> to the placeholder
    }
}

savage21()