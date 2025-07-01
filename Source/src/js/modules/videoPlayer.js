export default class VideoPlayer {
    constructor(selector) {
        this.players = document.querySelectorAll(selector);
        this.video = '';
        this.check = false;

        this.players.forEach(player => {
            player.addEventListener('click', (event) => {
                if (event.currentTarget.dataset.url) {
                    this.video = event.currentTarget.dataset.url;
                    this.openOverlay();
                }
            });
        });

        document.querySelector('.close').addEventListener('click', () => {
            this.closeOverlay();
        })
    }

    openOverlay() {
        const overlay = document.querySelector('.overlay');
        const container = overlay.querySelector('#frame');
        overlay.style.display = 'flex';
        container.style.height = '100%';

        container.innerHTML = `
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${this.video}?autoplay=1" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe>
        `;

        
    }
    
    closeOverlay() {
        const overlay = document.querySelector('.overlay');
        const container = overlay.querySelector('#frame');
        container.innerHTML = ``;
        overlay.style.display = 'none';
        this.check = true;
    }
}
