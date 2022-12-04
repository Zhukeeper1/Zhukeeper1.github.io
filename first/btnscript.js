var vid = document.getElementById("myVideo");

function pp(){
    if (vid.paused){
        vid.play();
    }else{
        vid.pause();
    }
}

function mute(){
    if (vid.muted === true){
        vid.muted = false;
    }else{
        vid.muted = true;
    }
}


