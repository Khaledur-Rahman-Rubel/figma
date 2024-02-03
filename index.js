function freeGuide1() {
  alert(
    "This is free guide. You can learn our comapany. This is  our  best company"
  );
} /* menu button */
/* 2nd div button start */
function freeGuide2() {
  let myGuid1 = document.querySelector("#secondDivButton");
  myGuid1.innerHTML =
    "This is free guide. You can learn our comapany.This is free guide. You can learn our comapany. This is  our  best company.This is free guide. You can learn our comapany. This is  our  best company. ";
}
/* 2nd div end */
/* 4th div start */
let currentRating = 0;

const setRating = (rating) => {
  for (let i = 1; i <= 5; i++) {
    const star = document.getElementById(`star${i}`);
    if (i <= rating) {
      star.classList.remove("far");
      star.classList.add("fas");
    } else {
      star.classList.remove("fas");
      star.classList.add("far");
    }
  }
  currentRating = rating;
};

/* 4th div end */

/* 5th div start */
const fiveCardExtara = () => {
  const extraPara = document.querySelectorAll(
    "#fiveCardExtara1,#fiveCardExtara2,#fiveCardExtara3"
  );
  extraPara.forEach((element) => {
    element.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.";
  });
};

/* 5th div end */

/* six div start */
const freeGuide = () => {
  alert("This is div six Free guide.");
};
const divSixParaButton = () => {
  let guid = document.querySelector("#sixSec1ButtonPara");
  guid.innerHTML =
    "This is sixdiv para guide button.This is free guide. You can learn our comapany.This is free guide.";
};
/* six div end */
/* seven div start*/
const sevenDivBook = () => {
  alert("now send booking page");
};

/* seven div end */
/* eight div start */
const form = document.querySelector(".form");
const email = form.querySelector("#email");

const formHnadler = (e) => {
  e.preventDefault();
  alert(email.value);
};

form.addEventListener("submit", formHnadler);
/* eight div end */
