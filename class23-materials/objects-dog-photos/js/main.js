//Get a dog photo from the dog.ceo api and place the photo in the DOM

//Displaying a single Dog Photo
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())  //parse response as JSON
//     .then(data => {
//         console.log(data.message)
//         document.querySelector("img").src = data.message
//     })
//     .catch(err => {
//             console.log(`error ${err}`)
//     })

// Dispaly 3 random photos at once
// fetch("https://dog.ceo/api/breeds/image/random/3")
//     .then(res => res.json())  //parse response as JSON
//     .then(data => {
//         console.log(data.message) //An array of 3 URLs
       
//         const imgElements = document.querySelectorAll("img");

//         imgElements.forEach((img, index) => {
//             img.src = data.message[index];
//         }); 
//     })
//     .catch(err => {
//             console.log(`error ${err}`)
//     })

// Creating the images dynamically instead of hardcoding them
fetch("https://dog.ceo/api/breeds/image/random/15")
    .then(res => res.json())  //parse response as JSON
    .then(data => {
        console.log(data.message)
        
        const container =  document.querySelector(".dog-container");

        // clear any previous images
        container.innerHTML = "";

        data.message.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "A random dog";
            container.appendChild(img);
        })

    })
    .catch(err => {
            console.log(`error ${err}`)
    })
