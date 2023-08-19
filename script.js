let cardsArray = document.querySelectorAll(".card");
let forms = document.querySelectorAll(".form");
let onScreenStatus;
let gameStatus = document.getElementById("status");
gameStatus.style.fontSize = '24px';
let score = 0;
let addScore = document.getElementById("score");
addScore.textContent= score;

cardsArray.forEach((card) => {
    card.addEventListener("click",()=>{
    card.classList.add("visible");
    })
});

function result(form){
    onScreenStatus = " Started ";
    gameStatus.textContent = onScreenStatus;
    let formData = new FormData(form);
    let userSelectedAnswer = formData.get("question");
    let makeUserSelectedQuestionVisible = document.querySelector(".question-overlay");
    makeUserSelectedQuestionVisible.classList.add("visible");
    if((userSelectedAnswer === "correct-100") || (userSelectedAnswer === "correct-200") || (userSelectedAnswer === "correct-300"))
    {
        alert("Correct Answer, You got it.");

        if (userSelectedAnswer === "correct-100")
        {
            score += 100;
        }
        if (userSelectedAnswer === "correct-200")
        {
            score += 200;
        }
        if (userSelectedAnswer === "correct-300")
        {
            score += 300;
        }
    }
    else if((userSelectedAnswer !== "correct-100") || (userSelectedAnswer !== "correct-200") || (userSelectedAnswer !== "correct-300"))
    {
        alert("Incorrect Answer, You missed it.");

        if (userSelectedAnswer === "incorrect-100")
        {
            score -= 100;
        }
        if (userSelectedAnswer === "incorrect-200")
        {
            score -= 200;
        }
        if (userSelectedAnswer === "incorrect-300")
        {
            score -= 300;
        }  
    }
    else if (userSelectedAnswer === null)
    {     
     alert("Please select an option before submitting.");
    }

    addScore.textContent= score;
    if(score === 1800){
        onScreenStatus = " Completed ";
        gameStatus.textContent = onScreenStatus;
        alert ("You WIN !!!");
    }
}




         
     







    
