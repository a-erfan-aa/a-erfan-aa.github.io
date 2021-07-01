---
---
function filterTable() {
	//vars
	var checkedCount = 0;
	var filterMatchCount = 0;
	var table = document.getElementById("theTable");
	var tr = table.getElementsByTagName("tr");
	var i;
	//filter checkbox vars
	{% for item in site.data.thingsILike-filters %}
	var {{ item.name }}Check = document.getElementById("{{ item.name }}");
	{% endfor %}
	//track how many boxes are ticked
	{% for item in site.data.thingsILike-filters %}
	if ({{ item.name }}.checked == true) { checkedCount++; }
	{% endfor %}
	
	//the filtering
	//note to self: i starts at 1 because tr[0] is the column headers and those are always shown
	if (checkedCount == 0) {
		//If no checkboxes are ticked, show all
		for (i = 1; i < tr.length; i++) {
			tr[i].style.display = "";
		}
	} else {
		//else, check if a <tr> has number of filters matching number of checked. if yes, show. if not, hide. then do it all again til last <tr>.
		for (i = 1; i < tr.length; i++) {
			filterMatchCount = 0;
			{% for item in site.data.thingsILike-filters %}
			if ({{ item.name }}.checked == true) {
				if (tr[i].className.indexOf('{{ item.name }}') > -1) { filterMatchCount++; }
			}
			{% endfor %}
			if (checkedCount == filterMatchCount) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}