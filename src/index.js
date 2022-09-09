import "./style.scss";

var toolbar = document.querySelectorAll(".toolbar div");
var allOption = document.querySelector(".allOption");
var progressBar = document.querySelector(".progressBar div");
var timeoutHandle;
var arrOptions = { opt1: false, opt2: false, opt3: false };
var textModified = "";

onClickAllOption();
onClickOtherOptions();

function onClickAllOption() {
  allOption.addEventListener("click", function (event) {
    resetAnimation();
    resetArrOptions();
    allOption.classList.add("on");

    addProgressBar();
    unmarkOthersOptions();

    timeoutHandle = setTimeout(function () {
      removeProgressBar();
      changeText("All");
    }, 3000);
  });
}

function onClickOtherOptions() {
  for (let i = 1; i < toolbar.length; i++) {
    toolbar[i].addEventListener("click", function (event) {
      resetAnimation();

      if (!toolbar[i].classList.contains("on")) {
        addProgressBar();
        toolbar[i].classList.add("on");
        unmarkAllOption();
        printText(i);
        timeoutHandle = setTimeout(function () {
          changeText(textModified);
          removeProgressBar();
        }, 3000);
      }
    });
  }
}

function resetAnimation() {
  clearTimeout(timeoutHandle);
  progressBar.style.animation = "none";
  progressBar.offsetHeight; /* trigger reflow */
  progressBar.style.animation = null;
}
function resetArrOptions() {
  arrOptions = { opt1: false, opt2: false, opt3: false };
}
function addProgressBar() {
  progressBar.classList.add("progressBarFill");
}
function removeProgressBar() {
  progressBar.classList.remove("progressBarFill");
}
function unmarkAllOption() {
  if (allOption.classList.contains("on")) {
    allOption.classList.remove("on");
  }
}
function unmarkOthersOptions() {
  for (let i = 1; i < toolbar.length; i++) {
    toolbar[i].classList.remove("on");
  }
}

function printText(numOption) {
  var currentText = document.getElementById("optionSelected");
  switch (numOption) {
    case 1:
      arrOptions[0] = true;
      if (arrOptions[1] == true || arrOptions[2] == true) {
        textModified = "Opt 1, " + textModified;
      } else textModified = "Opt 1";
      break;
    case 2:
      arrOptions[1] = true;
      if (arrOptions[0] === true) {
        if (arrOptions[2] === true) {
          textModified = "Opt1, Opt2, Opt 3";
        } else textModified = ", Opt 2";
      } else {
        if (arrOptions[2] === true) {
          textModified = "Opt 2, " + textModified;
        } else textModified = "Opt 2";
      }
      break;

    case 3:
      arrOptions[2] = true;
      if (arrOptions[0] == true || arrOptions[1] == true) {
        textModified = textModified + ", Opt 3";
      } else textModified = "Opt 3";
      break;
  }
}

function changeText(newText) {
  document.getElementById("optionSelected").replaceChildren(newText);
}
