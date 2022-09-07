import "./style.scss";

var toolbar = document.querySelectorAll(".toolbar div");
var allOption = document.querySelector(".allOption");
var progressBar = document.querySelector(".progressBar div");
var arrOptions = ["Opt 1 ", "Opt 2 ", "Opt 3"];

allOption.addEventListener("click", function (event) {
  allOption.classList.add("on");

  progressBar.classList.add("progressBarFill");

  var timeoutHandle = setTimeout(function () {
    document.getElementById("optionSelected").innerHTML = "All";
    progressBar.classList.remove("progressBarFill");
  }, 3000);

  for (let i = 1; i < toolbar.length; i++) {
    toolbar[i].classList.remove("on");
  }
});

for (let i = 1; i < toolbar.length; i++) {
  toolbar[i].addEventListener("click", function (event) {
    if (!toolbar[i].classList.contains("on")) {
      window.clearTimeout(timeoutHandle);

      progressBar.classList.add("progressBarFill");
      toolbar[i].classList.add("on");
      unmarkAllOption();

      var timeoutHandle = setTimeout(function () {
        printText(i);
        progressBar.classList.remove("progressBarFill");
      }, 3000);
    }
  });
}

function unmarkAllOption() {
  if (allOption.classList.contains("on")) {
    allOption.classList.remove("on");
    document.getElementById("optionSelected").innerHTML = "";
  }
}
function printText(numOption) {
  var textAdded;

  var currentText = document.getElementById("optionSelected");
  switch (numOption) {
    case 1:
      var newText = "Opt 1, " + currentText.innerHTML;
      currentText.appendChild(document.createTextNode(newText));
      break;
    case 2:
      currentText.appendChild(document.createTextNode("Opt 2, "));

      break;
    case 3:
      currentText.appendChild(document.createTextNode("Opt 3"));
      break;
  }
}
function addStr(str, index, stringToAdd) {
  return (
    str.substring(0, index) + stringToAdd + str.substring(index, str.length)
  );
}
