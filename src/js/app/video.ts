class Video {
    videoContainer;
    videoElement;
    
    constructor(container: Element) {
        this.videoContainer = container;
        this.videoElement = this.videoContainer.querySelectorAll('[data-video]');
    
        this.init()
    }
    
    init() {
        this.videoElement.forEach(element => {
            const playBtn = element.querySelector('button');
            const video = element.querySelector('video');
            
            playBtn.addEventListener('click', () => {
                this.update()
                playBtn.remove();
                video.play();
            })
            
            video.addEventListener('click', () => {
                this.update()
                playBtn.remove()
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            })
        })
    }
    
    update() {
        this.videoElement.forEach(el => {
            const video = el.querySelector('video');
            
            video.pause();
        });
    }
}

export default Video;
