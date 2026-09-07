const bestScore=document.getElementById("bestScore");
let best=localStorage.getItem("best");
if (best){
    bestScore.textContent=localStorage.getItem("best");
    bestScore.textContent+="%";
}
else{
    bestScore.textContent="N/A";
}