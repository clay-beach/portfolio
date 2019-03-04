/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    
    // animations //
    var landingAnimation = function () {
        $('.landing h1').each(function () {
            $(this).delay(0).animate({
                opacity: 1,
                left: 0
            }, 0);
        });
        $('.landing h2').each(function () {
            $(this).delay(500).animate({
                opacity: 1,
                bottom: 0
            }, 0);
        });
        $('.landing .blurb').each(function () {
            $(this).delay(1000).animate({
                opacity: 1
            }, 0);
        });
        $('.landing a').each(function () {
            $(this).delay(1000).animate({
                opacity: 1
            }, 0);
        });
    };
    landingAnimation();
    
    // on scroll events //
    $(window).scroll(function () {
        var windowScrollTop = $(this).scrollTop();
        
        var devAnimation = function () {
            $('.skillSetTitle').each(function () {
                $(this).delay(0).animate({
                    opacity: 1
                }, 500);
            });
            
            $('.skillBox:eq(0)').each(function () {
                $(this).delay(0).animate({
                    opacity: 1,
                    right: 0
                }, 0);
            });
            $('.skillBox:eq(1)').each(function () {
                $(this).delay(250).animate({
                    opacity: 1,
                    right: 0
                }, 0);
            });
            $('.skillBox:eq(2)').each(function () {
                $(this).delay(500).animate({
                    opacity: 1,
                    right: 0
                }, 0);
            });
        };
        
        var barAnimation = function () {
            $('.fill').each(function () {
                $(this).delay(0).animate({
                    opacity: 1
                }, 0);
            });
            $('.fill:eq(0), .fill:eq(1)').each(function () {
                $(this).addClass("fill-10");
            }); 
            $('.fill:eq(3)').each(function () {
                $(this).addClass("fill-07");
            });
            $('.fill:eq(4), .fill:eq(6), .fill:eq(7)').each(function () {
                $(this).addClass("fill-06");
            });
            $('.fill:eq(5), .fill:eq(8)').each(function () {
                $(this).addClass("fill-04");
            });
            $('.fill:eq(2), .fill:eq(9)').each(function () {
                $(this).addClass("fill-03");
            });
        };
        
        var designAnimation = function () {
            $('.portfolioTitle').each(function () {
                $(this).delay(0).animate({
                    opacity: 1
                }, 500);
            });
            
            $('.mockSite:eq(0)').each(function () {
                $(this).delay(0).animate({
                    opacity: 1,
                    right: 0
                }, 0);
            });
            $('.mockSite:eq(1)').each(function () {
                $(this).delay(600).animate({
                    opacity: 1,
                    right: 0
                }, 0);
            });
            $('.mockSite:eq(2)').each(function () {
                $(this).delay(1200).animate({
                    opacity: 1,
                    right: 0
                }, 0);
            });
            $('.mockSite:eq(3)').each(function () {
                $(this).delay(1800).animate({
                    opacity: 1,
                    right: 0
                }, 0);
            });
        };
        
        var sliderAnimation = function () {
            $('.slide').each(function () {
                $(this).delay(0).animate({
                    opacity: 1
                }, 1000);
            });
        };
        
        if (windowScrollTop > 200) {
            devAnimation();
        }
        if (windowScrollTop > 600) {
            barAnimation();
        }
        if (windowScrollTop > 1000) {
            designAnimation();
        }
        if (windowScrollTop > 1500) {
            sliderAnimation();
        }
    });

    $(function () {
        $(".mock1").click(function () {
            $("#popup1").css({visibility: "visible", opacity: 1});
            $("body").css({overflow: "hidden"});
        });
    });
    
    $(function () {
        $(".mock2").click(function () {
            $("#popup2").css({visibility: "visible", opacity: 1});
            $("body").css({overflow: "hidden"});
        });
    });
    
    $(function () {
        $(".mock3").click(function () {
            $("#popup3").css({visibility: "visible", opacity: 1});
            $("body").css({overflow: "hidden"});
        });
    });
    
    $(function () {
        $(".mock4").click(function () {
            $("#popup4").css({visibility: "visible", opacity: 1});
            $("body").css({overflow: "hidden"});
        });
    });
    
    $(function () {
        $(".close").click(function () {
            $(".overlay").css({visibility: "hidden", opacity: 0});
            $("body").css({overflow: "auto"});
        });
    });
});


