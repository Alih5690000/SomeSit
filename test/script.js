let questionNumber=0;
let selectedCurrently=null;
let questions=[
    {
        question:"2+2?",
        answers:["1","2","4"],
        answer:2
    },
    {
        question:"3+2?",
        answers:["1","5","4"],
        answer:1
    },
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
        return;
    }
    if (selectedCurrently._nomer==questions[questionNumber].answer){
        Answer.textContent="Correct mf";
        const nextButt=document.getElementById("next_button");
        nextButt.style.display="block";
    }
    else{
        Answer.textContent="WrOnG";
    }
});
const nextButt=document.getElementById("next_button");
nextButt.addEventListener("click",()=>{
    selectedCurrently=null;
    document.querySelectorAll(".test_button").forEach(button => {
        button.classList.remove("selected");
    });
    nextButt.style.display = "none";
    questionNumber++;
    if (questionNumber >= questions.length) {
        Answer.textContent = "Test finished!";
        document.querySelectorAll(".test_button").forEach(button => {
            button.style.display="none";
        });
        nextButt.style.display = "none";
        return;
    }
    Answer.textContent="";
    setQuestion(questionNumber);
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