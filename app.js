console.log("welocome to Spotify");

//initialise the variables

let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.querySelector("#masterPlay");
let myProgressBar=document.querySelector("#myProgressBar");
let gif=document.querySelector("#gif");
let songItems=document.querySelectorAll(".songItem")
let masterSongName=document.querySelector("#masterSongName");


let songs=[
    {songName: "Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "oh oh jane jana",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "ishq samjhava",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "oh baby",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "mainu pasand nahi",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "rubaru",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "sawariyan",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName: "kurbaan hua",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "ramaiya vasta vaiya",filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
    {songName: "kya baat hai",filePath:"song/10.mp3",coverPath:"covers/10.jpg"}
]
for(let i=0;i<songItems.length;i++){
    console.log(songItems[i])
    songItems[i].querySelector("img").src=songs[i].coverPath;
    songItems[i].querySelector(".songName").innerText=songs[i].songName;
}



masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity=0;

    }
})



//Listen to Events
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    //update Seeker
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value=progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})



let songItemPlay= document.querySelectorAll(".songItemPlay");

const makeAllPlays=()=>{
    for(let i=0;i<songItemPlay.length;i++){
        songItemPlay[i].classList.remove("fa-pause-circle");
        songItemPlay[i].classList.add("fa-play-circle")
    }
}


for(let i=0;i<songItemPlay.length;i++){
    songItemPlay[i].addEventListener("click",(e)=>{
       
        makeAllPlays();
        let songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-play-circle");
    })
}

let backwardbtn= document.querySelector(".fa-step-backward");
backwardbtn.addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=9;
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-play-circle");
})

let forwardbtn= document.querySelector(".fa-step-forward");
forwardbtn.addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-play-circle");
})