const clickfaqs = document.querySelectorAll(".click-faq, .click-faq-um, .click-faq-dois, .click-faq-tres");
const questions = document.querySelectorAll("#question-one, #question-dois, #question-tres, #question-quatro");

const tradeimgs = document.querySelectorAll(".click-faq img, .click-faq-um img, .click-faq-dois img, .click-faq-tres img");


let imgUm = "src/assets/arrow-down.svg"
let imgDois = "src/assets/arrow-up.svg"


clickfaqs.forEach((faq, index) =>{
faq.addEventListener("click", function(event){
  event.preventDefault();

  tradeimgs[index].src = tradeimgs[index].src.includes(imgUm) ? imgDois : imgUm;
  questions[index].classList.toggle("hidden");
})
});