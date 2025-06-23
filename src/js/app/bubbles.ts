class Bubbles {
    container;
    elements;
    
    constructor(container: Element) {
        this.container = container;
        this.elements = this.container.querySelectorAll('[data-bubble]')
        this.init();
    }
    
    init() {
        this.elements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.classList.add('active');
            })
            
            el.addEventListener('mouseleave', () => {
                el.classList.remove('active');
            })
        })
    }
}

export default Bubbles;
