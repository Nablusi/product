let cardHover = document.querySelectorAll(".card-hover");
let addElement = document.querySelectorAll(".add-hover");

console.log(cardHover)


for(let i=0; i< cardHover.length;i++){
    cardHover[i].onmouseover = function(){
        addElement[i].classList.add("active");
    }
    cardHover[i].onmouseout = function(){
        addElement[i].classList.remove("active");
    }
}
 

//##############################################################
// calling elemert for video

let btnVideo = document.querySelectorAll(".btn-video");
let video = document.querySelector(".second-video");
let backgroundVideo = document.querySelector(".background-video");
let puase = document.querySelector(".btn-puase");

document.createAttribute("muted");
document.createAttribute("autoplay");

//video.setAttributeNode(muted);
// video.setAttributeNode(autoplay);


console.log(btnVideo);
console.log(video);
console.log(backgroundVideo);

for(let i=0;i<btnVideo.length;i++){
    btnVideo[i].onclick = function(){
        backgroundVideo.style.marginTop="-1000px";
        video.play();
        
    }
}

puase.onclick =function(){
    backgroundVideo.style.marginTop="0";
    video.pause();
}

