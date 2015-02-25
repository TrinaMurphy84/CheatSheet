$(document).ready(function() {
	alert("ready")
});

$('#item1_button').click(function(e){
	alert("item1 button clicked.")

});

$('#item2_button').hover(function(e){
	alert("item2 button hovered over.");

});

$('#item3_button').css( {
	color: "blue",
	size: "25px",
});

$('#item4_button').click(function(e) {
	$("#item4 p").hide()

});

$('item5_button').click(function(e){
	$("#item5 p").toggle();

});

$('#item6_button').click(function(e){
	$("#item6 p").text( $("#item6 p").text() + "Sweet... Words, Man");

});

$('#item7_button').click(function(e) {
	$("#item7 img").attr({
		src:"imgs/newlogo.jpg"
	
});

});






