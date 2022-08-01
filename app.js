const left=document.querySelector(".left");
const right=document.querySelector(".right");
const div_lenght=document.querySelectorAll(".card").length;
const container=document.querySelector(".images");



left.addEventListener("click",sola);
right.addEventListener("click",saga);

const size=container.clientWidth;
let index=0;
function sola(){
    index++;
    if(index>div_lenght-1){
        index=0;
    }
    container.style.transform=`translateX(-${index*size}px)`;
    
}
function saga(){
    index--;
    if(index<0){
        index=div_lenght-1;
    }
    container.style.transform=`translateX(-${(index)*size}px)`;
}