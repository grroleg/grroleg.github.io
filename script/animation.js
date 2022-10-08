//slide menu
(function(){
    var quoteButton = $('.expand-button'),
    blockquote = $('blockquote');
    quoteButton.on('click', function(e) {
    e.preventDefault();
    blockquote.slideToggle(200, function(){
    });
    });
})();

(function(){
    var quoteButton = $('.gotobutons'),
    blockquote = $('blockquote');
    quoteButton.on('click', function(e) {
    e.preventDefault();
    blockquote.slideToggle(200, function(){
    });
    });
})();
//arrow
$(document).ready(function(){
  init();
});
function init(){
  $(window).scroll(function () {
    $(this).scrollTop() > 50 ? $('#scroll').fadeOut() : $('#scroll').fadeIn()
  });
}
//scroll to page menu
document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 20
        });
    });
});

//NAVIGATION FADEIN/OUT
var lastScroll = 0, hundert;
$(window).scroll(function(){
	var st = $(document).scrollTop();
	if (st > 250 && st > lastScroll){
		$('nav').addClass('hidden');
		hundert = st;
	}
	else if(st < (hundert - 33)){
		$('nav').removeClass('hidden');
	}
  lastScroll = st;
  });
