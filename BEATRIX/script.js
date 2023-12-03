
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let masterImg = document.getElementById('masterImg');

const listCont = document.getElementById('listCont');
const inputBox = document.getElementById("lis");

let songs = [
    {songName: "Attention", filePath: "songs/1.mp3", coverPath: "songimg/1.jpg"},
    {songName: "Ektarfa", filePath: "songs/2.mp3", coverPath: "songimg/2.webp"},
    {songName: "Gulmohar", filePath: "songs/3.mp3", coverPath: "songimg/3.jpg"},
    {songName: "Kesariya From Brahmastra", filePath: "songs/4.mp3", coverPath: "songimg/4.jpg"},
    {songName: "My Mind & Me", filePath: "songs/5.mp3", coverPath: "songimg/5.webp"},
    {songName: "Har Ek Pal", filePath: "songs/6.mp3", coverPath: "songimg/6.jpg"},
    {songName: "Perfect", filePath: "songs/7.mp3", coverPath: "songimg/7.jpeg"},
    {songName: "Mahiye Jinna Sohna", filePath: "songs/8.mp3", coverPath: "songimg/8.jpg"},
    {songName: "Ruaan", filePath: "songs/9.mp3", coverPath: "songimg/9.jpg"},
    {songName: "Satranga From ANIMAL", filePath: "songs/10.mp3", coverPath: "songimg/10.jpg"},
    {songName: "Baby", filePath: "songs/11.mp3", coverPath: "songimg/11.jpg"},
    {songName: "Love-Me-Like-You-Do", filePath: "songs/12.mp3", coverPath: "songimg/12.jpg"},
    {songName: "Scars-To-Your-Beautiful", filePath: "songs/13.mp3", coverPath: "songimg/13.jpg"},
    {songName: "We-Don't-Talk-Anymore", filePath: "songs/14.mp3", coverPath: "songimg/14.jpg"},
    {songName: "Who-Says", filePath: "songs/15.mp3", coverPath: "songimg/15.jpg"},
    {songName: "Im-Faded", filePath: "songs/16.mp3", coverPath: "songimg/16.jpg"},
    {songName: "Paradise", filePath: "songs/17.mp3", coverPath: "songimg/17.jpg"},
    {songName: "What If I Told You That I Love You", filePath: "songs/18.mp3", coverPath: "songimg/18.jpg"},
    {songName: "Scared-Of-Love", filePath: "songs/19.mp3", coverPath: "songimg/19.jpg"},
    {songName: "I-Love-You-Baby", filePath: "songs/20.mp3", coverPath: "songimg/20.jpg"}
]

songItems.forEach((element, i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.add('btncont');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('btncont');
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        masterPlay.classList.remove('btncont');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        
        
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        masterImg.src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        masterPlay.classList.add('btncont');
        audioElement.play();
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=19){
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    masterImg.src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        masterPlay.classList.add('btncont');
        audioElement.play();
})

document.getElementById('pre').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    masterImg.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    masterPlay.classList.add('btncont');
    audioElement.play();
})

// let listFav = document.getElementById('listFav');

// let cover = document.getElementById('cover');
// let favsongname = document.getElementById('favsongname');

// Array.from(document.getElementsByClassName('favButton')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         listFav.classList.add('favList');
//         listFav.classList.remove('fav');
//         songIndex = parseInt(e.target.id);
//         audioElement.src=`songs/${songIndex+1}.mp3`;
//         favsongname.innerHTML = songs[songIndex].songName;
//         cover.src = songs[songIndex].coverPath;
//     })
// })

