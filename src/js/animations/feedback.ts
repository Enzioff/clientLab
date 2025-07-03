import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

class FeedbackAnimation {
    container;
    
    constructor(container: Element) {
        this.container = container;
        
        this.init();
    }
    
    init() {
        const morph1 = this.container.querySelector('#feedback-wave') as SVGPathElement;
        const morph2 = this.container.querySelector('#feedback-wave-2') as SVGPathElement;
        const morph3 = this.container.querySelector('#feedback-wave-3') as SVGPathElement;
        const bubble1 = this.container.querySelector('#feedback-bubble-1');
        const bubble2 = this.container.querySelector('#feedback-bubble-2');
        const bubble3 = this.container.querySelector('#feedback-bubble-3');
        
        const timeLine = gsap.timeline({
            repeat: -1,
        });
        
        timeLine
            .to(morph1, {duration: 2, morphSVG: morph3, ease: "none"})
            .to(morph1, {duration: 2, morphSVG: morph2, ease: "none"})
            .to(morph1, {duration: 2, morphSVG: morph1, ease: "none"})
        
        const bubbleTimeline1 = gsap.timeline({repeat: -1,})
        
        const bubbleTimeline2 = gsap.timeline({repeat: -1,})
        
        const bubbleTimeline3 = gsap.timeline({repeat: -1,})
        
        const bubbleTimelineEasing = "none";
        
        bubbleTimeline1
            .to(bubble1, {
                keyframes: [
                    {y: -280, x: -60, scale: 1.5, duration: 2, opacity: 1, ease: bubbleTimelineEasing},
                    {y: -480, x: 30, scale: 1, duration: 2, ease: bubbleTimelineEasing},
                    {y: -580, x: -100, opacity: 0, scale: 0.5, duration: 2, ease: bubbleTimelineEasing}
                ],
            })
        
        bubbleTimeline2
            .to(bubble2, {
                keyframes: [
                    {y: -280, x: 160, scale: 2, duration: 2, delay: 2, opacity: 1, ease: bubbleTimelineEasing},
                    {y: -480, x: -30, scale: 1.5, duration: 2, ease: bubbleTimelineEasing},
                    {y: -580, x: -200, opacity: 0, scale: 2, duration: 2, ease: bubbleTimelineEasing}
                ],
            })
        
        bubbleTimeline3
            .to(bubble3, {
                keyframes: [
                    {y: -280, x: 160, scale: 2, duration: 2, delay: 3.5, opacity: 1, ease: bubbleTimelineEasing},
                    {y: -480, x: -30, scale: 1.5, duration: 2, ease: bubbleTimelineEasing},
                    {y: -580, x: -200, opacity: 0, scale: 2, duration: 2, ease: bubbleTimelineEasing}
                ],
            })
    }
}

export {FeedbackAnimation};
