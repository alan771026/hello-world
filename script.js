$( document ).ready(function() {
	$( "#button2" ).click(function() {
		$(".pageOne,.pageThree").addClass("hide");
	    $(".pageTwo").removeClass("hide");
	});
	$( "#button3" ).click(function() {
		$(".pageOne,.pageTwo").addClass("hide");
	    $(".pageThree").removeClass("hide");
	});
	$( "#button1" ).click(function() {
		$(".pageThree,.pageTwo").addClass("hide");
	    $(".pageOne").removeClass("hide");
	});


    console.log( "ready!" );
});
