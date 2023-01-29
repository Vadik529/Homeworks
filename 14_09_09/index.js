const form = document.forms.mainForm;
const upperLetter = document.getElementById("upperLetter");
const phone = document.getElementById("phone");
const mail = document.getElementById("mail");
const card = document.getElementById("card");

function checkValidCondition(condition, isValid) {
  if (isValid) {
    condition.classList.remove("error");
    condition.classList.add("success");
  } else {
    condition.classList.add("error");
    condition.classList.remove("success");
  }
}

mainForm.password.addEventListener("input", function () {
  const firstUpperRegEx = /^[A-Z][a-z]+\s[A-Z][a-z]+/;
  checkValidCondition(upperLetter, firstUpperRegEx.test(this.value));
});

mainForm.phone.addEventListener("input", function () {
  const phoneRegEx = /^(\+380)\d{9}$/;
  checkValidCondition(phone, phoneRegEx.test(this.value));
});
mainForm.mail.addEventListener("input", function () {
  const mailRegEx = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  checkValidCondition(mail, mailRegEx.test(this.value));
});
mainForm.card.addEventListener("input", function () {
  const cardRegEx = /\d{4}[\s]*[-]*\d{4}[\s]*[-]*\d{4}[\s]*[-]*\d{4}$/;
  checkValidCondition(card, cardRegEx.test(this.value));
});
