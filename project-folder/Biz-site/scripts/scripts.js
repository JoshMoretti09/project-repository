	//After 5 seconds shows modal
 		setTimeout(function (){
 			$(".popinModal").fadeIn()
 	}, 5000);

 		$(".exit").click(function (){
 	 	$(".popinModal").fadeOut();
 	 });
 	$('.navbar-wrapper').sticky({
 		topSpacing:0,
  		getWidthFrom: '.navbar-wrapper',
  		responsiveWidth: true,
	});
 	$(".animsition").animsition({
	  inClass: 'fade-in-up-lg',
	  linkElement: 'header a',
	  inDuration: 1000,
	  outDuration: 1000
	});
	$(".fooditem").mouseenter(function (){
	$(this).css({
		"font-weight": "bold",
		"text-transform": "uppercase"
		})
	$(this).mouseleave(function(){
	$(this).css({
			"font-weight": "normal",
			"text-transform": "none"
			});	
		});
	});
