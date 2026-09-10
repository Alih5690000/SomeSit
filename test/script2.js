const bestScore=document.getElementById("bestScore");
let best=localStorage.getItem("best");
if (best){
    bestScore.textContent=localStorage.getItem("best");
    bestScore.textContent+="%";
}
else{
    bestScore.textContent="N/A";
}
const d=document.getElementById("box");
const dd=document.getElementById("up_box");
let width=null;
window.addEventListener("load",()=>{
    dd.style.top=d.offsetTop+"px";
    dd.style.left=d.offsetLeft+"px";
    const rect=d.getBoundingClientRect();
    if (localStorage.getItem("best")){
        width=rect.width*(Number(localStorage.getItem("best"))/100);
    }
    else{
        width=0;
    }
    requestAnimationFrame(loop);
});
var last=0;
var dt=0;
function loop(time){
    dt=(time-last)/1000.0;
    last=time;
    if (50*dt>width-dd.offsetWidth){
        dd.style.width=width+"px";
    }
    else{
        dd.style.width=Number(dd.style.width.slice(0,-2))+50*dt+"px";
    }
    requestAnimationFrame(loop);
}