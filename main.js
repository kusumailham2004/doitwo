$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    })
});

var btn = $("#mainNav");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

// button
var button = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    button.addClass("show");
  } else {
    button.removeClass("show");
  }
});

var gift = $("#gift");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    gift.addClass("show");
  } else {
    gift.removeClass("show");
  }
});

var button2 = $("#button2");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    button2.addClass("show");
  } else {
    button2.removeClass("show");
  }
});

// scroll
const makeNavLinksSmooth = ( ) => {
  const navLinks = document.querySelectorAll( 'nav ul li a' );

  for ( let n in navLinks ) {
    if ( navLinks.hasOwnProperty( n ) ) {
      navLinks[ n ].addEventListener( 'click', e => {
        e.preventDefault( );
        document.querySelector( navLinks[ n ].hash )
          .scrollIntoView( {
            behavior: "smooth"
          } );
      } );
    }
  }
}

const spyScrolling = ( ) => {
  const sections = document.querySelectorAll( '.page-scroll' );

  window.onscroll = ( ) => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for ( let s in sections )
      if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
        const id = sections[ s ].id;
        document.querySelector( '.active' ).classList.remove( 'active' );
        document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
      }
  }  
}

makeNavLinksSmooth( );
spyScrolling( );



// const links = document.querySelectorAll("ul li a");

// for (const link of links) {
//   link.addEventListener("click", clickHandler);

//   function clickHandler(e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     const offsetTop = document.querySelector(href).offsetTop;
    
    
//     scroll({
//       top: offsetTop,
//       behavior: "smooth",
//     });
//   }
// }

// Cover

// const openModalBtn = document.querySelectorAll(".open1");
const closeCover = document.querySelector(".close-cover");
const cover = document.querySelector(".cover1");
const coverContainer = document.querySelector(".cover-container");

closeCover.addEventListener("click", () => {
  setTimeout(() => {
    cover.classList.add("hide");
  }, 800);
  coverContainer.classList.add("hide");
});


// modal

const openModalBtn = document.querySelectorAll(".open");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

openModalBtn.forEach((openModal) => {
  openModal.addEventListener("click", () => {
    modal.classList.remove("hide");
    modalContainer.classList.remove("hide");
  });
});
closeModal.addEventListener("click", () => {
  setTimeout(() => {
    modal.classList.add("hide");
  }, 800);
  modalContainer.classList.add("hide");
});

const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");
const pertama = document.querySelector(".pertama");
const kedua = document.querySelector(".kedua");
const ketiga = document.querySelector(".ketiga");

pertama.addEventListener("click", function () {
  slide1.classList.remove("hidden");
  slide2.classList.add("hidden");
  slide3.classList.add("hidden");
  pertama.classList.add("active");
  kedua.classList.remove("active");
  ketiga.classList.remove("active");
});
kedua.addEventListener("click", function () {
  slide1.classList.add("hidden");
  slide2.classList.remove("hidden");
  slide3.classList.add("hidden");
  pertama.classList.remove("active");
  kedua.classList.add("active");
  ketiga.classList.remove("active");
});
ketiga.addEventListener("click", function () {
  slide1.classList.add("hidden");
  slide2.classList.add("hidden");
  slide3.classList.remove("hidden");
  pertama.classList.remove("active");
  kedua.classList.remove("active");
  ketiga.classList.add("active");
});

// const navHome = document.querySelector(".navHome");
// const navDetail = document.querySelector(".navDetail");
// const navAcara = document.querySelector(".navAcara");
// const navGalery = document.querySelector(".navGalery");
// const navUcapan = document.querySelector(".navUcapan");

// navHome.addEventListener("click", function () {
//   navHome.classList.add("active");
//   navDetail.classList.remove("active");
//   navAcara.classList.remove("active");
//   navGalery.classList.remove("active");
//   navUcapan.classList.remove("active");
// });
// navDetail.addEventListener("click", function () {
//   navHome.classList.remove("active");
//   navDetail.classList.add("active");
//   navAcara.classList.remove("active");
//   navGalery.classList.remove("active");
//   navUcapan.classList.remove("active");
// });


// const home = document.querySelector("#home");
// const detail = document.querySelector("#detail");
// const acara = document.querySelector("#acara");
// const galery = document.querySelector("#galery");
// const ucapan = document.querySelector("#ucapan");