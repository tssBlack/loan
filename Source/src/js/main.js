import Slider from "./modules/sliders/slider";
import pageSlider from "./modules/sliders/pageSlider";
import ModuleSlider from "./modules/sliders/moduleslider";
import videoPlayer from "./modules/videoPlayer";
import Difference from "./modules/difference";

window.addEventListener('DOMContentLoaded', () => {
    // Проверка .page
    if (document.querySelector('.page')) {
        const pageslider = new pageSlider({
            selector: '.page',
            next: '.next'
        });
    }

    // Видео
    if (document.querySelector('.play')) {
        const video = new videoPlayer('.play');
    }

    // showup
    if (document.querySelector('.showup__content-slider')) {
        const educationalModule = new ModuleSlider({
            selector: '.showup__content-slider',
            next: '.showup__next',
            prev: '.showup__prev',
            activeClass: '.card-active'
        });
    }

    // modules
    if (document.querySelector('.modules__content-slider')) {
        const modulesModule = new ModuleSlider({
            selector: '.modules__content-slider',
            next: '.modules__info-btns .slick-next',
            prev: '.modules__info-btns .slick-prev',
            activeClass: '.card-active'
        });
    }

    // feed
    if (document.querySelector('.feed__slider')) {
        const feedModule = new ModuleSlider({
            selector: '.feed__slider',
            next: '.feed__slider .slick-next',
            prev: '.feed__slider .slick-prev',
            activeClass: '.feed__item-active',
            slideClass: '.feed__item'
        });
    }

    // difference
    if (
        document.querySelector('.officerold') &&
        document.querySelector('.officernew')
    ) {
        const difference = new Difference({
            officerold: '.officerold',
            officernew: '.officernew',
            item: '.officer__card-item',
            btn: '.card__click'
        });
    }

    // pageSlider на module
    if (document.querySelector('.moduleapp')) {
        const moduleSlider = new pageSlider({
            selector: '.moduleapp',
            next: '.next',
            prev: '.prev'
        });
    }
});
