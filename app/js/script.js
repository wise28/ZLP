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

$('.filter-desktop').hover(
    function(){
        $('.menu-filter-desktop__content').removeClass('d-none');
        $('.menu-filter-desktop__content').addClass('d-inline-flex');

    },
    function(){
        $('.menu-filter-desktop__content').removeClass('d-inline-flex');
        $('.menu-filter-desktop__content').addClass('d-none')
    });


$('.menu-filter-desktop__content').hover(
    function(){
        $(this).removeClass('d-none');
        $(this).addClass('d-inline-flex');

    },
    function(){
        $(this).removeClass('d-inline-flex');
        $(this).addClass('d-none')
    });


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

        let headerContainer = document.querySelector('.header-container');
        let descriptionPageContainer = document.querySelector('.description-page__container');
        let descriptionPage = document.querySelector('.description-page');
        let headerBlockHeight = headerContainer.offsetHeight;
        let headerDescriptionPage = descriptionPageContainer.style.height = descriptionPage.clientHeight - headerBlockHeight + 'px';

        return headerDescriptionPage;


    }
    descriptionPageHeight ();
});