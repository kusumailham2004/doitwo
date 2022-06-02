// Cover
const closeCover = document.querySelector(".close-cover");
const cover = document.querySelector(".cover1");
const coverContainer = document.querySelector(".cover-container");

closeCover.addEventListener("click", () => {
  setTimeout(() => {
    cover.classList.add("hide");
  }, 800);
  coverContainer.classList.add("hide");
});



$(".play-video").click(function () {
  $(".youtube-video")[0].contentWindow.postMessage('{"event":"command","func":"' + "playVideo" + '","args":""}', "*");
});

$(".stop-video").click(function () {
  $(".youtube-video")[0].contentWindow.postMessage('{"event":"command","func":"' + "stopVideo" + '","args":""}', "*");
});

$(".pause-video").click(function () {
  $(".youtube-video")[0].contentWindow.postMessage('{"event":"command","func":"' + "pauseVideo" + '","args":""}', "*");
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