window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__burger'),
  menuItem = document.querySelectorAll('.header__item__burger'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__burger_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header__burger');
      })
  })
});





// $(document).ready(function(){
 
//   });

$('.education__content').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // Infinity: false,
    // respondTo: window,
    // prevArrow: '<button type="button" class="slick-prev"> <img src="../icons/arrowLeft.svg"></img> </button>',
    // nextArrow:'<button type="button" class="slick-next"> <img src="../icons/arrowRight.svg"></img> </button>',
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          centerPadding: '40px',

        }
      },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            centerPadding: '40px',

          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            centerPadding: '40px',

          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerPadding: '40px',
            // arrows: false,
            // dots: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            centerPadding: '60px',
            // arrows: false,
            // dots: true,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerPadding: '60px',
              // arrows: false,
              // dots: true,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerPadding: '60px',
              // arrows: false,
              // dots: true,

            }
          },
          // {
          //   breakpoint: 500,
          //   settings: {
          //     slidesToShow: 1,
          //     centerPadding: '60px',
          //     arrows: false,
          //     dots: true,

          //   }
          // }
      ]
});


  $(document).ready(function(){
    $(window).bind("resize", resizeWindow);
    function resizeWindow(e){
      let newWindowWidth = $(window).width();
    }
    });

  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.education__item__side').eq(i).toggleClass('education__item__side_hide');
            $('.education__item__inform').eq(i).toggleClass('education__item__inform_active');
        })
    });
};

toggleSlide('.read__more');
toggleSlide('.read__more__back');

//tabs - work experience 

$('ul.position').on('click', 'li:not(.position__content_active)', function() {
    $(this)
      .addClass('position__content_active').siblings().removeClass('position__content_active')
      .closest('div.container').find('div.activity__content').removeClass('activity__content_active').eq($(this).index()).addClass('activity__content_active');
   });


   //tabs - technical skills


  //  $( "#arrow1" ).toggle(
  //   function() {
  //     $( this ).addClass( "arrow_active" );
  //   }, function() {
  //     $( this ).removeClass( "arrow_active" );
  //   }
  // );

  // $( "#arrow1" ).on( 'click', 
  //   function() {
  //     $(skill__content).addClass( "skill__content_active" );
  //   }, function() {
  //     $( this ).removeClass( "skill__content_active" );
  //   }
  // );

  // $( "#arrow2" ).toggle(
  //   function() {
  //     $( this ).addClass( "arrow_active" );
  //   }, function() {
  //     $( this ).removeClass( "arrow_active" );
  //   }
  // );


  // window.addEventListener('DOMContentLoaded', () => {
  //   const menu = document.querySelector('.header__burger'),
  //   menuItem = document.querySelectorAll('.header__item__burger'),
  //   hamburger = document.querySelector('.hamburger');
  
  //   hamburger.addEventListener('click', () => {
  //       hamburger.classList.toggle('hamburger_active');
  //       menu.classList.toggle('header__burger_active');
  //   });
  
  //   menuItem.forEach(item => {
  //       item.addEventListener('click', () => {
  //           hamburger.classList.toggle('hamburger_active');
  //           menu.classList.toggle('header__burger');
  //       })
  //   })
  // });


  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.skill'),
    contentItem = document.querySelectorAll('.skill__content'),
    arrow = document.querySelector('.arrow');
  
    arrow.addEventListener('click', () => {
      arrow.classList.toggle('arrow_active');
        menu.classList.toggle('skill_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            arrow.classList.toggle('arrow');
            menu.classList.toggle('skill');
        })
    })
  });


  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.skill__fE'),
    contentItem = document.querySelectorAll('.skill__content__fE'),
    arrow = document.querySelector('.arrow__fE');
  
    arrow.addEventListener('click', () => {
      arrow.classList.toggle('arrow__fE_active');
        menu.classList.toggle('skill__fE_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            arrow.classList.toggle('arrow__fE');
            menu.classList.toggle('skill__fE');
        })
    })
  });

  



// function toggleSlide(item) {
//     $(item).each(function(i) {
//         $(this).on('click', function(e) {
//             e.preventDefault();
//             $('.arrow').eq(i).toggleClass('arrow_active');
//             $('.skill__content').eq(i).toggleClass('skill__content_active');
//             $('.arrow_active').eq(i).toggleClass('arrow');
//             $('.skill__content_active').eq(i).toggleClass('skill__content');

//         })
//     });
// };


//    toggleSlide('.arrow');
//    toggleSlide('.arrow_active');


   //tabs - portfolio
    
   $('ul.portfolio__list').on('click', 'li:not(.portfolio__list__content_active)', function() {
    $(this)
      .addClass('portfolio__list__content_active').siblings().removeClass('portfolio__list__content_active')
      .closest('div.container').find('div.portfolio__project-description__content').removeClass('portfolio__project-description__content_active').eq($(this).index()).addClass('portfolio__project-description__content_active');
   });


   $('ul.portfolio__list').on('click', 'li:not(.portfolio__list__content_active)', function() {
    $(this)
      .addClass('portfolio__list__content_active').siblings().removeClass('portfolio__list__content_active')
      .closest('div.container').find('div.portfolio__preview__cover').removeClass('portfolio__preview__cover_active').eq($(this).index()).addClass('portfolio__preview__cover_active');
   });




   $(window).scroll(function () {
    if ($(this).scrollTop() > 4000) {
      $('.circular-progress-bar').fadeIn();
    } else {
      $('.circular-progress-bar').fadeOut();
    }
  });


  // scroll pageup

$(window).scroll(function () {
  if ($(this).scrollTop() > 1500) {
    $('.pageUp').fadeIn();
  } else {
    $('.pageUp').fadeOut();
  }
});

$("a[href=#up]").click(function() {
  const _href = $(this).attr('href');
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

new WOW().init();


//modals

$('.contact').on ('click', function () {
  $('.overlay, #contact').fadeIn('medium');
});
$('.close').on('click', function () {
  $('.overlay, #contact').fadeOut();
});

//art
$('.art').on ('click', function () {
  event.preventDefault()
  $('.inspiration__overlay__art, #art').fadeIn('medium');
});
$('.close').on('click', function () {
  $('.inspiration__overlay__art, #art').fadeOut();
});

//web
$('.web').on ('click', function () {
  event.preventDefault()
  $('.inspiration__overlay__web, #web').fadeIn('medium');
});
$('.close').on('click', function () {
  $('.inspiration__overlay__web, #web').fadeOut();
});

//books
$('.books').on ('click', function () {
  event.preventDefault()
  $('.inspiration__overlay__books, #books').fadeIn('medium');
});
$('.close').on('click', function () {
  $('.inspiration__overlay__books, #books').fadeOut();
});

//music
$('.music').on ('click', function () {
  event.preventDefault()
  $('.inspiration__overlay__music, #music').fadeIn('medium');
});
$('.close').on('click', function () {
  $('.inspiration__overlay__music, #music').fadeOut();
});
  


// function keepInTouch (feedback) {
//   let result;
//   if (feedback > good) {
//     result = 'offer me job';
//   } else {
//     result = 'send me email how to improve my skills';
//   }
//   return result;
// }


// const animateOserver = new IntersectionObserver(
//   (entries, observer) => {
//     concole.log(entries);
//   },
//   {}
// );


// document.querySelector('scroll-div').forEach(scroll-div => imageObserve.observe(scroll-div))

// let width = $('body').innerWidth()
// if (width < 900) {
//   $('.portfolio__wraper__mobile').removeClass('portfolio__wraper__mobile').addClass('portfolio__wraper__mobile_active');
// }

// $(window).resize(function () { 
//   let width = $('body').innerWidth()
//   if (width < 900) {
//   $('.portfolio__wraper__mobile').removeClass('portfolio__wraper__mobile').addClass('portfolio__wraper__mobile_active');
// } });


// if( window.innerWidth <= 900 ){
  
//   $('.portfolio__wraper__mobile').removeClass('portfolio__wraper__mobile').addClass('portfolio__wraper__mobile_active');
// } else {
//   //не выполнять
// } ;

// if( window.innerWidth >= 900 ){
//   $('.portfolio__wraper').removeClass('portfolio__wraper_active').addClass('portfolio__wraper');
  
// } else {
//   //не выполнять
// } ;
