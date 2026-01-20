//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const date = document.querySelector("input").value;
  console.log(date);
  const url = `https://api.nasa.gov/planetary/apod?api_key=6V3PkXOznTPKj9C8GwC68qcG6bYgeql3bthExlQf&date=${date}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      document.querySelector("h2").innerText = data.title;

      if (data.media_type === "image") {
         document.querySelector("img").src = data.hdurl;
      }else if (data.media_type === "video") {
         document.querySelector("iframe").src = data.url;
      }
     

      document.querySelector("p").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
