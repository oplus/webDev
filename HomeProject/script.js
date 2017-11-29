$(document).ready(function(){
	$('#googleimg').mouseenter(function(){
		$('#googleimg').fadeTo('fast', 1);
	});
	$('#googleimg').mouseleave(function(){
		$('#googleimg').fadeTo('fast', 0.3);
	});
});