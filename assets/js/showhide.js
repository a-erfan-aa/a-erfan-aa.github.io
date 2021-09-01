/*
Highly ripped and adapted from w3school's tutorial on stuff, https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
reworked to be resued in multiple places to hide/show different elements

toggleID  is the id of the element that controls the hide/show
toggledID is the id of the element that is shown/hidden when the controller is triggered
*/

function showhide(toggleID, toggledID, showText, hideText) {
	var toggle = document.getElementById(toggleID);
	var toggled = document.getElementById(toggledID);
	if (toggle.innerHTML === hideText) {
		toggle.innerHTML = showText;
		toggled.style.display = "none";
	} else {
		toggle.innerHTML = hideText;
		toggled.style.display = "block";
	}
}