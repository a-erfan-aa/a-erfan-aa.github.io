// highly ripped from w3school's tutorial on stuff, https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

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
