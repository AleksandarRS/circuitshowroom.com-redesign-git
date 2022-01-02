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
    nextArrow: "<span class='slick-next-nsn slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></span>",
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });