import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
iframe.setAttribute("data-vimeo-id", "19231868");


const player = new Player("vimeo-player", {
    id: 19231868,
});


player.on("timeupdate", throttle((data) => {

    localStorage.setItem("videoplayer_current_time", data.seconds);

}, 1000));


if (localStorage.getItem("videoplayer_current_time")) {
    
        player.setCurrentTime(localStorage.getItem("videoplayer_current_time"));
    };
