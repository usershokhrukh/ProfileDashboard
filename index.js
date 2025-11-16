const elBurger = document.querySelector(".navbar__burger");
const elTextArea = document.querySelector(".navbar__textarea");
const elIconPath = document.querySelector(".navbar__icons-path");
const elProfileFormButton = document.querySelector(".profileform__button");

const elBody = document.querySelector("body");
const elTitle = document.querySelector(".navbar__title");
const elLink = document.querySelectorAll(".navbar__link");
const elLeftIcons = document.querySelectorAll(".navbar__left-icons");
const elDayBox = document.querySelector(".navbar__day-box");
const elNavbarIcon = document.querySelectorAll(".navbar__profile");
const elNavbarBurgerItems = document.querySelectorAll(".navbar__burger-items");
const elHeaderBoxBurger = document.querySelector(".navbar__box-phone");
const elNavbarIconUser = document.querySelectorAll(".navbar__icon-user");
const elIconSet = document.querySelector(".navbar__profile-choose");
const elProfileBoxTop = document.querySelector(".navbar__profile-box-top");
const elTextInfo = document.querySelectorAll(".navbar__text-info");
const elProfileTextSpan = document.querySelectorAll(".navbar__profile-sub");
const elNavbarButton = document.querySelector(".navbar__profile-button");
const elProfileClose = document.querySelector(".navbar__profile-close");
const elProfileForm = document.querySelector(".profileform__form");
const elProfileText = document.querySelectorAll(".profileform__text");
const elProfileInputs = document.querySelectorAll(".profileform__input");

let showHideReport = false;
let showHideIconSet = false;
let nightLight = false;
let userEntered = false;
var includesEmailGlobal = false;
let elProfileINputCheck = false;
let elEmailChecked = false;
let color = "black";
let burgerAnimate = false;
let colorChange = false;
let dayNight = false;
let showChoose = false;
function burgerAnimateF(color) {
  if (!burgerAnimate) {
    burgerAnimate = true;
    elNavbarBurgerItems[0].style.cssText = `
                  visibility: hidden;
                  // transition: all 0.2s ease-in-out;
                  background-color: ${color};

                `;
    elNavbarBurgerItems[1].style.cssText = `
                  transform: rotate(45deg);
                  background-color: ${color};
                  transition: all 0.2s ease-in-out;

                `;
    elNavbarBurgerItems[2].style.cssText = `
                  position: relative;
                  top: -4.5px;
                  transition: all 0.2s ease-in-out;
                  transform: rotate(-45deg);
                  background-color:${color};
                `;
  } else {
    burgerAnimate = false;
    elNavbarBurgerItems[0].style.cssText = `
                  background-color: ${color};
                  transition: all 0.2s ease-in-out;
                `;
    elNavbarBurgerItems[1].style.cssText = `
                  background-color: ${color};
                  transform: rotate(0deg);
                  transition: all 0.2s ease-in-out;
                `;
    elNavbarBurgerItems[2].style.cssText = `
                  background-color: ${color};
                  transform: rotate(0deg );
                  transition: all 0.2s ease-in-out;
                `;
  }
}

function blackToWhite() {
  colorChange = false;
  color = "black";
  elBody.style.cssText = `
    background-color: var(--white);
  `;
  elTitle.style.cssText = `
    color: var(--colorBlack);
  `;

  for (var i = 0; i <= 5; i++) {
    elLink[i].style.cssText = `
      color: var(--colorBlack);
    `;

    elProfileTextSpan[i].style.cssText = `
      color: var(--colorBlack);
    `;

    if (i >= 0 && i <= 1) {
      elLeftIcons[i].style.cssText = `
        color: var(--colorBlack);
      `;
    }

    switch (i) {
      case 0: {
        elNavbarBurgerItems[i].style.cssText = `
          background-color: var(--colorBlack);
        `;
        break;
      }
      case 1: {
        elNavbarBurgerItems[i].style.cssText = `
          background-color: var(--colorBlack);
        `;
        break;
      }
      case 2: {
        elNavbarBurgerItems[
          i
        ].style.cssText = `background-color: var(--colorBlack)`;
        break;
      }
    }
  }

  elBurger.addEventListener("click", () => {
    burgerAnimateF("black");
  });

  elTextArea.style.cssText = `
    background-color: var(--white)
  `;
  elProfileBoxTop.style.cssText = `
    border-bottom: 1px solid var(--colorBlack);
  `;
  if (!userEntered) {
    elProfileForm.style.cssText = `
      display: flex;
      background-color: var(--colorGray);
    `;
  } else {
    elProfileForm.style.cssText = `
      background-color: var(--colorGray);
    `;
  }
  if (!showChoose) {
    elIconSet.style.cssText = `
      right: 30px;
      background-color: var(--colorGray);
    `;
  } else {
    elIconSet.style.cssText = `
      display: flex;
      right: 30px;
      background-color: var(--colorGray);
    `;
  }
}

function whiteToBlack() {
  colorChange = true;
  color = "white";
  elBody.style.cssText = `
    background-color: var(--colorBlack)
  `;
  elTitle.style.cssText = `
    color: var(--white)
  `;

  for (var i = 0; i <= 5; i++) {
    elLink[i].style.cssText = `
      color: var(--white);
    `;

    elProfileTextSpan[i].style.cssText = `
      color: var(--white);
    `;

    if (i >= 0 && i <= 1) {
      elLeftIcons[i].style.cssText = `
        color: var(--white);
      `;
    }

    switch (i) {
      case 0: {
        elNavbarBurgerItems[i].style.cssText = `
          background-color: var(--white);
        `;
        break;
      }
      case 1: {
        elNavbarBurgerItems[i].style.cssText = `
          background-color: var(--white);
        `;
        break;
      }
      case 2: {
        elNavbarBurgerItems[i].style.cssText = `background-color: var(--white)`;
        break;
      }
    }
  }

  elBurger.addEventListener("click", () => {
    burgerAnimateF("white");
  });

  elTextArea.style.cssText = `
    background-color: var(--colorGray)
  `;
  elProfileBoxTop.style.cssText = `
    border-bottom: 1px solid var(--colorGray);
  `;

  if (!userEntered) {
    elProfileForm.style.cssText = `
      display: flex;
      background-color: var(--colorGray);
    `;
  } else {
    elProfileForm.style.cssText = `
      background-color: var(--colorGray);
    `;
  }

  if (!showChoose) {
    elIconSet.style.cssText = `
      right: 30px;
      background-color: var(--colorDarkGray);
    `;
  } else {
    elIconSet.style.cssText = `
      display: flex;
      right: 30px;
      background-color: var(--colorDarkGray);
    `;
  }
}

function formShow() {
  elProfileForm.style.cssText = `
    display: flex;
    animation-name: showForm;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  `;
}

formShow();
console.log(elLeftIcons);

elDayBox.addEventListener("click", () => {
  if (!dayNight) {
    dayNight = true;
    whiteToBlack();
    elLeftIcons[0].style.cssText = `
            visibility: visible;

          `;
    elLeftIcons[1].style.cssText = `
            visibility: hidden;
          `;
  } else {
    dayNight = false;
    blackToWhite();
    elLeftIcons[0].style.cssText = `
            visibility: hidden;

          `;
    elLeftIcons[1].style.cssText = `
            visibility: visible;
          `;
  }
});

function start() {
  if (userEntered) {
    elProfileClose.addEventListener("click", () => {
      elIconSet.style.cssText = `
              animation: none;
              display: none;
            `;
      showHideIconSet = false;
    });

    elNavbarIcon[0].addEventListener("click", () => {
      if (!showHideIconSet) {
        showChoose = true;
        if (!colorChange) {
          elIconSet.style.cssText = `
              display: flex;
              animation-name: showIconSet;
              animation-duration: 0.3s;
              animation-fill-mode: forwards;

            `;
        } else {
          elIconSet.style.cssText = `
              display: flex;
              animation-name: showIconSet;
              animation-duration: 0.3s;
              animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);

            `;
        }

        showHideIconSet = true;
      } else {
        showChoose = false;
        elIconSet.style.cssText = `
              animation: none;
              display: none;
            `;
        showHideIconSet = false;
      }
    });

    elNavbarIcon[1].addEventListener("click", () => {
      if (!showHideIconSet) {
        showChoose = true;
        if (!colorChange) {
          elIconSet.style.cssText = `
                display: flex;
                top: -150px;
                margin-bottom: -130px;
                animation-name: showIconSetPhone;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;

              `;
        } else {
          elIconSet.style.cssText = `
                display: flex;
                top: -150px;
                margin-bottom: -130px;
                animation-name: showIconSetPhone;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);
                
              `;
        }

        showHideIconSet = true;
      } else {
        showChoose = false;
        elIconSet.style.cssText = `
              animation: none;
              display: none;
            `;
        showHideIconSet = false;
      }
    });

    elNavbarButton.addEventListener("click", (e) => {
      if (!elTextArea.value.trim()) {
        if (!colorChange) {
          elTextArea.style.cssText = `
            border: 1px solid red;
          `;
        } else {
          elTextArea.style.cssText = `
            border: 1px solid red;
            background-color: var(--colorGray);
          `;
        }
      } else {
        elNavbarIcon[0].innerHTML = `
            ${elTextArea.value.trim()}
          `;
        elNavbarIcon[1].innerHTML = `
            ${elTextArea.value.trim()}
          `;
        elNavbarIcon[2].innerHTML = `
            ${elTextArea.value.trim()}
          `;
      }
      elNavbarButton.disabled = true;
      elNavbarButton.style.cssText = `
          opacity: 0.7;

        `;
    });

    elBurger.addEventListener("click", () => {
      if (!showHideReport) {
        showHideReport = true;
        if (!colorChange) {
          elHeaderBoxBurger.style.cssText = `
                display: block;
                animation-name: showHeaderBox;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                `;
        } else {
          elHeaderBoxBurger.style.cssText = `
                display: block;
                background-color: var(--colorDarkGray);
                animation-name: showHeaderBox;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
              `;
        }
      } else {
        showHideReport = false;
        elHeaderBoxBurger.style.cssText = `
                display: none;
                animation: none;
            `;
      }
      if (userEntered) {
        burgerAnimateF(color);
      }
    });

    function headerBurgerWork() {
      if (window.innerWidth < 650) {
        if (!showHideReport) {
          elBurger.style.cssText = `
            display: flex;
          `;
          elIconSet.style.cssText = `
            display: none;
          `;
        }
      } else {
        if (burgerAnimate) {
          burgerAnimate = true;
          burgerAnimateF(color);
        }

        elBurger.style.cssText = `
          display: none;
        `;
        elIconSet.style.cssText = `
            display: none;
          `;
        elHeaderBoxBurger.style.cssText = `
          visibility: hidden;
        `;
        showHideReport = false;
      }
      return 0;
    }
    headerBurgerWork();
    window.addEventListener("resize", () => {
      headerBurgerWork();
    });
  }
}

start();

function elProfileInputsWork(index) {
  elProfileInputs[index].addEventListener("click", () => {
    elProfileInputs[index].style.cssText = `
      border: 1px solid var(--colorUser);
    `;

    elProfileText[index].style.cssText = `
      animation-name: inputText;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
      color: var(--colorUser)
    `;

    if (index == 3) {
      elEmailChecked = true;
    }
  });
}
elProfileInputsWork(0);
elProfileInputsWork(1);
elProfileInputsWork(2);
elProfileInputsWork(3);
elProfileInputsWork(4);
elProfileInputsWork(5);

window.addEventListener("keydown", () => {
  if (elTextArea.value.trim()) {
    if (!colorChange) {
      elTextArea.style.cssText = `
            border: none;
          `;
    } else {
      elTextArea.style.cssText = `
            border: none;
            background-color: var(--colorGray);
            `;
    }

    elNavbarButton.style.cssText = `
            opacity: 1;
          `;
    elNavbarButton.disabled = false;
  }
  if (
    Number(elProfileInputs[2].value.trim()) < 120 &&
    elProfileInputs[2].value.trim().length > 0
  ) {
    elProfileText[2].textContent = "Correct";
    elProfileInputs[2].style.cssText = `
      border: 1px solid var(--colorUser);
    `;

    elProfileText[2].style.cssText = `
      animation-name: inputText;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
      color: var(--colorUser)
    `;
  } else if (Number(elProfileInputs[2].value.trim()) >= 120) {
    elProfileText[2].textContent = "Should be less than 120";
    elProfileInputs[2].style.cssText = `
                border: 1px solid red;
              `;
    elProfileText[2].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
          `;
  }

  if (
    elProfileInputs[3].value.trim()[
      elProfileInputs[3].value.trim().length - 1
    ] != "@" &&
    includesEmailGlobal
  ) {
    elProfileText[3].textContent = "Correct";
    elProfileInputs[3].style.cssText = `
      border: 1px solid var(--colorUser);
    `;

    elProfileText[3].style.cssText = `
      animation-name: inputText;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
      color: var(--colorUser)
    `;
  }

  if (elEmailChecked) {
    var includesInEmail = elProfileInputs[3].value.trim().includes("@");
    includesEmailGlobal = includesInEmail;
    if (!includesInEmail) {
      elProfileText[3].textContent = "There must be '@'";
      elProfileInputs[3].style.cssText = `
                border: 1px solid red;
              `;
      elProfileText[3].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
    } else if (includesInEmail) {
      for (var i = 0; i < elProfileInputs[3].value.trim().length; i++) {
        if (elProfileInputs[3].value.trim()[i] == "@") {
          if (
            elProfileInputs[3].value.trim()[
              elProfileInputs[3].value.trim().length - 1
            ] == "@"
          ) {
            elProfileText[3].textContent = "Please write text after '@'";
            elProfileInputs[3].style.cssText = `
                border: 1px solid red;
              `;
            elProfileText[3].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
          }
        }
      }
    }
  }
});

elProfileFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  let accept = 0;

  for (var i = 0; i <= 5; i++) {
    if (!elProfileInputs[i].value.trim()) {
      elProfileInputs[i].style.cssText = `
                border: 1px solid red;
              `;
      elProfileText[i].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
    }
  }

  if (
    elProfileInputs[3].value.trim()[
      elProfileInputs[3].value.trim().length - 1
    ] != "@" &&
    includesEmailGlobal
  ) {
    elProfileText[3].textContent = "Correct";

    if (Number(elProfileInputs[2].value.trim()) < 120) {
      for (var i = 0; i <= 5; i++) {
        if (!elProfileInputs[i].value.trim()) {
          elProfileInputs[i].style.cssText = `
                border: 1px solid red;
              `;
          elProfileText[i].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
        } else {
          accept++;
        }
      }
    } else {
      elProfileText[2].textContent = "Should be less than 120";

      elProfileInputs[2].style.cssText = `
                border: 1px solid red;
              `;
      elProfileText[2].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
          `;
    }
  }

  if (accept == 6) {
    elProfileFormButton.style.cssText = `
      animation-name: block;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    `;

    elProfileFormButton.disabled = true;

    for (var i = 0; i <= 5; i++) {
      elProfileInputs[i].style.cssText = `
        animation-name: accepted;
        animation-duration: 0.1s;
        animation-delay: ${i / 4}s;
        animation-fill-mode: forwards;
      `;
      elProfileText[i].style.cssText = `
        animation-name: acceptedText;
        animation-duration: 0.1s;
        animation-delay: ${i / 4}s;
        animation-fill-mode: backwards;
        top: 0px;
        transform: translateX(-4px);
      `;
    }

    elProfileForm.style.cssText = `
      display: flex;
      animation-name: closeForm;
      animation-duration: 0.5s;
      animation-delay: 2s;
      animation-fill-mode: forwards;
    `;

    userEntered = true;
    start();

    function userNames(inputs) {
      const userInputFirst = inputs.value.trim().toLowerCase();
      const userNameFinal = userInputFirst[0]
        .toUpperCase()
        .concat(userInputFirst.slice(1));

      return userNameFinal;
    }

    elProfileTextSpan[0].textContent = userNames(elProfileInputs[0]);
    elProfileTextSpan[1].textContent = userNames(elProfileInputs[1]);

    for (var i = 2; i <= 5; i++) {
      elProfileTextSpan[i].textContent = elProfileInputs[i].value.trim();
    }
  }
});
