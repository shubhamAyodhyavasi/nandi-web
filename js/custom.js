jQuery(document).ready(function(){
    typeText()

})
function typeText(){
    // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
a = 0,
isBackspacing = false,
isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
"2500+ | Organic farmer", 
"20 + | Product categories", 
" 1200+ | Buyers", 
" 3 lacs INR | Worth transaction monthly", 
];

// Speed (in milliseconds) of typing.
var speedForward = 100, //Typing Speed
speedWait = 1000, // Wait between typing and backspacing
speedBetweenLines = 1000, //Wait between first and second lines
speedBackspace = 25; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
var element = $("#" + id),
  aString = ar[a],
  eHeader = element.children("h1"), //Header element
  eParagraph = element.children("p"); //Subheader element

// Determine if animation should be typing or backspacing
if (!isBackspacing) {

// If full string hasn't yet been typed out, continue typing
if (i < aString.length) {
  
  // If character about to be typed is a pipe, switch to second line and continue.
  if (aString.charAt(i) == "|") {
    isParagraph = true;
    eHeader.removeClass("cursor");
    eParagraph.addClass("cursor");
    i++;
    setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
    
  // If character isn't a pipe, continue typing.
  } else {
    // Type header or subheader depending on whether pipe has been detected
    if (!isParagraph) {
      eHeader.text(eHeader.text() + aString.charAt(i));
    } else {
      eParagraph.text(eParagraph.text() + aString.charAt(i));
    }
    i++;
    setTimeout(function(){ typeWriter(id, ar); }, speedForward);
  }
  
// If full string has been typed, switch to backspace mode.
} else if (i == aString.length) {
  
  isBackspacing = true;
  setTimeout(function(){ typeWriter(id, ar); }, speedWait);
  
}

// If backspacing is enabled
} else {

// If either the header or the paragraph still has text, continue backspacing
if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
  
  // If paragraph still has text, continue erasing, otherwise switch to the header.
  if (eParagraph.text().length > 0) {
    eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
  } else if (eHeader.text().length > 0) {
    eParagraph.removeClass("cursor");
    eHeader.addClass("cursor");
    eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
  }
  setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);

// If neither head or paragraph still has text, switch to next quote in array and start typing.
} else { 
  
  isBackspacing = false;
  i = 0;
  isParagraph = false;
  a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
  setTimeout(function(){ typeWriter(id, ar); }, 50);
  
}
}
}
}
// function typeText(){
//     const typedTextSpan = document.querySelector(".typed-text");
//     const cursorSpan = document.querySelector(".cursor");

//     const textArray = ["2500+ \n Organic farmer", "20 + \n Product categories", "1200+ \n Buyers", "3 lacs INR \n Worth transaction monthly"];
//     const typingDelay = 200;
//     const erasingDelay = 100;
//     const newTextDelay = 2000; // Delay between current and next text
//     let textArrayIndex = 0;
//     let charIndex = 0;

//     function type() {
//     if (charIndex < textArray[textArrayIndex].length) {
//         if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//         typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typingDelay);
//     } 
//     else {
//         cursorSpan.classList.remove("typing");
//         setTimeout(erase, newTextDelay);
//     }
//     }

//     function erase() {
//         if (charIndex > 0) {
//         if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//         typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//         charIndex--;
//         setTimeout(erase, erasingDelay);
//     } 
//     else {
//         cursorSpan.classList.remove("typing");
//         textArrayIndex++;
//         if(textArrayIndex>=textArray.length) textArrayIndex=0;
//         setTimeout(type, typingDelay + 1100);
//     }
//     }

//     // document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//     if(textArray.length) setTimeout(type, newTextDelay + 250);
//     // });
// }

(function ($) {
    "use strict";

    /*---product column5 activation---*/
    var $porductColumn5 =  $('.product_column5');
    if($porductColumn5.length > 0){
        $porductColumn5.on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 5,
            margin: 20,
            dots:false,
            navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                },

              }
        });
    }

     /*---single product activation---*/
     var $singleProductActive = $('.single-product-active');
        if($singleProductActive.length > 0){  
        $('.single-product-active').owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            margin:15,
            dots:false,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                320:{
                    items:2,
                },
                400:{
                    items:3,
                },
                992:{
                    items:3,
                },
                1200:{
                    items:4,
                },


              }
        });
    }
})(jQuery);	


// radio tab farmer registration
function ShowHideMe(RadioChecked) {
    jQuery(".DivToShowHide").hide();
    jQuery("."+RadioChecked.id).fadeIn()
}


// jQuery for side bar sticky

jQuery(window).on("load", function () {

    jQuery(".dashboard-list [data-toggle='tab']").click(function(){
        setTimeout(function(){
            jQuery(window).unbind("scroll")
            setScroll(".product-map");
        },1000)
    })
    
    setScroll(".product-map");
    jQuery(window).resize(function () {
        jQuery(window).unbind("scroll")
        setScroll(".product-map");
    })
});

function setScroll(itemSelector, cb) {
    var sideItem = jQuery(itemSelector);
    if (!sideItem || sideItem.length < 1) {
        return
    }
    sideItem.removeAttr("style").removeClass("sick-abs").removeClass("sick-fixed");
    var offset = sideItem.offset();
    var parentOffset = sideItem.parent().offset();
    var parentHeight = sideItem.parent().height();
    var itemHeight = sideItem.outerHeight();
    var width = sideItem.outerWidth();
    var leftSetAbs = offset.left - parentOffset.left;
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var fixTopPos = 0;
    var whenScrollPos = offset.top
    var whenStop = parentHeight + parentOffset.top - itemHeight
    console.log("whenScrollPos", whenScrollPos);
    console.log("leftSetAbs", leftSetAbs);
    jQuery(window).scroll(function () {
        if (parentHeight !== sideItem.parent().height()) {
            parentHeight = sideItem.parent().height()
            whenStop = parentHeight + parentOffset.top - itemHeight
        }
        if (windowWidth > 992) {
            var scrollPos = jQuery(this).scrollTop();
            // console.log("scrollPos",scrollPos);
            console.log("parentHeight", parentHeight);
            console.log("itemHeight", itemHeight);
            if (parentHeight > itemHeight) {
                if (scrollPos > whenStop) {
                    sideItem.removeClass("sick-fixed").addClass("sick-abs").css({
                        position: "absolute",
                        top: parentHeight - itemHeight + "px",
                        width: width + "px",
                        left: leftSetAbs + "px"
                    });
                    console.log("scrollPos", scrollPos);
                } else if (whenScrollPos <= scrollPos) {
                    sideItem.removeClass("sick-abs").addClass("sick-fixed").removeAttr("style").css({
                        // width: width + "px",
                        top: fixTopPos + "0px",
                        left: offset.left + "px",
                        bottom: 0
                    });
                    sideItem[0].style.setProperty("width", width + "px", "important")

                } else {
                    sideItem.removeAttr("style").removeClass("sick-abs").removeClass("sick-fixed");
                }
            } else {
                sideItem.removeAttr("style").removeClass("sick-abs").removeClass("sick-fixed");
            }
        } else {
            sideItem.removeAttr("style").removeClass("sick-abs").removeClass("sick-fixed");
        }
        if (typeof cb === 'function') {
            cb()
        }
    });
}
