var main = function() {
  $('.glyphicon').click(function(){
	$(this).toggleClass('glyphicon-plus').toggleClass('glyphicon-minus');
	$(this).toggleClass('.app-color')	
    $(this).next().toggle();
  });

};


$(document).ready(main);
