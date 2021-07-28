//highly ripped from w3school's tutorial on stuff

function toggleTambFaceDisp() {
	var tambFaceToggle = document.getElementById("tambFaceToggle");
	var tambFace = document.getElementById("tambFace");
	if (tambFaceToggle.innerHTML === "Tambourine face album hehaheehee (show)") {
		tambFaceToggle.innerHTML = "Tambourine face album hehaheehee (hide)";
		tambFace.style.display = "";
	} else {
		tambFaceToggle.innerHTML = "Tambourine face album hehaheehee (show)";
		tambFace.style.display = "none";
	}
}