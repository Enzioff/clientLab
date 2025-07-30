import Swiper from "swiper";
import {Autoplay, EffectCards, Navigation, Pagination, Thumbs} from "swiper/modules";

class Slider {
    el;
    sliderType;
    buttonPrev;
    buttonPrevDesktop;
    buttonNext;
    buttonNextDesktop;
    slidesCount;
    pagination;
    desktopOnly;
    mobileOnly;
    media;
    isAuto;
    isDoubleControl;
    offset;

    constructor(el: Element) {
        this.el = el as HTMLElement;
        this.sliderType = this.el.getAttribute('data-slider');
        this.slidesCount = this.el.getAttribute('data-slides')
        this.offset = this.el.getAttribute('data-offset');
        this.isAuto = this.el.hasAttribute('data-auto');
        this.isDoubleControl = this.el.hasAttribute('data-double')
        
        this.buttonPrev = this.el.querySelector('.swiper-btn--prev');
        this.buttonNext = this.el.querySelector('.swiper-btn--next');
        this.pagination = this.el.querySelector('.swiper-pagination');

        this.media = matchMedia('(max-width: 1199px)');
        this.desktopOnly = this.el.hasAttribute('data-desktop-only');
        this.mobileOnly = this.el.hasAttribute('data-mobile-only');

        this.buttonPrevDesktop = this.el.parentElement.closest('.container').querySelector('.swiper-btn--prev');
        this.buttonNextDesktop = this.el.parentElement.closest('.container').querySelector('.swiper-btn--next');
        
        this.init();
    }

    init() {
        switch (this.sliderType) {
        case 'intro':
            this.initIntroSlider();
            break;
        case 'default':
            this.initDefaultSlider();
            break;
        case 'infinite':
            this.initInfiniteSlider();
            break;
        case 'enhanced':
            this.initEnhancedSlider();
            break;
        case 'thumbs':
            this.initThumbsSlider();
            break;
        case 'reviews':
            this.initReviewsSlider();
            break;
        case 'cards':
            this.initCardsSlider();
            break;
        }
    }
    
    initCardsSlider() {
        const slider = this.el.querySelector('.swiper');
        new Swiper(slider, {
            modules: [Navigation, EffectCards],
            slidesPerView: 1,
            spaceBetween: 35,
            watchSlidesProgress: true,
            effect: "cards",
            cardsEffect: {
                perSlideOffset: 12,
                perSlideRotate: 0,
                rotate: false,
            },
            navigation: {
                prevEl: this.buttonPrev,
                nextEl: this.buttonNext,
                disabledClass: 'swiper-btn--disabled'
            },
        })
    }

    initIntroSlider() {
        const slider = this.el.querySelector('.swiper');
        new Swiper(slider, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: this.slidesCount ? this.slidesCount : 1,
            spaceBetween: 35,
            watchSlidesProgress: true,
            navigation: {
                prevEl: this.buttonPrev,
                nextEl: this.buttonNext,
                disabledClass: 'swiper-btn--disabled'
            },
            autoplay: {
                delay: 6000,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on: {
                slideChangeTransitionStart: () => {
                    const wrapper = slider.querySelector('.swiper-wrapper') as HTMLElement;

                    wrapper.style.transitionTimingFunction = 'ease';
                    wrapper.style.transitionDuration = '0.95s';
                }
            }
        })
    }

    initDefaultSlider() {
        const slider = this.el.querySelector('.swiper');
        new Swiper(slider, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 'auto',
            spaceBetween: this.offset || 30,
            navigation: {
                prevEl: this.buttonPrev,
                nextEl: this.buttonNext,
                disabledClass: 'swiper-btn--disabled'
            },
            autoplay: this.isAuto ? {delay: 3000} : undefined,
            loop: this.isAuto ? this.isAuto : false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
              1200: {
                  slidesPerView: this.slidesCount || 'auto',
              }
            },
            on: {
                init: (swiper: Swiper) => {
                    swiper.update()
                }
            },
        })
    }
    
    initReviewsSlider() {
        const slider = this.el.querySelector('.swiper');
        new Swiper(slider, {
            modules: [],
            slidesPerView: "auto",
            spaceBetween: 30,
            loop: true,
        })
    }
    
    initInfiniteSlider() {
        const slider = this.el.querySelector('.swiper');
        new Swiper(slider, {
            modules: [Autoplay],
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 78,
            watchSlidesProgress: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 3500,
        })
    }

    initThumbsSlider() {
        const slider = this.el.querySelector('.swiper');
        const thumb = document.querySelector('[data-slider="thumb"]');
        const thumbSwiper = thumb.querySelector('.swiper');

        const thumbSlider = new Swiper(thumbSwiper, {
            modules: [Navigation],
            slidesPerView: 5,
            spaceBetween: 10,
            navigation: {
                prevEl: this.buttonPrev,
                nextEl: this.buttonNext,
                disabledClass: 'slider__btn--disabled'
            },
            breakpoints: {
                1199: {
                    spaceBetween: 20,
                }
            }
        })

        new Swiper(slider, {
            modules: [Navigation, Pagination, Thumbs],
            slidesPerView: 1,
            spaceBetween: 10,
            thumbs: {
                swiper: thumbSlider,
            },
        })
    }

    initEnhancedSlider() {
        const checkDesktopNaviagtion = (swiper: Swiper) => {
            if (this.buttonPrevDesktop && this.buttonNextDesktop) {
                this.buttonPrevDesktop.classList.toggle('slider__btn--disabled', swiper.isBeginning);
                this.buttonNextDesktop.classList.toggle('slider__btn--disabled', swiper.isEnd);

                if (swiper.isBeginning) {
                    this.buttonPrevDesktop.setAttribute('disabled', ' ');
                    this.buttonNextDesktop.removeAttribute('disabled');
                } else {
                    this.buttonNextDesktop.setAttribute('disabled', ' ');
                    this.buttonPrevDesktop.removeAttribute('disabled');
                }
            }
        }

        const slider = this.el.querySelector('.swiper');
        const currentSlider = new Swiper(slider, {
            modules: [Navigation],
            slidesPerView: 'auto',
            spaceBetween: 10,
            watchSlidesProgress: true,
            watchOverflow: true,
            navigation: {
                prevEl: this.buttonPrev,
                nextEl: this.buttonNext,
                disabledClass: 'slider__btn--disabled'
            },
            breakpoints: {
                1199: {
                    slidesPerView: this.slidesCount ? this.slidesCount : 'auto',
                    spaceBetween: 30,
                }
            },
            on: {
                init: (swiper: Swiper) => {
                    checkNavigation(swiper);
                    checkDesktopNaviagtion(swiper);
                },
                slideChange: (swiper: Swiper) => {
                    checkDesktopNaviagtion(swiper);
                },
                resize: function () {
                    checkNavigation(this);
                },
            }
        })

        if (this.buttonPrevDesktop) {
            this.buttonPrevDesktop.addEventListener('click', (e) => {
                currentSlider.slidePrev()
            })
        }

        if (this.buttonNextDesktop) {
            this.buttonNextDesktop.addEventListener('click', (e) => {
                currentSlider.slideNext()
            })
        }

        function checkNavigation(swiper: Swiper) {
            if (swiper.slides.length <= swiper.params.slidesPerView) {
                if (swiper.navigation.nextEl && swiper.navigation.prevEl) {
                    swiper.navigation.nextEl.style.display = 'none';
                    swiper.navigation.prevEl.style.display = 'none';
                }
            } else {
                if (swiper.navigation.nextEl && swiper.navigation.prevEl) {
                    swiper.navigation.nextEl.style.display = 'flex';
                    swiper.navigation.prevEl.style.display = 'flex';
                }
            }
        }
    }
}

export default Slider
