const mySong = document.getElementById("mySong")
const icon = document.getElementById("icon")

icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src='mus-img/pause.png';
    }else{
        mySong.pause();
        icon.src='mus-img/play.png';
    }
}