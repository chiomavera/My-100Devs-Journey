const claire = document.querySelector("#andi")
const andi = document.querySelector("#claire")
const sharleen = document.querySelector("#sharleen")

document.querySelector("#claireNext").addEventListener("click", claireNext)
document.querySelector("#andiNext").addEventListener("click", andiNext)
document.querySelector("#sharleenNext").addEventListener("click", sharleenNext)


function claireNext () {
	console.log("claire")
	andi.classList.add("hidden")
	sharleen.classList.add("hidden")
	claire.classList.toggle("hidden")
}

function andiNext () {
	console.log("andi")
	claire.classList.add("hidden")
	sharleen.classList.add("hidden")
	andi.classList.toggle("hidden")
}

function sharleenNext () {
	console.log("sharleen")
	andi.classList.add("hidden")
	claire.classList.add("hidden")
	sharleen.classList.toggle("hidden")
}