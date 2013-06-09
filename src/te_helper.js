document.addEventListener('DOMContentLoaded', function() {
	if (!document.querySelectorAll('input#sub').length) return;
	document.querySelectorAll('input#sub')[1].addEventListener('click', clickHandler);
	console.log("----");
});

function clickHandler(event) {
	var currentHours = document.getElementById('time_records_total_hours').innerHTML;
	if (+currentHours < 40 && !confirm("Are you sure the total hours is less than 40?")) {
		event.preventDefault();
	}
}