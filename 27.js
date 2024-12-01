const selector = document.querySelector("#colorSelector");

selector.onchange = function () {
  
  document.querySelector("body").style.backgroundColor = selector.value;
};