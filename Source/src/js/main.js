import Slider from "./modules/sliders/slider";
import pageSlider from "./modules/sliders/pageSlider";
import ModuleSlider from "./modules/sliders/moduleslider";
import videoPlayer from "./modules/videoPlayer";

window.addEventListener('DOMContentLoaded', () => {
    const pageslider = new pageSlider({
        selector: '.page',
        next: '.next'
    });
    const video = new videoPlayer('.play');

    const educationalModule = new ModuleSlider({
        selector: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: '.card-active'
    });

    const modulesModule = new ModuleSlider({
        selector: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: '.card-active'
    });

    const feedModule = new ModuleSlider({ 
        selector: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: '.feed__item-active',
        slideClass: '.feed__item'
    })
});



//1, 3, 8