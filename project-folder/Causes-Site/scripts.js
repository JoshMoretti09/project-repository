$(".animsition").animsition({
  inClass: 'fade-in-left-lg',
  outClass: 'rotate-out-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

// $(".animsition2").animsition({
//   outClass: 'rotate-out-lg',
//   linkElement: 'header a',
//   inDuration: 1000,
//   outDuration: 500
// });

$('.header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

$(".dogtext").hide()

$(".dog").mouseover(function(){
	$(".dog").animate({
		"height": "300px",
		"width": "300px"
	},2000)

	$(".dogtext").show(2000)
});




