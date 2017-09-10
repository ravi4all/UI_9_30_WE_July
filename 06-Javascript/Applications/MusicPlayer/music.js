window.addEventListener("load", init);

function init(){
    audio = document.getElementById("audio");
    
    a = document.getElementsByClassName("cl_1");
    
    document.getElementById("playSong").addEventListener("click", playMusic);
    document.getElementById("pauseSong").addEventListener("click", pauseMusic);
    
    for(var i=0; i<a.length; i++){
        a[i].addEventListener("click", playSong);
    }
    
}

function playSong(){
    songName = event.srcElement.innerHTML;
    audio.src = 'audio/'+songName+'.mp3';
    audio.play();
    /*customPlayer();*/
    setInterval(customPlayer, 500);
}

function playMusic(){
    audio.play();
}

function pauseMusic(){
    audio.pause();
}

function customPlayer(){
    slider = document.getElementById("slider");
//    slider.max = audio.duration;
    /*slider.style.transform = 'translate('+audio.duration+',0px)'*/
    slider.value = parseInt(audio.currentTime);
}