//highly ripped from w3school's tutorial on stuff

function toggleFilterDisp() {
	var fToggle = document.getElementById("filterToggle");
	var fDisp = document.getElementById("filters");
	if (fToggle.innerHTML === "click/tap to hide filters") {
		fToggle.innerHTML = "click/tap to show filters";
		fDisp.style.display = "none";
	} else {
		fToggle.innerHTML = "click/tap to hide filters";
		fDisp.style.display = "block";
	}
}