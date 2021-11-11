const sign_up_btn = document.querySelector(".signup-btn");
console.log(sign_up_btn);
const sign_in_btn = document.querySelector(".signin-btn");
console.log(sign_in_btn);
const forms_wrapper = document.querySelector(".forms-wrapper");

sign_up_btn.addEventListener("click", (e) => {
  e.preventDefault();
  forms_wrapper.classList.add("change");
});

sign_in_btn.addEventListener("click", (e) => {
  e.preventDefault();
  forms_wrapper.classList.remove("change");
});

console.log("hello");
