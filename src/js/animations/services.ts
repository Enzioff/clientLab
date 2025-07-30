import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

class ServicesAnimation {
    static init() {
        const triggerContainer = document.querySelector('.services-trigger');
        if (!triggerContainer) return;
        const benefits = triggerContainer.querySelectorAll(".article-benefit");
        const offset = 200;
        
        if (window.innerWidth < 1200) return;
        
        benefits.forEach((element, idx) => {
            element.classList.add('shadow')
            gsap.to(element, {
                y: -offset * idx,
            })
            
            ScrollTrigger.create({
                trigger: element,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    element.classList.remove('shadow');
                    gsap.to(element, {
                        y: 0,
                        duration: 0.5
                    });
                    gsap.to(Array.from(benefits).slice(idx + 1), {
                        y: `+=${offset}`,
                        duration: 0.5
                    });
                },
                onEnterBack: () => {
                    gsap.to(Array.from(benefits).slice(idx + 1), {
                        y: `-=${offset}`,
                        duration: 0.5
                    });
                }
            })
        })
    }
}

export {ServicesAnimation}
