// set up such that when any of the names are clicked, their images show up and if there any image on display, clear it.

const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add("hidden")
	sharleen.classList.add("hidden") // adds the hidden class
	andi.classList.toggle("hidden")
}

function claireNext(){
	andi.classList.add("hidden")
	sharleen.classList.add("hidden")
	claire.classList.toggle("hidden") // toggle is like a light switch, if the class exist, it removes it, if it doesn't, it adds it.
}

function sharleenNext(){
	andi.classList.add("hidden")
	claire.classList.add("hidden")
	sharleen.classList.toggle("hidden")
}
