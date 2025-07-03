import gsap from "gsap";

class IntroAnimation {
    static init() {
        const colb = document.querySelector('.main-intro__colb')
        
        if (colb) {
            const bubble_1 = document.querySelector('#intro-bubble-1');
            const bubble_2 = document.querySelector('#intro-bubble-2');
            const bubble_3 = document.querySelector('#intro-bubble-3');
            const bubble_4 = document.querySelector('#intro-bubble-4');
            
            const bubbleTl1 = gsap.timeline({repeat: -1, delay: 1.5, ease: "none", smoothChildTiming: true})
            const bubbleTl2 = gsap.timeline({repeat: -1, delay: 3, ease: "none", smoothChildTiming: true})
            const bubbleTl3 = gsap.timeline({repeat: -1, delay: 5, ease: "none", smoothChildTiming: true})
            const bubbleTl4 = gsap.timeline({repeat: -1, delay: 6, ease: "none", smoothChildTiming: true})
            
            gsap
                .to(colb, {
                    transformOrigin: "bottom",
                    rotate: -36,
                    x: 316,
                    yPercent: 3,
                    duration: 2,
                    ease: "elastic.inOut(1.2, 0.3)"
                })
            
            bubbleTl1
                .to(bubble_1, {
                    keyframes: [
                        {x: "-=120", y: "-=120", duration: 1, opacity: 1, scale: 2, ease: "none"},
                        {x: "+=120", y: "-=320", duration: 2, opacity: 1, scale: 2.2, ease: "none"},
                        {x: "-=120", y: "-=520", duration: 3, opacity: 0, scale: 1, ease: "none"},
                    ]
                })
            
            bubbleTl2
                .to(bubble_2, {
                    keyframes: [
                        {x: "-=80", y: "-=90", duration: 1, opacity: 0.5, scale: 1, ease: "none"},
                        {x: "+=220", y: "-=220", duration: 2, opacity: 0.5, scale: 1.4, ease: "none"},
                        {x: "+=420", y: "-=520", duration: 3, opacity: 0, scale: 1, ease: "none"},
                    ]
                })
            
            bubbleTl3
                .to(bubble_3, {
                    keyframes: [
                        {x: "-=180", y: "-=190", duration: 1, opacity: 1, scale: 1.5, ease: "none"},
                        {x: "-=120", y: "-=320", duration: 2, opacity: 1, scale: 2, ease: "none"},
                        {x: "-=220", y: "-=520", duration: 3, opacity: 0, scale: 2, ease: "none"},
                    ]
                })
            
            bubbleTl4
                .to(bubble_4, {
                    keyframes: [
                        {x: "-=30", y: "-=190", duration: 1, opacity: 0.2, scale: 2, ease: "none"},
                        {x: "+=170", y: "-=320", duration: 2, opacity: 0.5, scale: 1.5, ease: "none"},
                        {x: "-=220", y: "-=520", duration: 3, opacity: 0, scale: 2, ease: "none"},
                    ]
                })
        }
    }
}

export {IntroAnimation};
