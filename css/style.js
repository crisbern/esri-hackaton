function pagestyle(){
	$('#header').css({
	   		 "height": $(window).height() * 0.05 
	   	});
	
	//if landscape mode
	if(window.innerHeight > window.innerWidth){
	   	$('#map').css({
	   		 "width": $(window).width(), 
	   		 "height": $(window).height() * 0.55, 
	   		 "top": $(window).height() * 0.05
	   	});
	   		
	   	$('#images').css({
	   		 "width": $(window).width(), 
	   		 "height": $(window).height() * 0.45, 
	   		 "margin-top": $(window).height() * 0.05
	   	});
	   		
	}else{
		$('#map').css({
	   		 "height": $(window).height() * 0.95, 
	   		 "top": $(window).height() * 0.05 
	   	});
	   		
	   	$('#images').css({
	   		 "height": $(window).height() * 0.95, 
	   		 "margin-top": $(window).height() * 0.05 
	   	});
	   	
	}
}

$( document ).ready(pagestyle());
$( window ).on( "orientationchange", pagestyle());
