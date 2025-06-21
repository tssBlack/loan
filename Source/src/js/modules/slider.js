export default class Slider {

    constructor(selector,next, prev = null) {
        this.slider = document.querySelector(selector);
        this.slides = Array.from(this.slider.children);
        this.currentIndex = 0;
        this.showSlide();

        if(prev) {
            this.slider.querySelectorAll(prev).forEach(button => {
                button.addEventListener('click', () => this.nextSlide());
            });
        }

        this.slider.querySelectorAll(next).forEach(button => {
            button.addEventListener('click', () => this.nextSlide());
            button.parentElement.previousElementSibling.addEventListener('click', () => {
                this.currentIndex = 0;
                this.showSlide();
            });
        });
    }

    showSlide() {
        this.slides.forEach((slide, i) => {
            slide.style.display = i === this.currentIndex ? 'block' : 'none';
        });
    }

    nextSlide() {
        this.slides[this.currentIndex].style.display = 'none';
        if(this.currentIndex < this.slides.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.slides[this.currentIndex].style.display = 'block';

        if(this.currentIndex === 2) {
            this.hanson();
        }
    }

    hanson() {
        this.block = document.querySelector('.hanson');
        this.block.style.bottom = `-100%`;
        setTimeout(() => {
            this.block.style.bottom = `0`;
        },3000);
    }
    // prevSlide() {
    //     this.slides[this.currentIndex].style.display = 'none';
    //     if(this.currentIndex > 0) {
    //         this.currentIndex--;
    //     } else {
    //         this.currentIndex = this.slides.length - 1;
    //     }
    //     this.slides[this.currentIndex].style.display = 'block';
    // }

}