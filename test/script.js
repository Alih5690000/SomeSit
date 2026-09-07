let questionNumber=0;
let selectedCurrently=null;
let questions=[
    {
        question:"2+2?",
        answers:["1","2","4"],
        answer:2
    }
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
});
const Answer=document.getElementById("answer");
const AnswerButt=document.getElementById("answer_button");
AnswerButt.addEventListener("click",()=>{
    if (!selectedCurrently){
        Answer.textContent="pls select";
    }
    if (selectedCurrently._nomer==questions[questionNumber].answer){
        Answer.textContent="Correct mf";
    }
    else{
        Answer.textContent="WrOnG";
    }
});

function setQuestion(num){
    const buttons=[
        document.getElementById("test_button1"),
        document.getElementById("test_button2"),
        document.getElementById("test_button3")
    ]
    for (let i=0;i<3;i++){
        buttons[i].textContent=questions[num].answers[i];
        buttons[i]._nomer=i;
    }
    const question=document.getElementById("question");
    question.textContent=questions[num].question;
}

setQuestion(questionNumber);

function loop(time){

    requestAnimationFrame(loop);
}