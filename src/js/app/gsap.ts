import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import {ServicesAnimation} from "../animations/services";

class Animator {
    constructor() {
        this.init();
    }
    
    init() {
        gsap.registerPlugin(ScrollTrigger);
        
        ServicesAnimation.init();
    }
}

export default Animator;
