class Menu {
    menu;
    burger;
    body;
    
    constructor(menu: Element) {
        this.menu = menu;
        this.burger = document.querySelector('[data-burger]');
        this.body = document.querySelector('body');
        
        this.init()
    }
    
    init() {
        this.burger.addEventListener('click', () => {
            this.menu.classList.toggle('active');
            if (this.menu.classList.contains('active')) {
                this.body.classList.add('fixed');
            } else {
                this.body.classList.remove('fixed');
            }
        })
    }
}

export default Menu;
