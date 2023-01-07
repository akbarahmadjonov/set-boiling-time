const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form-control");
const elResults = document.querySelector(".result-all");
const elConfetEffect = document.querySelector(".confet-effect");
const elSpanError = document.querySelector(".error-input");

function boilNow(boilingVal, node) {
  let newLi = document.createElement("li");
  newLi.setAttribute(
    "class",
    "mt-5 ms-2 fs-4 results text-dark d-flex d-block justify-content-center text-center"
  );

  let limitedVal = +elInput.value + 1;

  let funInterval = setInterval(() => {
    limitedVal--;
    newLi.textContent = limitedVal;
  }, 1000);

  setTimeout(() => {
    clearInterval(funInterval);
    newLi.classList.add("d-none");
    if (limitedVal == 0) {
      elConfetEffect.classList.remove("d-none");
    } else {
      elConfetEffect.classList.add("d-none");
    }
  }, limitedVal * 1000);

  elInput.value = "";
  node.appendChild(newLi);
}

function fun() {
  ew = setInterval(boilNow, 1000);
}

function stop() {
  clearInterval(ew);
}

elForm.onsubmit = (evt) => {
  evt.preventDefault();

  //   Checks if the users enter a valid value;
  if (isNaN(elInput.value)) {
    elSpanError.classList.remove("d-none");
  } else {
    elSpanError.classList.add("d-none");
  }

  if (elInput.value == "") {
    elInput.classList.add("shake");
    return false;
  } else {
    elInput.classList.remove("shake");
  }

  boilNow(elInput, elResults);
};

//* Animation

var confettiPlayers = [];
// Confetti animation effect
function makeItConfetti() {
  var confetti = document.querySelectorAll(".confetti");

  if (!confetti[0].animate) {
    return false;
  }

  for (var i = 0, len = confetti.length; i < len; ++i) {
    var snowball = confetti[i];
    snowball.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
    var scale = Math.random() * 0.8 + 0.2;
    var player = snowball.animate(
      [
        {
          transform:
            "translate3d(" + (i / len) * 100 + "vw,0,0) scale(" + scale + ")",
          opacity: scale,
        },
        {
          transform:
            "translate3d(" +
            ((i / len) * 100 + 10) +
            "vw,100vh,0) scale(" +
            scale +
            ")",
          opacity: 1,
        },
      ],
      {
        duration: Math.random() * 3000 + 3000,
        iterations: Infinity,
        delay: -(Math.random() * 5000),
      }
    );

    confettiPlayers.push(player);
  }
}

makeItConfetti();