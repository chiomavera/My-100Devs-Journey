//Get a dog photo from the dog.ceo api and place the photo in the DOM

function getDog (){
    const url = "https://dog.ceo/api/breeds/image/random"

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.message)
        document.querySelector("img").src = data.message
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

