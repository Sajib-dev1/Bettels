$(function(){
  // -----hambarger menu start--------------
  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"});
  }
  $("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });
  // -----hambarger menu end--------------
//   =======our potfolio=======
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
//   =======our potfolio=======
// ========back to top===========
$('.back-to-top') .on('click', function(){
  $('html,body') .animate({scrollTop:0},1000)
});

$(window) .on('scroll',function(){
  var scroll= $(this).scrollTop()
  if(scroll > 50){
    $('.back-to-top').fadeIn(500)
  }
  else{
    $('.back-to-top').fadeOut(500)
  }
  if(scroll>50){
    $('.navbar').addClass('sticke-menu')
  }
  else{
    $('.navbar').removeClass('sticke-menu')
  }
});
// ========back to top===========
// ========active nav===========
$('#nav').onePageNav({
	currentClass: 'curent',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});
// ========active nav===========
// ========side bar start===========
$('.show').on('click',function(){
  $('.side-bar').css('left','0px')
})
$('.close').on('click',function(){
  $('.side-bar').css('left','-100%')
})
$('.nav-link').on('click',function(){
  $('.side-bar').css('left','-100%')
})
// ========side bar end=============
});