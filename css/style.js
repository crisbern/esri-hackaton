

$('#header').height(function(){
   return $(window).height() * 0.05;
});

//if landscape mode
if(window.innerHeight > window.innerWidth){
   	$('#map').width(function(){
	   return $(window).width();
	});
	$('#images').width(function(){
	   return $(window).width();
	});
	$('#map').height(function(){
	   return $(window).height() * 0.55;
	});
	$('#images').height(function(){
	   return $(window).height() * 0.45;
	});
}else{
	$('#map').height(function(){
	   return $(window).height() * 0.95;
	});
	$('#images').height(function(){
	   return $(window).height() * 0.95;
	});
}
