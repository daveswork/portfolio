var main = function() {
  $('.glyphicon').click(function(){
    event.preventDefault();
	  $(this).toggleClass('glyphicon-plus').toggleClass('glyphicon-minus');
    $(this).next('.content').toggleClass('hide');
    console.log($(this).next('.content'))
  });

};


$(document).ready(main);
