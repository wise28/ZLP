/*для преобразования меню в крестик при клике*/
function myFunction(x) {
    x.classList.toggle("change");
}

/*hover for menu-desktop*/
$('.menu-icon').hover(
    function(){
        $('.menu-desktop-content').removeClass('d-none');
        $('.menu-desktop-content').addClass('d-inline-flex');

    },
    function(){
        $('.menu-desktop-content').removeClass('d-inline-flex');
        $('.menu-desktop-content').addClass('d-none')
    });


$('.menu-desktop-content').hover(
    function(){
        $(this).removeClass('d-none');
        $(this).addClass('d-inline-flex');

    },
    function(){
        $(this).removeClass('d-inline-flex');
        $(this).addClass('d-none')
    });

/*hover for filter-desktop*/

$('.filter-desktop, .menu-filter-desktop__content').hover(
    function(){
        $('.menu-filter-desktop__content').removeClass('d-none');
        $('.menu-filter-desktop__content').addClass('d-inline-flex');

    },
    function(){
        $('.menu-filter-desktop__content').removeClass('d-inline-flex');
        $('.menu-filter-desktop__content').addClass('d-none');
    });

//TODO: Remove this duplicate code after release
// $('.menu-filter-desktop__content').hover(
//     function(){
//         $(this).removeClass('d-none');
//         $(this).addClass('d-inline-flex');
//
//     },
//     function(){
//         $(this).removeClass('d-inline-flex');
//         $(this).addClass('d-none');
//     });


/*ховер на картинку preview-projects*/

$(document).ready(function(){
    $('.projects-hover').hover(
        function(){
            // $(this).siblings('.preview-projects__item-text').css('z-index','2').slideUp();
            // $(this).siblings('.preview-projects__item-text-hover').css('opacity', '1');
            $(this).siblings('.preview-projects__item-text-hover').slideDown(600);
            // $(this).siblings('.preview-projects__item-text').addClass("is-hover");
            // $(this).siblings('.preview-projects__item-text').fadeIn(1000);
            // $(this).siblings('.preview-projects__item-text').addClass('d-flex');
            // $(this).parent().css('width', '25%');

        },
        function(){
            // $(this).siblings('.preview-projects__item-text').css('opacity', '0');
            // $(this).siblings('.preview-projects__item-text-hover').css('opacity', '0');
            $(this).siblings('.preview-projects__item-text-hover').slideUp(200);
            // $(this).siblings('.preview-projects__item-text').removeClass("is-hover");
            // $(this).siblings('.preview-projects__item-text').addClass('d-none');
            // $(this).parent().css('width', '24%');
        });

});
/*инициализация слайдера на странице проекта*/
$(document).ready(function(){
    $('.projest-slide').slick({});
});


/*вычисление высоты блока с описанием проекта*/
$(document).ready(function(){
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
    descriptionPageHeight ();


    /**
     * Function disabling preloader page and show content block
     *
     * @param preloaderClass
     * @param contentClass
     */
    function offPreloader(preloaderClass, contentClass){
        $('.' + preloaderClass).addClass('d-none');

        $('.' + contentClass).removeClass('d-none');

    }

    $('.preloader-page').click(function(){
        offPreloader('preloader-page', 'preview-projects');
        offPreloader('preloader-page', 'select-project');

    });

    $('.preloader-page').scroll(function(){
        console.log('scroll');
    });

    setTimeout(" $('.preloader-page').click()", 2000);

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
                offPreloader('description-page', 'select-project');
                break;
        }
    });

    $('.btn-details').click(function(){
        offPreloader('select-project', 'description-page');;
        descriptionPageHeight ();
    });
});

