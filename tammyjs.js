$(document).ready(function () {

    $('.slider').slick({

        arrows: true,
        dots: true,

    });

    // (SMOOTH SCROLL-------------------------------)

    // відстежуєм атрибут data-scroll
    // при натискані на атрибут data-scroll буде відбуватися якась подія
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault(); //забирає нормальну функцію у силки

        // data('scroll'); витаскуєм значення data scroll
        var $this = $(this),
            blockID = $this.data('scroll'),
            blockOffset = $(blockID).offset().top;
        //отримуєм позицію цього елемента при натискані від верха сторінки (offset().top;)
        $("nav, a").removeClass("active");//забираєм у всіх елементів клас active
        $this.addClass("active"); //і додаєм клас active тільки при натискані на елемент

        // плавна анімація переходу на блок на чкий натиснули
        $("html,body").animate({
            scrollTop: blockOffset
        }, 500);// значеня 500 робить більшу плавність або час за яку проскролиться на блок

    });
    // (SMOOTH SCROLL-------------------------------)

});