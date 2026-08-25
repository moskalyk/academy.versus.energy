window.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById("vid");
    console.log('video')
    console.log(video)
    // video.addEventListener("seeking", (event) => {
    video.addEventListener("timeupdate", (event) => {
        console.log(Object.keys(event))
        var hours=parseInt(video.currentTime/(60*60),10);
        var minutes = parseInt(video.currentTime / 60, 10);
        var seconds = video.currentTime % 60;
        console.log(seconds)
        console.log(
            "The Boolean paused property is now 'false'. Either the play() method was called or the autoplay attribute was toggled.",
        );
    });
});


