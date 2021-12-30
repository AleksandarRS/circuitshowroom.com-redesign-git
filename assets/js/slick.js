// $(document).ready(function(){
//     $('.testimonials-slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         infinite: false,
//         arrows: false
//     });
// });
$('.testimonials-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
      prevArrow: "<span class='slick-prev-nsn slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></span>",
      nextArrow: "<span class='slick-next-nsn slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"
  });

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    adaptiveHeight: true,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: "<span class='slick-prev-nsn slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></span>",
    nextArrow: "<span class='slick-next-nsn slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"
  });