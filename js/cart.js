$(document).ready(function() {
    var delay = 400,
        title = $(".section-heading");

    $(".cart-order-button").on("click", function () {
        $(".order-step-1").fadeOut(delay);

        var step2 = setTimeout(() => {
            $(".order-step-2").fadeIn(delay);
            title.text("Оформление заказа");

            clearTimeout(step2);
        }, delay);
    });

    $(".gotocart").on("click", function () {
        $(".order-step-2").fadeOut(delay);

        var step1 = setTimeout(() => {
            $(".order-step-1").fadeIn(delay);
            title.text("Корзина");

            clearTimeout(step1);
        }, delay);
    });

    $(".order-button").on("click", function (e) {
        e.preventDefault();
        $(".order-step-2").fadeOut(delay);

        var step3 = setTimeout(() => {
            $("body, html").animate({
                scrollTop: 0
            }, 1500);

            $(".order-step-3").fadeIn(delay);
            title.text("Заказ №156498");

            clearTimeout(step3);
        }, delay);
    })
});