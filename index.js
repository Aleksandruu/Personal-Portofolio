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

    if (scrollpos >= s - 20) {
      add_class_on_scroll(i);
      if (i) remove_class_on_scroll(i - 1);
    } else {
      remove_class_on_scroll(i);
    }
  }
});
