//ELEMENTS

const cardRow = document.querySelectorAll(".card_row");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const btnQuestion = document.querySelectorAll(".btn_question");
const questionText = document.querySelectorAll(".question_text");

let activeState = false;

btnQuestion.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (activeState == false) {
      //remove active classes
      answer.forEach((answer) => answer.classList.remove("answer--active"));
      //set active class
      document
        .querySelector(`.answer-${btn.dataset.btn}`)
        .classList.add("answer--active");

      document
        .querySelector(`.question-${btn.dataset.btn}`)
        .classList.add(`question--active`);

      btn.style.transform = "rotate(180deg)";
      activeState = true;
    } else {
      answer.forEach((answer) => answer.classList.remove("answer--active"));
      document
        .querySelector(`.question-${btn.dataset.btn}`)
        .classList.remove(`question--active`);
      btn.style.transform = "rotate(0deg)";
      activeState = false;
    }
  });
});
