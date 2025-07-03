import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import MotionPathPlugin from "gsap/MotionPathPlugin";
import MotionPathHelper from "gsap/MotionPathHelper";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import {ServicesAnimation} from "../animations/services";
import {FeaturesAnimation} from "../animations/features";
import {IntroAnimation} from "../animations/intro";
import {FeedbackAnimation} from "../animations/feedback";

class Animator {
    constructor() {
        this.init();
    }
    
    init() {
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, MotionPathHelper, MorphSVGPlugin);
        
        ServicesAnimation.init();
        FeaturesAnimation.init();
        IntroAnimation.init();
        
        this.initFeedbackAnimation();
    }
    
    initFeedbackAnimation() {
        const feedbackBlocks = document.querySelectorAll('.feedback');
        if (!feedbackBlocks) return;
        feedbackBlocks.forEach(feedbackBlock => {
            new FeedbackAnimation(feedbackBlock);
        })
    }
}

export default Animator;
