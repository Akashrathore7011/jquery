let video = document.querySelector("#video");
window.onscroll = function(){
    videoCtime = Math.floor(video.currentTime);
    // console.log(videoCtime);
    scrollYpos = Math.floor(window.pageYOffset/100);
    video.currentTime = scrollYpos;
    console.log(videoCtime,scrollYpos);
};