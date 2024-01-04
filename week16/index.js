/* const updateButtonState = () => {
  const form = document.getElementById("form");
  const validity = form.checkValidity();

  document.getElementById("submit").disabled = !validity;
};

Array.from(document.querySelectorAll("input")).forEach((elm) =>
  elm.addEventListener("change", updateButtonState)
);
*/

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  submit.disabled = !checkbox.checked;
});

let validationRegex = [
  { regex: /.{8,}/ }, // min 8 letters,
  { regex: /[0-9]/ }, // numbers from 0 - 9
  { regex: /[a-z]/ }, // letters from a - z (lowercase)
  { regex: /[A-Z]/ }, // letters from A-Z (uppercase),
  { regex: /[^A-Za-z0-9]/ }, // special characters
];

const submit = document.getElementById("submit");
const form = document.getElementById("form");
const password = document.getElementById("password");

password.addEventListener("input", (event) => {
  const failingValidation = validationRegex.find(
    (d) => !d.regex.test(password.value)
  );
  const isPasswordComplex = !failingValidation;

  password.setCustomValidity(
    isPasswordComplex
      ? ""
      : "Пароль должен содержать заглавные буквы, цифры и спец. символы"
  );
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(Object.fromEntries(new FormData(form)));

  form.reset();
});

const input = document.querySelectorAll("input");
Array.from(input).forEach((elm) => {
  elm.addEventListener("focus", () => {
    elm.style.border = "1px solid grey";
  });

  elm.addEventListener("blur", () => {
    elm.style.removeProperty("border");
  });
});
