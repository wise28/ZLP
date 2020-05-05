
/*hover for menu-desktop*/
$('.menu-icon, .menu-desktop-content').hover(
    function(){
        $('.menu-desktop-content').removeClass('d-none');
        $('.menu-desktop-content').addClass('d-inline-flex');

       if($(document).width() < 1360){
            $('.header-title').addClass('d-none');
        }

    },
    function(){
        $('.menu-desktop-content').removeClass('d-inline-flex');
        $('.menu-desktop-content').addClass('d-none');
        $('.header-title').removeClass('d-none');
    });

/*hover for filter-desktop*/

$('.filter-desktop, .menu-filter-desktop__content').hover(
    function(){
        $('.menu-filter-desktop__content').removeClass('d-none');
        $('.menu-filter-desktop__content').addClass('d-inline-flex');

        if($(document).width() < 1360){
            $('.header-title').addClass('d-none');
        }

    },
    function(){
        $('.menu-filter-desktop__content').removeClass('d-inline-flex');
        $('.menu-filter-desktop__content').addClass('d-none');
        $('.header-title').removeClass('d-none');
    });

/*ховер на картинку preview-projects*/

// $(document).ready(function(){
//     $('.projects-hover').hover(
//         function(){
//             $(this).siblings('.preview-projects__item-text-hover').slideDown(600);
//         },
//         function(){
//             $(this).siblings('.preview-projects__item-text-hover').slideUp(200);
//         });
//
// });



//инициализация слайдеров на странице projects education bureau

$(document).ready(function(){

    /*для преобразования меню в крестик при клике*/
    function openMobileMenu(x) {
        x.classList.toggle("change");
    }

    function slideInit(){
        if($('body').hasClass('education')){
            $('.education-slide').slick({});
            $('.education-mobile-slide').slick({});
        }

        if($('body').hasClass('bureau')){
            $('.bureau-mobile-slide').slick({});
        }

       if($('body').hasClass('select-project-page')){
           $('.projest-slide').slick({});
       }

    }

    function isotopeInit(){

        var $grid = $('.preview-projects__content').isotope({
            itemSelector: '.preview-projects__item',
            layoutMode: 'fitRows',
            filter: '*'
        });

        $('.menu-filter-desktop__content').on( 'click', 'a', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            //filterValue = filterFns[ filterValue ] || filterValue;
            $grid.isotope({ filter: filterValue });
        });
    }

    /**
     * Function disabling preloader page and show content block
     *
     * @param preloaderClass
     * @param contentClass
     */
    function offPreloader(preloaderClass, contentClass){
        $('.preloader-page h1').fadeIn({
            duration: 'slow',
            easing: 'linear'
        });

        setTimeout(function(){
            $('.' + preloaderClass).fadeOut({
                duration: 'slow',
                easing: 'linear'
            });

            $('.' + contentClass).fadeIn({
                duration: 'slow',
                easing: 'linear'
            });

            if(!$('body').hasClass('select-project-page')){
                $('.mouse-cursor').addClass('d-none');
            }


            try{

                isotopeInit();
            }catch(e){

            }

        }, 1000);

        if($('body').hasClass('select-project-page')) {
            $('.select-project').css('display', 'flex');

        }
            slideInit();
    }

    function heightProjectSlide() {
        if ($(window).height() <= '1000'){
            $('.projest-slide').css('height', '450px');
        }
        else   {
            $('.projest-slide').css('height', '600px');
        }
        return;
    }

    $('.preloader-page').click(function(){
        offPreloader('preloader-page', 'preview-projects');
        offPreloader('preloader-page', 'select-project');
        offPreloader('preloader-page', 'select-project-mobile');
        heightProjectSlide();

    });

    setTimeout(function(){
        $('.preloader-page').click();
    }, 2000);

    $('.menu-icon').click(function(){
        $('body').toggleClass('mob-menu-active');
    });


    $('.mobile-menu a').on('click', function(){
        $('body').removeClass('mob-menu-active');
    });

    /*Открытие блока профиля учредителя*/

    $('#zimailo-link, #liachenko-link').click(function(){
        var block = $(this).data('block');
        $('#' + block).toggleClass('modal-profile-active');
    });

    /*Закрытие блока профиля учредителя*/

    $('.menu-icon_mobile').click(function(){
        $(this).closest('.modal-profile').removeClass('modal-profile-active');
    });

    $('.btn-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    /**
     * Main page
     */

    if($('body').hasClass('main-page')){
        // set the starting position of the cursor outside of the screen
        let clientX = -100;
        let clientY = -100;
        const innerCursor = document.querySelector(".mouse-cursor");

        const initCursor = () => {
            // add listener to track the current mouse position
            document.querySelector('.preloader-page').addEventListener("mousemove", e => {
                clientX = e.clientX;
                clientY = e.clientY;
            });

            // transform the innerCursor to the current mouse position
            // use requestAnimationFrame() for smooth performance
            const render = () => {
                if(!innerCursor){
                    return;
                }
                innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
                // if you are already using TweenMax in your project, you might as well
                // use TweenMax.set() instead
                // TweenMax.set(innerCursor, {
                //   x: clientX,
                //   y: clientY
                // });

                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        };

        initCursor();

        $('.cursor_triger').hover(function() {
            cursorAddClass($(this).data('cursor'))
        }, function() {
            cursorRemoveClass($(this).data('cursor'))
        });

        function cursorAddClass(className) {
            $(innerCursor).addClass(className);
        }

        function cursorRemoveClass(className) {
            $(innerCursor).removeClass(className);
        }
    }


    /**
     * Bureau page
     */
    if($('body').hasClass('bureau')){

        if ($(window).width() <= '992'){
            $('body').addClass('bureau-mobile');
        }else {
            $('body').removeClass('bureau-mobile');
        }

        $(window).resize(function() {
            if ($(window).width() <= '992'){
                $('body').addClass('bureau-mobile');
            }else {
                $('body').removeClass('bureau-mobile');
            }
        });

        try{
            $(".onepage-wrapper").onepage_scroll({
                sectionContainer: "section",
                responsiveFallback: false,
                loop: true
            });
            $(document).on('mousewheel DOMMouseScroll', '.awards-page', function(event) {
                event.stopPropagation();
            });
        }catch(e){
            console.log(e.message);
        }


    }

    /**
     * Select  project page
     */
    if($('body').hasClass('select-project-page')){

        /*вычисление высоты блока с описанием проекта*/
        function descriptionPageHeight (){
            try{
                let headerContainer = document.querySelector('.header-container');
                let descriptionPageContainer = document.querySelector('.description-page__container');
                let descriptionPage = document.querySelector('.description-page');
                let headerBlockHeight = headerContainer.offsetHeight;
                let headerDescriptionPage = descriptionPageContainer.style.height = descriptionPage.clientHeight - headerBlockHeight + 'px';

                return headerDescriptionPage;
            }catch(e){
                console.log(e.message)
            }
        }

        $(document).keydown(function(e) {
            switch (e.which) {
                case 37:
                    $('.slick-slider').slick('slickPrev');
                    break;

                case 38:
                    $('.btn-details').click();
                    break;
                case 39:
                    $('.slick-slider').slick('slickNext');
                    break;

                case 40:
                case 27:
                    offPreloader('description-page', 'select-project');
                    break;


            }
        });

        $('.btn-details').click(function(){

            try{
                offPreloader('select-project', 'description-page');
            }catch(e){

            }

            //descriptionPageHeight();
            $('.description-page__text').css('max-height', 'initial');

        });

        $(window).resize(function() {
            if ($(window).height() <= '1000'){
                $('.projest-slide').css('height', '450px');
                $('.projest-slide img').css('height', '450px');
            }
            else   {
                $('.projest-slide').css('height', '600px');
                $('.projest-slide img').css('height', '600px');
            }
            try{
                $('.projest-slide').slick({});
            }catch(e){

            }

        });

        $('.projest-slide').mousewheel(function(e) {
            e.preventDefault();

            if (e.deltaY < 0) {
                $(this).slick('slickNext');
            } else {
                $(this).slick('slickPrev');
            }
        });

        $('.projest-slide').on('init', function(event, slick){
            try{
                $('.slide-number .all-number-slide').html(slick.$slides.length < 10 ? '0' + slick.$slides.length : slick.$slides.length);
            }catch(e){

            }

        });

        $('.projest-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
            let slideNum = currentSlide < 10 ? '0' + (currentSlide + 1) : currentSlide;
            $('.slide-number .active-number').html(slideNum);
        });

    }

    // $('.btn-details').click(function(){
    //     console.log('click');
    //     // $(this).closest('.description-page__text').css('max-height', 'initial');
    //
    // });

    $(document).on('click', '.left-block', function(){
        $('.projest-slide').slick('slickPrev');
    });

    $(document).on('click', '.right-block', function(){
        $('.projest-slide').slick('slickPrev');
    });
    /**********************************************/
});




/*for menu на экранах меньше 1360*/

// $(document).ready(function() {
//     $(window).resize(function() {
//         if ($(window).width() <= '1360'){
//            }
//         else   {
//
//         }
//
//     });
// });












//определение высоты слайдера на странице бюро в мобилке

// $(document).ready(function() {
//     function getSlideHeight() {
//         let bodyHeight = document.documentElement.clientHeight;
//
//         let headerHeight = document.querySelector('.bureau-mobile').offsetHeight;
//         let slideElem = document.querySelector('.bureau-mobile-slide');
//         slideElem.style.height = bodyHeight - headerHeight;
//         return slideElem;
//     }
//    getSlideHeight();
// });


