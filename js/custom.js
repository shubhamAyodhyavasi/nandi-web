jQuery(document).ready(function(){
    typeText()

})
function typeText(){
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["\n featuerd Products", " \n New Products", "\n Total transacted value", "\n Buyer Seller"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
    }

    function erase() {
        if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
    }

    // document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
    // });
}

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
    var DivToShowHide = document.getElementById("DivToShowHide");

    if(document.getElementById("Rescard").checked) {
        DivToShowHideOther.style.display = "none";
        DivToShowHide.style.display = "block";
        document.getElementById("primarycardnow").innerHTML = RadioChecked.value;
    }
    else if(document.getElementById("Dricard").checked) {
        DivToShowHideOther.style.display = "none";
        DivToShowHide.style.display = "block";
        document.getElementById("primarycardnow").innerHTML = RadioChecked.value;
    }
    else if(document.getElementById("Passport").checked) {
        DivToShowHideOther.style.display = "none";
        DivToShowHide.style.display = "block";
        document.getElementById("primarycardnow").innerHTML = RadioChecked.value;
    }
    else if(document.getElementById("Other").checked) {
        DivToShowHideOther.style.display = "block";
        DivToShowHide.style.display = "block";
        document.getElementById("primarycardnow").innerHTML = RadioChecked.value;
    }
}


// jQuery for side bar sticky

jQuery(window).on("load", function () {
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
                            top: fixTopPos + "100px",
                            left: offset.left + "px"
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

    setScroll(".product-map");
    jQuery(window).resize(function () {
        jQuery(window).unbind("scroll")
        setScroll(".product-map");
    })
});