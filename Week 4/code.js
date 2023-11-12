function startFun() {
    //log for debugging purposes
    console.log("startFun() started");
    //turn off start button
    document.getElementById("startButton").disabled = true;
    //turn on stop button
    document.getElementById("stopButton").disabled = false;
    //start moving marquee
    document.getElementById("myMarquee").start();
}

function stopFun() {
    //log for debugging purposes
    console.log("stopFun() started");
    //turn off stop button
    document.getElementById("stopButton").disabled = true;
    //turn on start button
    document.getElementById("startButton").disabled = false;
    //stop marquee from moving
    document.getElementById("myMarquee").stop();
}