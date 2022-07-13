// Wrap every letter in a spanssadas

var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ml2 .letter",
  scale: [4, 1],
  opacity: [0, 1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 950,
  delay: (el, i) => 70 * i,
});
// Snap Scroll
cssScrollSnapPolyfill();
// Dots
let list = document.getElementsByTagName("section");

let scrollpos = window.scrollY;
let dots = document.getElementsByClassName("dot");

const add_class_on_scroll = (n) => dots[n].classList.add("dot-selected");
const remove_class_on_scroll = (n) => dots[n].classList.remove("dot-selected");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;
  let s = 0;
  for (let i = 0; i < 6; i++) {
    s += list[i].offsetHeight;

    if (scrollpos >= s) {
      add_class_on_scroll(i);
      if (i) remove_class_on_scroll(i - 1);
    } else {
      remove_class_on_scroll(i);
    }
  }
});
