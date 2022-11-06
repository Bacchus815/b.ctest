
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function () {
    h2.innerText = "mouse is here!";
    h2.style.color = "#1abc9c";
  },
  handleMouseLeave: function () {
    h2.innerText = "mouse is gone!";
    h2.style.color = "#3498db";
  },
  handleWindowResiz: function () {
    h2.innerText = "You just resized!";
    h2.style.color = "#9b59b6";
  },
  handleMouseRightButton: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = "#f39c12";
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
h2.addEventListener("resize", superEventHandler.handleWindowResize);
h2.addEventListener("contextmenu", superEventHandler.handleMouseRightButton);
