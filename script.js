// const btn = document.getElementById("theme-toggle");
// const body = document.body;

// btn.addEventListener("click", () => {
//   body.classList.toggle("dark__mode");
//   const idDark = body.classList.contains("dark__mode");

//   localStorage.setItem("dark__mode", idDark.toString());

//   // btn.removeEventListener('click', )
// });

// const saveDarkMode = localStorage.getItem("dark__mode");
// const isDarkMode = saveDarkMode === "true";

// if (isDarkMode) {
//   body.classList.add("dark__mode");
// }

// Отримуємо посилання на кнопку за її id
const btn = document.getElementById("theme-toggle");
const body = document.body;

// Функція-обробник для події "click"
function clickHandler() {
  body.classList.toggle("dark__mode");
}

// Додаємо обробник події "click" до кнопки
btn.addEventListener("click", clickHandler);

// Через 5 секунд видаляємо обробник події "click"
setTimeout(() => {
  btn.removeEventListener("click", clickHandler);
  console.log('Обробник події "click" видалено.');
}, 5000);
