---
---
//ripped and adapted from https://www.w3schools.com/howto/howto_js_countdown.asp
{% for item in site.data.countdowns %}
var countDownDate{{ item.name }} = new Date("{{ item.date }}").getTime();{% endfor %}

// Update the count downs every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and count down dates {% for item in site.data.countdowns %}
	var distance{{ item.name }} = countDownDate{{ item.name }} - now;{% endfor %}

	// Time calculations for days, hours, minutes and seconds {% for item in site.data.countdowns %}
	var days{{ item.name }} = Math.floor(distance{{ item.name }} / (1000 * 60 * 60 * 24));
	var hours{{ item.name }} = Math.floor((distance{{ item.name }} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes{{ item.name }} = Math.floor((distance{{ item.name }} % (1000 * 60 * 60)) / (1000 * 60));
	var seconds{{ item.name }} = Math.floor((distance{{ item.name }} % (1000 * 60)) / 1000);{% endfor %}

	// Display the result in the element with whatever id {% for item in site.data.countdowns %}
	document.getElementById("{{ item.id }}").innerHTML = "in " + days{{ item.name }} + " days, " + hours{{ item.name }} + " hours, " + minutes{{ item.name }} + " minutes and " + seconds{{ item.name }} + " seconds";{% endfor %}

	// If a count down is finished, write some text {% for item in site.data.countdowns %}
	if (distance{{ item.name}} < 0) { document.getElementById("{{ item.id }}").innerHTML = "any moment now!"; }{% endfor %}
}, 1000);
