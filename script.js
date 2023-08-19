let cardsArray = document.querySelectorAll(".card");
let forms = document.querySelectorAll(".form");

cardsArray.forEach((card) => {
    card.addEventListener("click",()=>{
    card.classList.add("visible");
    })
});

function result(form){
    let formData = new FormData(form);
    console.log(formData);
    let userSelectedAnswer = formData.get("question");
    if(userSelectedAnswer === "correct"){
       alert(" Correct Answer");
    }
    else{
        alert(" Incorrect Answer");
    }
    
}






    
