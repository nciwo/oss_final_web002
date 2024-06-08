video = document.getElementById("background_video");
inner = document.querySelector(".inner");

let window_height = window.innerHeight;
let window_width = window.innerWidth;
let scrollTimeout;

document.getElementById('container').style.width = window_width + "px";
document.getElementById('container').style.height = window_height + "px";

// console.log(height);
// console.log(window.innerHeight);
// console.log(document.querySelector('.container').style.height);

video.playbackRate = 0.5;
inner.addEventListener("scroll", () => {
    if(video.paused) {
        video.play();
    }
    clearTimeout(scrollTimeout);
    
    video.playbackRate = 10.0;

    scrollTimeout = setTimeout(function () {
        console.log("hi");
        video.playbackRate = 0.5;
        video.loop = true;
    }, 10);
})

// window.addEventListener("")