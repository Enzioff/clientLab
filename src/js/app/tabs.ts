class Tabs {
    tabsContainer;
    headerEls;
    contentEls;
    selectedTab;
    selectedTabEls;
    
    constructor(el: Element) {
        this.tabsContainer = el;
        this.headerEls = this.tabsContainer.querySelectorAll('[data-tabs-head]');
        this.contentEls = this.tabsContainer.querySelectorAll('[data-tabs-item]');
        this.selectedTab = this.tabsContainer.querySelector('[data-tabs-select]');
        this.selectedTabEls = this.selectedTab.querySelectorAll('option');
        
        this.init()
    }
    
    init() {
        this.headerEls.forEach((headerEl, idx) => {
            headerEl.addEventListener('click', () => {
                this.updateClasses();
                headerEl.classList.add('active');
                if (this.contentEls.item(idx)) {
                    this.contentEls.item(idx).classList.add('active');
                }
            })
        })
        
        this.selectedTab.addEventListener('change', (evt) => {
            const target = evt.target as HTMLSelectElement;
            const idx = target.selectedIndex;
            const currentElement = this.headerEls.item(idx) as HTMLElement;
            currentElement.click();
        })
    }
    
    updateClasses() {
        this.headerEls.forEach(headerEl => headerEl.classList.remove('active'));
        this.contentEls.forEach(contentEl => contentEl.classList.remove('active'));
    }
}

export default Tabs;
