import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import {ServicesAnimation} from "../animations/services";
import {FeaturesAnimation} from "../animations/features";

class Animator {
    constructor() {
        this.init();
    }
    
    init() {
        gsap.registerPlugin(ScrollTrigger);
        
        ServicesAnimation.init();
        FeaturesAnimation.init();
    }
}

export default Animator;
