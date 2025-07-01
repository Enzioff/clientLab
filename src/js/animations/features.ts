import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

class FeaturesAnimation {
    static init() {
        const triggerContainer = document.querySelector('.trigger-features') as HTMLElement;
        if (!triggerContainer) return;
        const title = triggerContainer.querySelector('.features__first-title');
        const finishBlock = triggerContainer.querySelector('.features__finish');
        const features = triggerContainer.querySelectorAll('.article-feature');
        const offset = 90;
        
        const totalHeight = Array.from(features).reduce((totalHeight: number, currentElement: Element) => {
            return totalHeight + currentElement.getBoundingClientRect().height;
        }, 0);
        
        const tl = gsap.timeline();
        let currentCardsOffset = features[0].getBoundingClientRect().height;
        
        gsap.to(finishBlock, {
            opacity: 0,
            y: -60,
        })
        
        features.forEach((feature, idx) => {
            if (idx > 0) {
                const previousCardHeight = features[idx - 1].getBoundingClientRect().height
                const cardHeight = feature.getBoundingClientRect().height
                
                gsap.set(feature, {
                    y: currentCardsOffset,
                })
                
                currentCardsOffset += previousCardHeight;
            }
            
            tl
                .to(feature, {
                    y: offset * idx,
                    opacity: 1,
                })
        })
        
        ScrollTrigger.create({
            trigger: triggerContainer,
            start: 'top top',
            pin: true,
            scrub: 1,
            animation: tl,
            end: () => `+=${totalHeight}`,
            onUpdate: (trigger) => {
                const progress = Number(trigger.progress.toFixed(2));
                if (progress >= 1) {
                    gsap.to(title, {
                        opacity: 0.05,
                    })
                    gsap.to(finishBlock, {
                        opacity: 1,
                        y: 0,
                        ease: "power3",
                        duration: 1
                    })
                } else {
                    gsap.to(title, {
                        opacity: 1,
                    })
                    gsap.to(finishBlock, {
                        opacity: 0,
                        y: -60,
                    })
                }
            }
        })
    }
}

export {FeaturesAnimation}
