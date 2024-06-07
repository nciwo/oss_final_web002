video = document.getElementById("background_video");
inner = document.querySelector(".inner");

let height = window.innerHeight;
let width = window.innerWidth;
let scrollTimeout;

document.querySelector('.container').style.width = width;
document.querySelector('.container').style.height = height;
console.log(height);
console.log(window.innerHeight);
console.log(document.querySelector('.container').style.height);


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