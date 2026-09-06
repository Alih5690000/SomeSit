let questionNumber=0;
let selectedCurrently=null;
let questions=[
    [
        "2+2?",
        ["1","2","4"],
        2
    ]
];
const allButts = document.querySelectorAll('.test_button');
allButts.forEach((button)=>{
    button.addEventListener("click", function(){
        if (selectedCurrently){
            selectedCurrently.classList.remove("selected");
        }
        button.classList.toggle("selected");
        selectedCurrently=button;
    });
})

function setQuestion(num){
    const buttons=[
        document.getElementById("test_button1"),
        document.getElementById("test_button2"),
        document.getElementById("test_button3")
    ]
    for (let i=0;i<3;i++){
        buttons[i].textContent=questions[num][1][i];
    }
}

setQuestion(questionNumber);

function loop(time){

    requestAnimationFrame(loop);
}