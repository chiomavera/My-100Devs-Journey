// Pull data from https://deckofcardsapi.com/
// try to see if can always use only a specific deck. maybe storing in local storage.
let deckId = "";

fetch ("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1") 
  .then((res) => res.json()) // parse response as json
  .then((data) => {
    console.log(data)
    deckId = data.deck_id
  }).catch( (err) => console.log(`Error: ${err}`))

  document.querySelector('button').addEventListener("click", drawAnotherCard)

function drawAnotherCard () {
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)

    document.querySelector("#player1").src = data.cards[0].image 
      document.querySelector("#player1Suit").innerText = data.cards[0].suit

     document.querySelector("#player2").src = data.cards[1].image 
      document.querySelector("#player2Suit").innerText = data.cards[1].suit

     const player1Val = convertToNum(data.cards[0].value)
     const player2Val = convertToNum(data.cards[1].value)

     document.querySelector("#player1Val").innerText = `Value: ${player1Val}`
       document.querySelector("#player2Val").innerText = `Value: ${player2Val}`
    const result = document.querySelector("#result")

     if (player1Val > player2Val) {
      result.innerText = "Player 1 Wins"
     }else if (player1Val < player2Val) {
      result.innerText = "Player 2 Wins"
     }else{
      result.innerText = "Time for War"
     }
  })
}

function convertToNum (val) {
  if (val === "ACE") {
    return 14;
  } else if (val === "KING") {
    return 13;
  } else if (val === "QUEEN") {
    return 12;
  } else if (val === "JACK") {
    return 11;
  } else {
    return Number(val);
  }
}