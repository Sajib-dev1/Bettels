$(function(){
    $('.main_banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        nextArrow:".banner_angle_left",
        prevArrow:".banner_angle_right",
      });
    $('.service-wrepper').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        vertical:true,
        nextArrow:".up-angle",
        prevArrow:".bottom-angle",
        centerMode: true,
        centerPadding: '40px',
        pauseOnHover:false,
      });
})