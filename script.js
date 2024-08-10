window.onscroll = function() {myFunction()};

var fixeditem = document.getElementById("fixeditem");
var sticky = fixeditem.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    fixeditem.classList.add("sticky");
  } else {
    fixeditem.classList.remove("sticky");
  }
}