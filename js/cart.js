$(document).ready(function() {
    var delay = 400,
        title = $(".section-heading");

    function toTop() { $("body, html").animate({scrollTop: 0}, delay) }

    $(".cart-order-button").click(function () {
        $(".order-step-1").fadeOut(delay);
        toTop();

        var step2 = setTimeout(() => {
            $(".order-step-2").fadeIn(delay);
            title.text("Оформление заказа");

            clearTimeout(step2);
        }, delay);
    });

    $(".gotocart").click(function () {
        $(".order-step-2").fadeOut(delay);
        toTop();

        var step1 = setTimeout(() => {
            $(".order-step-1").fadeIn(delay);
            title.text("Корзина");

            clearTimeout(step1);
        }, delay);
    });

    $(".order-button").click(function (e) {
        e.preventDefault();

        toTop();
        $(".order-step-2").fadeOut(delay);

        var step3 = setTimeout(() => {
            $(".order-step-3").fadeIn(delay);
            title.text("Заказ №156498");

            clearTimeout(step3);
        }, delay);
    })
});