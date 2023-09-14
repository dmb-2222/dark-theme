const dot_1 = document.getElementById("dot_1");
const dot_2 = document.getElementById("dot_2");
const dot_3 = document.getElementById("dot_3");

const slider_1 = document.getElementById("slider_1");
const slider_2 = document.getElementById("slider_2");
const slider_3 = document.getElementById("slider_3");

dot_1.onclick = function () {
  if (!dot_1.classList.contains("dots-full")) {
    dot_1.classList.add("dots-full");
  }
  dot_2.classList.remove("dots-full");
  dot_3.classList.remove("dots-full");

  //slider1
  slider_1.classList.add("slider-show");
  slider_2.classList.add("slider-hide");
  slider_3.classList.add("slider-hide");
  slider_2.classList.remove("slider-show");
  slider_3.classList.remove("slider-show");
};

dot_2.onclick = function () {
  if (!dot_2.classList.contains("dots-full")) {
    dot_2.classList.add("dots-full");
  }
  dot_1.classList.remove("dots-full");
  dot_3.classList.remove("dots-full");

  //slider2
  slider_2.classList.add("slider-show");
  slider_1.classList.add("slider-hide");
  slider_3.classList.add("slider-hide");
  slider_1.classList.remove("slider-show");
  slider_3.classList.remove("slider-show");
};

dot_3.onclick = function () {
  if (!dot_3.classList.contains("dots-full")) {
    dot_3.classList.add("dots-full");
  }
  dot_1.classList.remove("dots-full");
  dot_2.classList.remove("dots-full");

  //slider3
  slider_3.classList.add("slider-show");
  slider_1.classList.add("slider-hide");
  slider_2.classList.add("slider-hide");
  slider_1.classList.remove("slider-show");
  slider_2.classList.remove("slider-show");
};
