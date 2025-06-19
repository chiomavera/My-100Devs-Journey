// Hide claire and Sharleen whien final rose is clicked



document.querySelector('#finalRose').addEventListener('click', hide)

function hide(){
	document.querySelector("#claire").style.display = 'none'
	document.querySelector("#sharleen").style.display = 'none'
}

