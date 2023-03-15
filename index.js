const btnNew = document.querySelector(".btn");
const containerBody = document.querySelector(".container");
const containerTwo = document.querySelector(".container--y");
const ratingBtn = document.querySelectorAll(".rating");
const firstBtn = document.getElementById("btn1");
const secondBtn = document.getElementById("btn2");
const thirdBtn = document.getElementById("btn3");
const fourthBtn = document.getElementById("btn4");
const fifthBtn = document.getElementById("btn5");
const ratingAlert = document.querySelector(".rating-update");
//function
btnNew.addEventListener("click", function () {
  containerTwo.classList.remove("hidden");
  containerBody.classList.add("hidden");
});

// for (let i = 0; i < ratingBtn.length; i++)
//   ratingBtn[i].addEventListener("click", function () {
//     ratingBtn[i].style.backgroundColor = "red";
//   });
firstBtn.addEventListener("click", function () {
  firstBtn.classList.add("colorbtn");
  if (firstBtn.classList.contains("colorbtn")) {
    secondBtn.classList.remove("colorbtn");
    thirdBtn.classList.remove("colorbtn");
    fourthBtn.classList.remove("colorbtn");
    fifthBtn.classList.remove("colorbtn");
    ratingAlert.textContent = "You selected 1 out of 5";
  }
});
secondBtn.addEventListener("click", function () {
  secondBtn.classList.add("colorbtn");
  if (secondBtn.classList.contains("colorbtn")) {
    firstBtn.classList.remove("colorbtn");
    thirdBtn.classList.remove("colorbtn");
    fourthBtn.classList.remove("colorbtn");
    fifthBtn.classList.remove("colorbtn");
    ratingAlert.textContent = "You selected 2 out of 5";
  }
});
thirdBtn.addEventListener("click", function () {
  thirdBtn.classList.add("colorbtn");
  if (thirdBtn.classList.contains("colorbtn")) {
    firstBtn.classList.remove("colorbtn");
    secondBtn.classList.remove("colorbtn");
    fourthBtn.classList.remove("colorbtn");
    fifthBtn.classList.remove("colorbtn");
    ratingAlert.textContent = "You selected 3 out of 5";
  }
});
fourthBtn.addEventListener("click", function () {
  fourthBtn.classList.add("colorbtn");
  if (fourthBtn.classList.contains("colorbtn")) {
    firstBtn.classList.remove("colorbtn");
    secondBtn.classList.remove("colorbtn");
    thirdBtn.classList.remove("colorbtn");
    fifthBtn.classList.remove("colorbtn");
    ratingAlert.textContent = "You selected 4 out of 5";
  }
});
fifthBtn.addEventListener("click", function () {
  fifthBtn.classList.add("colorbtn");
  if (fifthBtn.classList.contains("colorbtn")) {
    firstBtn.classList.remove("colorbtn");
    secondBtn.classList.remove("colorbtn");
    thirdBtn.classList.remove("colorbtn");
    fourthBtn.classList.remove("colorbtn");
    ratingAlert.textContent = "You selected 5 out of 5";
  }
});
