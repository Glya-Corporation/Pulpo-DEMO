$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('.zona1').css({
			'background-position': '0 -' + posicion + 'px'
		});

	});
});
