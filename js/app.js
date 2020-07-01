$(function () {
    /*Fixed header*/
    let header = $("#header"); /*задаем переменную header выбираем её по id=header*/
    let intro = $("#intro");
    let introH = intro.innerHeight(); /*объявили переменную высота нашей стр*/
    let scrollPos = $(window).scrollTop(); /*переменная со значением нашего скрола(обращаемся к окну и сколько от верха проскролили*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() { /*обращаемся к окну, при скроле/загрузке/мобильнойверсии страницы происходит функция*/
        let introH = intro.innerHeight(); /*перезаписываем значение переменной*/
        scrollPos = $(this).scrollTop(); /*обновляем значение скрола при скроле на текущую*/
        checkScroll(scrollPos, introH)
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) { /*если позиция скрола больше чем высота нашего интро блока, то*/
            header.addClass("fixed"); /*добавляем класс fixed*/
        } else /*иначе*/{
            header.removeClass("fixed"); /*удаляем класс*/
        }
    }

    /*Smooth Scroll* плавный скрол*/
    $("[data-scroll]").on("click", function(event){ /*нажимаем на ссылку с атрибутом data-scroll*/
        event.preventDefault(); /*отменяет стандартное поведение ссылки(перезагрузки стр)*/

        let elementId = $(this).data('scroll'); /*в переменную elementId записывается id на что мы кликаем*/
        let elementOffset = $(elementId).offset().top; /*получить позицию элеента от верха страицы*/

        nav.removeClass("show");

        console.log(elementOffset);
        $("html,body").animate({
            scrollTop: elementOffset -100 /*проскролим плавно стр до этого значения, а -100 это отступ сверху*/
        }, 700/*скорость 700 мили секунд*/);

    });


    /*Nav Toggle*/

    navToggle.on("click", function(event) { /*Выбираем селектор navToggle следим за его кликом, при клике функция*/
        event.preventDefault();
        nav.toggleClass("show");
    });

    /*Reviews: https://kenwheeler.github.io/slick/*/
    let slider = $("#reviewsSlider");

    slider.slick({   /*указываем слайдер метод слик*/
        infinite: true, /*бесконечно скролится*/
        slidesToShow: 1, /*сколько показываем слайдеров*/
        slidesToScroll: 1, /*сколько скролим при клике*/
        fade: true, /*один исчезает другой появляется*/
        arrows: false, /*убираем кнопки ревьюс и некст*/
        dots: true /*точки перехода*/
    });









});

