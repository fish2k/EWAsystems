$(document).ready(() => {
    // поiхали

    var homeSlider,
        homeSliderBlock = $("#homeslider"),
        sliderShowMoreButton = $(".home-slider-more"),
        burgerBtn = $(".header-burger"),
        overlay = $(".overlay"),
        body = $("body");

    // МЕНЮ
    burgerBtn.on("click", function () {
        body.toggleClass("state-menu");
    });

    // общий оверлэй
    overlay.on("click", function () {
        body.removeClass("state-menu");
    });

    // если слайдер имеется в DOM, то отрабатываем инициализацию
    if ( homeSliderBlock.eq(0).is(":visible") ) {
        homeSlider = new Swiper(".home-slider", {
            slidesPerView: 1,
            height: 600,
    
            on: {
                init: function () {
                    // отображаем слайдер при полной инициализации
                    this.el.style.opacity = 1;
                }
            }
        });

        sliderShowMoreButton.on("click", function () {
            var closeText = $(this).siblings(".home-slider-more-text");
    
            closeText.toggleClass("show");
        });
    }

    var productSlider,
        partnersSlider;

    productSlider = new Swiper(".slider-products", {
        loop: false,

        navigation: {
            prevEl: ".product-slider-prev",
            nextEl: ".product-slider-next"
        },

        breakpoints: {
            991: {
                slidesPerView: 4,
                spaceBetween: 30
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 0
            },

            320: {
                slidesPerView: 2
            }
        }
    });

    partnersSlider = new Swiper(".slider-partners", {
        slidesPerView: 6,
        loop: false,

        autoplay: {
            delay: 3000
        },

        breakpoints: {
            1200: {
                slidesPerView: 6
            },

            991: {
                slidesPerView: 4
            },

            768: {
                slidesPerView: 3
            },

            320: {
                slidesPerView: 2
            }
        }
    });

    // тултип на описание товара
    $(".product-item-info").each(function () {
        var getTextData = $(this).find(".product-item-info-inner-tooltip").get(0).innerText,
            getCurrentIndex = $(this).context.dataset.productId,
            getCurrentParent = $(".product-item[data-product-id=" + getCurrentIndex + "]");

        $(this).hover(
            function () {
                getCurrentParent.find(".product-tooltip").remove();
                getCurrentParent.append(`<div class="product-tooltip tooltip-info">${getTextData}</div>`);
            },
            function () {
                getCurrentParent.find(".product-tooltip").remove();
            }
        );
    })

    // тултип на бесплатную доставку
    $(".bubble-delivery").each(function () {
        var getTextData = $(this).attr("title"),
            getCurrentIndex = $(this).context.dataset.productId,
            getCurrentParent = $(".product-item[data-product-id=" + getCurrentIndex + "]");
        
        $(this).hover(
            function () {
                if (typeof getCurrentIndex == "undefined") {
                    $(".detail-bubbles").find(".product-tooltip").remove();
                    $(".detail-bubbles").append(`<div class="product-tooltip tooltip-small">${getTextData}</div>`);
                } else {
                    getCurrentParent.find(".product-tooltip").remove();
                    getCurrentParent.append(`<div class="product-tooltip tooltip-small">${getTextData}</div>`);
                }
            },
            function () {
                $(".detail-bubbles").find(".product-tooltip").remove();
                getCurrentParent.find(".product-tooltip").remove();
            }
        )
    });

    var detailSlider,
        detailSliderThumbs,
        detailSliderID = $("#detailSlider");

    if ( detailSliderID.eq(0).is(":visible") ) {
        detailSlider = new Swiper(".detail-slider", {
            slidesPerView: 1,
            loop: true,
            loopedSlides: 5
        });

        detailSliderThumbs = new Swiper(".detail-slider-thumbs", {
            loop: true,
            slideToClickedSlide: true,
            touchRatio: 0.2,
            cssMode: true,

            breakpoints: {
                1200: {
                    spaceBetween: 30
                },

                990: {
                    slidesPerView: 5
                },

                320: {
                    slidesPerView: 4,
                    spaceBetween: 15
                }
            }
        });

        detailSlider.controller.control = detailSliderThumbs;
        detailSliderThumbs.controller.control = detailSlider;
    }

});