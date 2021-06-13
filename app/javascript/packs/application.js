// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
$(document).on("turbolinks:load", function() {
//   console.log("working");
//   const pdp = document.getElementsByClassName("pdpress")[0];
//   const odp = document.getElementsByClassName("odpress")[0];
//   const hbody = document.getElementsByClassName("hbody")[0];
//   const pdbody = document.getElementsByClassName("pdbody")[0];
//   const odbody = document.getElementsByClassName("odbody")[0];
//   const odpress = document.getElementsByClassName("odpress")[0];
//   const pdpress = document.getElementsByClassName("pdpress")[0];
// const pic = document.getElementsByClassName("twoimg")[0];
// let x = 0;
// const stretch = document.getElementsByClassName("miliadstretch")[0];
// const left = document.getElementsByClassName("leftb")[0];
// const right = document.getElementsByClassName("rightb")[0];
// const wrap = document.getElementsByClassName("wrap")[0];
// const mwrap = document.getElementsByClassName("mwrap")[0];
// const nav = document.getElementsByClassName("nav")[0];
// const grnav = document.getElementsByClassName("grnav")[0];
// const whnav = document.getElementsByClassName("whnav")[0];
// let third = document.getElementsByClassName("three")[0]
// const menu = document.getElementsByClassName("mobilego")[0];
// const close = document.getElementsByClassName("mlclose")[0];
// let menubtn = document.getElementsByClassName("mobileicon")[0];
// const dining = document.getElementsByClassName("dining")[0];
// const seefull = document.getElementsByClassName("seefull")[0];
// const backimg = document.getElementsByClassName("backimg")[0];
// const abouttext = document.getElementsByClassName("abouttext")[0];
// const thefade = document.getElementsByClassName("thefade")[0];
// const readmore = document.getElementsByClassName("readsp")[0];
// const fbl = document.getElementsByClassName("firstbackleft")[0];
// const fbww = document.getElementsByClassName("firstbackrightw")[0];
// const frimage = document.getElementsByClassName("frimage")[0];
// const newthreeback = document.getElementsByClassName("newthreeback")[0];
// const videobtn = document.getElementsByClassName("videobtn")[0];
// const myvid = document.getElementById("myvid");
// const whitebtn = document.getElementsByClassName("whitebtn")[0];
// const emailbtn = document.getElementsByClassName("emailbtn")[0];

const hovone = document.getElementsByClassName("hovli")[0];
const hovtwo = document.getElementsByClassName("hovli")[1];
const hovthree = document.getElementsByClassName("hovli")[2];
const hovfour = document.getElementsByClassName("hovli")[3];
let lastScrollTop = 0;

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop && ($(window).scrollTop() <= ($(document).height() - $(window).height()) - 50)){
       $(".newnav").css("opacity", "0")

   } else if ((st < lastScrollTop) && ($(window).scrollTop() <= ($(document).height() - $(window).height()) - 50)){
      $(".newnav").css("opacity", "1")


   } else if ($(window).scrollTop() >= ($(document).height() - $(window).height()) - 50) {
     $(".newnav").css("opacity", "1");
   }
   lastScrollTop = st;
});


$(".wrap").click(function(){
  $(".scan").css("opacity", "0");
})

function scanShow() {
    if (window.scrollY <= 20) {
      // $(".scan").css("z-index", "30");
      $(".scan").css("opacity", "1");
    } else {
      $(".scan").css("opacity", "0");
      // setTimeout(function(){
      //
      // }, 1000)
    }

}
$(".lgr").click(function(){
  if ($(".moblogo").css("display") == "none") {
   $(".newcover").css("display", "block");
   $(".hideMen").css("display", "block");
   $(".showMen").css("display", "none");
   $(".newmobilenav li").css("color", "black");
   $(".moblogo").css("display", "block");
   $(".homelogo").css("display", "none");
   $(".nnnav").css("display", "none");
 } else {
   $(".newcover").css("display", "none");
   $(".hideMen").css("display", "none");
   $(".showMen").css("display", "block");
   $(".newmobilenav li").css("color", "white");
   $(".moblogo").css("display", "none");
   $(".homelogo").css("display", "block");
   $(".nnnav").css("display", "block");
 }
});

$(document.body).on('touchmove', scanShow);
$( window ).scroll( scanShow );
// $( wrap ).scroll( centCircle );



$(".hovli").hover(
  function() {
    if ($( this ).text() == "DISHES") {
      console.log("it")
      $(".nnback").addClass("backzero");
      $(".nnback").removeClass("backone");
      $(".nnback").removeClass("backtwo");
      $(".nnback").removeClass("backthree");
    } else if ($( this ).text() == "BIO") {
      $(".nnback").removeClass("backzero");
      $(".nnback").removeClass("backone");
      $(".nnback").addClass("backtwo");
      $(".nnback").removeClass("backthree");
    } else if ($( this ).text() == "PRIVATE DINING") {
      $(".nnback").removeClass("backzero");
      $(".nnback").addClass("backone");
      $(".nnback").removeClass("backtwo");
      $(".nnback").removeClass("backthree");
    } else if ($( this ).text() == "CATERING") {
      $(".nnback").removeClass("backzero");
      $(".nnback").removeClass("backone");
      $(".nnback").removeClass("backtwo");
      $(".nnback").addClass("backthree");
    }
  }, function() {
    $(".nnback").removeClass("backzero");
    $(".nnback").removeClass("backone");
    $(".nnback").removeClass("backtwo");
    $(".nnback").removeClass("backthree");
    }

);


//
//
//
// console.log(menubtn);
// // $( ".menubtn" ).click(function() {
// //   showMen();
// // });
//
// $(".seefull").click(function() {
//   if ($(".seefull").first().html() != "Show Less") {
// $(".seefull").html("Show Less");
// $(".nshow").css("display", "block");
// } else {
// $(".seefull").html("See Full Menu");
// $(".nshow").css("display", "none");
// }
// })
// function showMen() {
//   console.log("clicked");
// menu.style.left = "0";
// dark.style.opacity = ".4";
// dark.style.zIndex = "3";
// dark.addEventListener('click', hideMen, false);
// }
// function hideMen() {
// menu.style.left = "-100%";
// dark.style.opacity = "0";
//
// setTimeout(function() {
// dark.style.zIndex = "-1";
// }, 500);
//
// }
//
//
// function readMore() {
// if ($( readmore ).html() == "Read More") {
// $( abouttext ).css("height", "auto");
// $( abouttext ).css("overflow", "auto");
// $( thefade ).css("display", "none");
// $( readmore ).html("Read Less");
// } else {
// $( abouttext ).css("height", "200px");
// $( abouttext ).css("overflow", "hidden");
// $( thefade ).css("display", "block");
// $( readmore ).html("Read More");
//   }
// }
// if (videobtn != undefined) {
// videobtn.addEventListener('click', showVid);
// }
// if (close != undefined) {
// close.addEventListener('click', hideMen);
// }
// if (menubtn != undefined) {
// menubtn.addEventListener('click', showMen);
// }
//
// if (readmore != undefined) {
// readmore.addEventListener('click', readMore);
// }
//
//
//
//
// function showVid() {
//  $(".vidover").css("display", "block");
//  myvid.play();
//
//  $(".vidover").click(function() {
// $(this).css("display","none")
//
// });
// }
//
// window.addEventListener("scroll", firstbackAppear);
// window.addEventListener("scroll", firstbackwAppear);
// window.addEventListener("scroll", twobackAppear);
// window.addEventListener("scroll", picollageAppear);
// window.addEventListener("scroll", emailAppear);
// // wrap.addEventListener("scroll", firstbackAppearw);
//
//
// if (dining != undefined) {
//   setTimeout(function(){document.getElementsByClassName("onex")[0].classList.add('twoimg-appear');}, 200)
//   setTimeout(function(){document.getElementsByClassName("twox")[0].classList.add('twoimg-appear');}, 800)
//   setTimeout(function(){document.getElementsByClassName("threex")[0].classList.add('twoimg-appear');}, 1200)
//   setTimeout(function(){document.getElementsByClassName("fourx")[0].classList.add('twoimg-appear');}, 1600)
// }
//
//
// function firstbackAppear() {
//      let firstback = document.getElementsByClassName("firstback")[0];
//      if (firstback != undefined ) {
//      let firstbackPos = firstback.getBoundingClientRect().top + 300;
//      let screenPos = window.innerHeight;
//      console.log(screenPos);
//      if(firstbackPos < screenPos) {
//        console.log("reached");
//        // document.getElementsByClassName("pinkwrap")[0].classList.add('pinkwrap-appear');
//        // window.removeEventListener("scroll", firstbackAppear);
//
//        fbl.classList.add('first-appear');
//        frimage.classList.add('frimage-appear');
//      }
//      }
//    }
//
//
//
//
//
//    function firstbackwAppear() {
//         let ntback = document.getElementsByClassName("newthreeback")[0];
//         if (ntback != undefined ) {
//         let ntbackPos = ntback.getBoundingClientRect().top + 300;
//         let screenPos = window.innerHeight;
//         console.log(screenPos);
//         if(ntbackPos < screenPos) {
//           console.log("reached");
//           // document.getElementsByClassName("pinkwrap")[0].classList.add('pinkwrap-appear');
//           // window.removeEventListener("scroll", firstbackAppear);
//
//           fbww.classList.add('first-appear');
//
//         }
//         }
//       }
//




//
//
//    function twobackAppear() {
//      third = document.getElementsByClassName("three")[0]
//      if (third != undefined) {
//         let twoback = document.getElementsByClassName("twoback")[0];
//         let twobackPos = twoback.getBoundingClientRect().top + 300;
//         let screenPos = window.innerHeight;
//         console.log(screenPos);
//         if(twobackPos < screenPos) {
//           document.getElementsByClassName("three")[0].classList.add('twoimg-appear');
//           setTimeout(function(){document.getElementsByClassName("two")[0].classList.add('twoimg-appear');}, 300)
//           setTimeout(function(){document.getElementsByClassName("one")[0].classList.add('twoimg-appear');}, 800)
//           setTimeout(function(){document.getElementsByClassName("four")[0].classList.add('twoimg-appear');}, 1300)
//           window.removeEventListener("scroll", twobackAppear);
//         }
//       }
//       }
// setTimeout(function(){
// $(".eapps-instagram-feed a").css("display: none");
// }, 3000);
//
//       function picollageAppear() {
//            let picollage = document.getElementsByClassName("picollage")[0];
//            if (picollage != undefined ) {
//            let picollagePos = picollage.getBoundingClientRect().top + 300;
//            let screenPos = window.innerHeight;
//            console.log(screenPos);
//            if(picollagePos < screenPos) {
//              document.getElementsByClassName("pinkwrap")[1].classList.add('pinkwrap-appear');
//              window.removeEventListener("scroll", picollageAppear);
//            }
//            }
//          }
//
//          function emailAppear() {
//               let email = document.getElementsByClassName("emailsub")[0];
//               if (email != undefined ) {
//               let emailPos = email.getBoundingClientRect().top + 250;
//               let screenPos = window.innerHeight;
//               console.log(screenPos);
//               if(emailPos < screenPos) {
//                 document.getElementsByClassName("emailhead")[0].classList.add('pinkwrap-appear');
//
//                 if (whitebtn != undefined) {
//                 setTimeout(function(){whitebtn.classList.add('pinkwrap-appear');}, 300)
//               } if (emailbtn != undefined) {
//                setTimeout(function(){emailbtn.classList.add('pinkwrap-appear');}, 300)
//               }
//             window.removeEventListener("scroll", picollageAppear);
//
//
//               }
//               }
//             }
//    // function firstbackAppearw() {
//    //      let firstback = document.getElementsByClassName("firstback")[0];
//    //      let firstbackPos = firstback.getBoundingClientRect().top;
//    //      let screenPos = window.innerHeight;
//    //      console.log(screenPos);
//    //      if(firstbackPos < screenPos) {
//    //
//    //        firstback.classList.add('firstback-appear');
//    //        wrap.removeEventListener("scroll", firstbackAppearw);
//    //      }
//    //    }
//
//
//
// $(".twoimg").hover(function() {
//   $( this ).find(".imginfo").css("top", "0");
//   $( this ).find(".simginfo").css("top", "0");
//   $( this ).find(".imgbar").css("opacity", "0");
// }, function() {
//  $( this ).find(".imginfo").css("top", "100%");
//  $( this ).find(".simginfo").css("top", "100%");
//  $( this ).find(".imgbar").css("opacity", "1");
// });
//
//
//
// function leftMarg() {
//   console.log("clicked");
//   console.log(x);
//   if (x >= -950) {
//
//
//   console.log(x);
//   x = x - 480;
//   stretch.style.marginLeft = x + "px";
// }
// }
//
// function rightMarg() {
//   console.log("clicked");
//   if (x < 0) {
//
//   x = x + 480;
//   stretch.style.marginLeft = x + "px";
// }
// };
//
// if (left != undefined) {
// left.addEventListener('click', rightMarg, false);
// right.addEventListener('click', leftMarg, false);
// }
// $(document.body).on('touchmove', centCircle);
// $( window ).scroll( centCircle );
// $( wrap ).scroll( centCircle );
//
// //
//
//
// function centCircle() {
//   const wrap = document.getElementsByClassName("wrap")[0];
//   const conwrap = document.getElementsByClassName("conwrap")[0];
//
//   if (whnav != undefined) {
//
//     if (wrap != undefined) {
//     if ((wrap.scrollTop <= 20) && (window.scrollY <= 20)) {
//       grnav.style.opacity = "0";
//       $(".menu li").css("color", "white");
//       $(".menu li a").css("color", "white");
//       $(".leftcontact").css("color", "white");
//       $(".menubtn").css("color", "white");
//       $(".menubtn").css("border", "1px solid white");
//
//     } else {
//       grnav.style.opacity = "1";
//       $(".menu li").css("color", "white");
//       $(".menu li a").css("color", "white");
//       $(".leftcontact").css("color", "white");
//       $(".menubtn").css("color", "white");
//       $(".menubtn").css("border", "1px solid white");
//
//     }
//   } else {
//     if ((conwrap.scrollTop <= 20) && (window.scrollY <= 20)) {
//       grnav.style.opacity = "0";
//       $(".menu li").css("color", "white");
//       $(".menu li a").css("color", "white");
//       $(".leftcontact").css("color", "white");
//       $(".menubtn").css("color", "white");
//       $(".menubtn").css("border", "1px solid white");
//
//     } else {
//       grnav.style.opacity = "1";
//       $(".menu li").css("color", "white");
//       $(".menu li a").css("color", "white");
//       $(".leftcontact").css("color", "white");
//       $(".menubtn").css("color", "white");
//       $(".menubtn").css("border", "1px solid white");
//
//     }
//
//
//
//
//   }
//
//   } else {
//
//
//     if (wrap != undefined) {
//
//   if ((wrap.scrollTop <= 20) && (window.scrollY <= 20)) {
//         grnav.style.opacity = "0";
//         $(".menu li").css("color", "white");
//         $(".menu li a").css("color", "white");
//         $(".leftcontact").css("color", "white");
//         $(".menubtn").css("color", "white");
//         $(".menubtn").css("border", "1px solid white");
//
//       } else {
//         grnav.style.opacity = "1";
//         $(".menu li").css("color", "white");
//         $(".menu li a").css("color", "white");
//         $(".leftcontact").css("color", "white");
//         $(".menubtn").css("color", "white");
//         $(".menubtn").css("border", "1px solid white");
//       }
//     } else {
//       if ((conwrap.scrollTop <= 20) && (window.scrollY <= 20)) {
//             grnav.style.opacity = "0";
//             $(".menu li").css("color", "white");
//             $(".menu li a").css("color", "white");
//             $(".leftcontact").css("color", "white");
//             $(".menubtn").css("color", "white");
//             $(".menubtn").css("border", "1px solid white");
//
//           } else {
//             grnav.style.opacity = "1";
//             $(".menu li").css("color", "white");
//             $(".menu li a").css("color", "white");
//             $(".leftcontact").css("color", "white");
//             $(".menubtn").css("color", "white");
//             $(".menubtn").css("border", "1px solid white");
//
//           }
//     }
//      }
//
//   }
//
//
//
//
//
//     if (pdp != undefined) {
//     pdp.addEventListener('click', showImg)
//     odp.addEventListener('click', showImg)
//   }
//
//
//   function showImg() {
//     console.log($(this).html());
//     if($(this).html() == "OUR EATS") {
//       $( odpress ).css("color", "#3E1E00")
//       $( odpress ).css("border", "none")
//       $( pdpress ).css("color", "#8BA665")
//       $( pdpress ).css("border-bottom", "1px solid #8BA665")
//
//       $( odbody ).css("height", "0")
//       $( odbody ).css("opacity", "0")
//       $( pdbody ).css("height", "auto")
//       $( pdbody ).css("opacity", "1")
//     }
//     if($(this).html() == "OUR TREATS") {
//       $( pdpress ).css("color", "#3E1E00")
//       $( pdpress ).css("border", "none")
//       $( odpress ).css("color", "#8BA665")
//       $( odpress ).css("border-bottom", "1px solid #8BA665")
//
//       $( hbody ).css("height", "0")
//       $( pdbody ).css("opacity", "0")
//       $( odbody ).css("height", "auto")
//       $( odbody ).css("opacity", "1")
//     }
//   }
//
//
//
//   $("#b").click(function() {
//       var password = "password";
//       if($("#pass").val() !== password) {
//           $("#err").text("Incorrect password");
//       }
//       else {
//           $("#err").text("Password correct! Do whatever you need to do here.");
//       }
//   });
//
//
//
//   $('.fixplank').click(function(event) {
//     $( this ).css("display", "none");
//   });
//
//
//   $('.himg').click(function(event) {
//
//   let img =  $(this).find('img').attr('src');
//    fixpic = document.getElementsByClassName("fixpic")[0];
//    fixplank = document.getElementsByClassName("fixplank")[0];
//    $( fixplank ).css("display", "block");
//   $( fixpic ).css("background-image", "url(" + img + ")");
//   console.log($( fixpic ).css("background-image"))
//
//   });
//
//
//
//   $(".passbtn").click(function() {
//       var password = "SC977";
//       if($("#pass").val() !== password) {
//           alert("Wrong Password")
//       }
//       else {
//           $(".lockpass").css("display", "none")
//       }
//   });
//
//
//
//     $(".rateitem").click(function(){
//
//       if ($(this).index() ==  0) {
//
//         $( ".rateitem" ).removeClass('rd');
//         $( this ).addClass('rd');
//         // $( ".rateitem" ).css( "background-color", "#DFDFDF" );
//         // $( this ).css( "background-color", "red" );
//       } else if ($(this).index() ==  1) {
//         $( ".rateitem" ).removeClass('rd');
//         $( ".rateitem" ).slice( 0, 2 ).addClass('rd');
//       }
//       else if ($(this).index() ==  2) {
//         $( ".rateitem" ).removeClass('rd');
//         $( ".rateitem" ).slice( 0, 3 ).addClass('rd');
//       }
//       else if ($(this).index() ==  3) {
//         $( ".rateitem" ).removeClass('rd');
//         $( ".rateitem" ).slice( 0, 4 ).addClass('rd');
//       }
//       else if ($(this).index() ==  4) {
//         $( ".rateitem" ).removeClass('rd');
//         $( ".rateitem" ).slice( 0, 5 ).addClass('rd');
//       }
//
//     });
//
//
//     $('.rateitem').mouseover(function() {
//       console.log("woo");
//       $(this).prevAll().addClass('redd');
//       $(this).addClass('redd');
//       }).mouseout(function() {
//         $(this).prevAll().removeClass('redd');
//         $(this).removeClass('redd');
//       });
//
//     $('.vpr').click(function(event) {
//       name = $('#namefield').val()
//       locat = $('#locationfield').val()
//       message = $('#messagefield').val()
//       rated = $('.rd').length
//
//       if (name || message) {
//
//
//
//       $.ajax({
//                url: "/",
//                type: "POST",
//                data: { name: name, locat: locat, message: message, rated: rated},
//                success: function(response){
//                  console.log("had success")
//                }
//              })
//
//
//
//     } else {
//       console.log("EMPTY")
//     }
//
//     });


});
