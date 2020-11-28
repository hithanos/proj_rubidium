// this js part mainly for the header part and the logo part
var header_part = document.querySelector(".nav_container");
var header_part_heading = document.getElementById("body_container_1_a");
var header_part_colour = document.querySelector(".nav_container_colour_1");
var logos = document.querySelector(".logos_info");
var logos1 = document.querySelector(".logos_info_1");
// for logo part just getting the element through the class name
var logo_1_a = document.querySelector(".one");
var logo_1_b = document.querySelector(".two");
var logo_1_c = document.querySelector(".three");
var logo_text = document.querySelector(".first_text");
var logo_text_2 = document.querySelector(".second_text");
var header_a = document.querySelectorAll(".nav_list>a>p");
var down_arrow = document.querySelector(".arrow_1");
var header_last = document.querySelector("#login");
var header_last_1 = document.querySelector("#tryfree");
var header_last_1_div = document.getElementById("header_last_div");
//checkscroll function will check where the page is
window.addEventListener("scroll", checkscroll);
var animationDone = false;
function checkscroll() {
  //getBoundingClientRect() will give the position of the element in the web page
  //   and getting the element where in web page
  var coordinates = header_part_heading.getBoundingClientRect();
  var coordinates_1 = header_part.getBoundingClientRect();
  var logos_co = logos.getBoundingClientRect();
  if (!animationDone && coordinates.top < coordinates_1.top) {
    animationDone = true;
    header_part_colour.classList.remove("nav_container_colour_1");
    header_part_colour.classList.add("nav_container_colour_2");
    logo_1_a.classList.remove("one");
    logo_1_a.classList.add("one_1");
    logo_1_b.classList.remove("two");
    logo_1_b.classList.add("two_1");
    logo_1_c.classList.remove("three");
    logo_1_c.classList.add("three_1");
    logo_text.classList.remove("first_text_1");
    logo_text.classList.add("first_text_2");
    logo_text_2.classList.remove("second_text_1");
    logo_text_2.classList.add("second_text_2");
    for (var i = 0; i < header_a.length; i++) {
      header_a[i].classList.remove("nav_color");
      header_a[i].classList.add("nav_color_1");
    }
    down_arrow.classList.remove("arrow_1");
    down_arrow.classList.add("arrow_2");
    header_last.classList.remove("nav_color");
    header_last.classList.add("nav_color_1");
    header_last_1.classList.remove("nav_color_1");
    header_last_1.classList.add("nav_color");
    header_last_1_div.classList.remove("back_color");
    header_last_1_div.classList.add("back_color_1");
  }

  //   for logo and header part change
  if (coordinates.top > coordinates_1.top) {
    logo_1_a.classList.remove("one_1");
    logo_1_a.classList.add("one");
    logo_1_b.classList.remove("two_1");
    logo_1_b.classList.add("two");
    logo_1_c.classList.remove("three_1");
    logo_1_c.classList.add("three");
    logo_text.classList.remove("first_text_2");
    logo_text.classList.add("first_text_1");
    logo_text_2.classList.remove("second_text_2");
    logo_text_2.classList.add("second_text_1");
    header_part_colour.classList.remove("nav_container_colour_2");
    header_part_colour.classList.add("nav_container_colour_1");
    for (var i = 0; i < header_a.length; i++) {
      header_a[i].classList.remove("nav_color_1");
      header_a[i].classList.add("nav_color");
    }
    down_arrow.classList.remove("arrow_2");
    down_arrow.classList.add("arrow_1");
    header_last.classList.remove("nav_color_1");
    header_last.classList.add("nav_color");
    header_last_1.classList.remove("nav_color");
    header_last_1.classList.add("nav_color_1");
    header_last_1_div.classList.remove("back_color_1");
    header_last_1_div.classList.add("back_color");
    animationDone = false;
  }

  //   this is foe setting the logo part appear and disappear
  if (logos_co.top < window.innerHeight) {
    logos1.classList.add("logos_info_2");
  }
  if (logos_co.top > window.innerHeight) {
    logos1.classList.remove("logos_info_2");
  }
}
