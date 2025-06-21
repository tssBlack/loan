import Slider from "./modules/slider";
import videoPlayer from "./modules/videoPlayer";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page','.next');
    const video = new videoPlayer('.play');
    
});