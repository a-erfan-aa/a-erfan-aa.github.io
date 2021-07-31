//highly ripped from w3school's tutorial on stuff

function toggleTambFaceDisp() {
	var tambFaceToggle = document.getElementById("tambFaceToggle");
	var tambFace = document.getElementById("tambFace");
	if (tambFaceToggle.innerHTML === "show") {
		tambFaceToggle.innerHTML = "hide";
		tambFace.style.display = "";
	} else {
		tambFaceToggle.innerHTML = "show";
		tambFace.style.display = "none";
	}
}
