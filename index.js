//profile dashboard
const elBurger = document.querySelector(".navbar__burger");
const elTextArea = document.querySelector(".navbar__textarea");
const elIconPath = document.querySelector(".navbar__icons-path");
const elProfileFormButton = document.querySelector(".profileform__button");
const elMainLoader = document.querySelector(".main__loader");
const elBody = document.querySelector("body");
const elTitle = document.querySelector(".navbar__title");
const elLink = document.querySelectorAll(".navbar__link");
const elLeftIcons = document.querySelectorAll(".navbar__left-icons");
const elDayBox = document.querySelectorAll(".navbar__day-box");
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
const elProfileColors = document.querySelectorAll(".navbar__profile-colors");
const elProfileId = document.querySelectorAll(".profileform__id");
const elProfileTextId = document.querySelectorAll(".profileform__textid");
const elAbout = document.querySelector(".about");
const elAboutText = document.querySelectorAll(".about__text");
let reportGroups = 0;
let windowSize = window.innerWidth;
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
let hasText = false;
let profileColorsIndex = 0;
let profileColorsBg = "var(--colorUserOpacity)";
let profileColor = "var(--colorUser)";
let showNavbarSections = false;
let innerStatus = false;
elProfileId[0].textContent = Math.random().toFixed(6) * 10 ** 6;
elProfileId[1].textContent = elProfileId[0].textContent;

//-----------------------------------------------------------------
// task profile
let userNamesList = [];
let userNamesIndex = [];
// let userIndexBool = false;
const elTaskRemove = document.querySelector(".task__remove");
const elTask = document.querySelector(".task");
const elTaskLeft = document.querySelector(".task__left");
const elTaskTitle = document.querySelector(".task__title");
const elTaskInputs = document.querySelector(".task__inputs");
const elTaskText = document.querySelector(".task__text");
const elTaskButton = document.querySelector(".task__button");
const elTaskRight = document.querySelector(".task__right");
const elTaskRightIcons = document.querySelector(".task__right-icons");
const elTaskRightTextSpan = document.querySelector(".task__right-text-span");
const elTaskRightInput = document.querySelector(".task__right-input");
const elTaskRightInputLabel = document.querySelector(
  ".task__right-input-label"
);
const elTaskRightTitle = document.querySelector(".task__right-title");
const elTaskRightText = document.querySelector(".task__right-text");
const elTaskMain = document.querySelector(".task__main");
const elTaskTrashInput = document.querySelector(".task__trash-input");
const elTaskTrashSpan = document.querySelector(".task__trash-span");
const elTaskTrashText = document.querySelector(".task__trash-text");
let elTaskItem = document.querySelectorAll(".task__items");
let showTaskForm = false;
let userNameRepeat = false;

// functions
function showTask() {
  if (!colorChange) {
    elTaskLeft.style.cssText = `
    animation-name: showForm;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 3.5s;
    border: 1px solid ${profileColor};
    background-color: var(--colorGray);
  `;
    elTaskRight.style.cssText = `
    animation-name: showForm;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 3.5s;
    border: 1px solid ${profileColor};
    background-color: var(--colorGray);
  `;
  } else {
    elTaskLeft.style.cssText = `
    animation-name: showForm;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 3.5s;
    border: 1px solid ${profileColor};
    background-color: var(--colorDarkGray);
  `;
    elTaskRight.style.cssText = `
    animation-name: showForm;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 3.5s;
    border: 1px solid ${profileColor};
    background-color: var(--colorDarkGray);
  `;
  }
}

function clearMain() {
  // userIndexBool = false;
  elTaskTrashSpan.textContent = `${elTaskTrashInput.value.trim()}`;
  elTaskTrashInput.value = ``;
  if (!elTaskTrashSpan.textContent) {
    elTaskTrashText.style.cssText = `
      color: red;
    `;
  } else {
    elTaskTrashText.style.cssText = `
      color: var(--colorBlack);
    `;
  }

  if (elTaskTrashSpan.textContent) {
    if (elTaskTrashSpan.textContent == "-1") {
      elTaskMain.innerHTML = ``;
      reportGroups = 0;
      elTaskRightTextSpan.textContent = `${reportGroups}`;
    } else if (Number(elTaskTrashSpan.textContent) > 0) {
      elTaskItem[Number(elTaskTrashSpan.textContent) - 1].remove();
      reportGroups--;
      elTaskRightTextSpan.textContent = `${reportGroups}`;
    } else {
      elTaskTrashText.style.cssText = `
      color: red;
    `;
    }
  }
}

elTaskRemove.addEventListener("click", () => {
  clearMain();
  if (elTaskTrashSpan.textContent) {
    elTaskTrashText.style.cssText = `
      color: var(--colorBlack);
    `;
  }
});

//code
elTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  let enterStart = false;
  userNameRepeat = false;
  if (elTaskInputs.value.trim()) {
    for (var i = 0; i < userNamesList.length; i++) {
      if (userNamesList[i] == elTaskInputs.value.trim()) {
        userNameRepeat = true;
      }
    }
  }

  if (!userNameRepeat) {
    userNamesList.push(`${elTaskInputs.value.trim()}`);
  }

  if (showTaskForm) {
    if (!elTaskInputs.value.trim()) {
      enterStart = false;
      elTaskText.textContent = `Enter name of task`;
      if (!colorChange) {
        elTaskInputs.style.cssText = `
          background-color: var(--white);
          color: var(--colorBlack);
          border: 1px solid red;
        `;
      } else {
        elTaskInputs.style.cssText = `
          background-color: var(--colorOpacityBlack);
          color: var(--colorBlack);
          border: 1px solid red;
        `;
      }

      elTaskText.style.cssText = `
        animation-name: warningTask;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        color: red;
      `;
    } else {
      if (!colorChange) {
        elTaskInputs.style.cssText = `
          background-color: var(--white);
          color: var(--colorBlack);
          border: 1px solid var(--colorUser);
        `;
      } else {
        elTaskInputs.style.cssText = `
          background-color: var(--colorOpacityBlack);
          color: var(--colorBlack);
          border: 1px solid var(--colorUser);
        `;
      }

      elTaskText.style.cssText = `
        animation: none;
        color: var(--colorUser);
      `;
      enterStart = true;
    }
    if (enterStart) {
      if (userNameRepeat) {
        elTaskText.textContent = `Name is repeating`;
        if (!colorChange) {
          elTaskInputs.style.cssText = `
          background-color: var(--white);
          color: var(--colorBlack);
          border: 1px solid red;
          `;

          elTaskText.style.cssText = `
          animation-name: warningTask;
          animation-duration: 0.4s;
          animation-fill-mode: forwards;
          color: red;
          `;
        } else {
          elTaskInputs.style.cssText = `
          background-color: var(--colorOpacityBlack);
          color: var(--colorBlack);
          border: 1px solid red;
          `;

          elTaskText.style.cssText = `
          animation-name: warningTask;
          animation-duration: 0.4s;
          animation-fill-mode: forwards;
          color: red;
          `;
        }
      }

      if (!userNameRepeat) {
        reportGroups++;
        elTaskMain.innerHTML += `
          <div class="task__items">
              <p class="task__items-text"><span class="task__items-text-span">${reportGroups}</span>  ${elTaskInputs.value.trim()}</p>
            </div>
        `;
        elTaskRightTextSpan.textContent = `${reportGroups}`;
        elTaskItem = document.querySelectorAll(".task__items");
        elTaskInputs.value = ``;
        for (var i = 0; i < elTaskItem.length; i++) {
          if (!colorChange) {
            elTaskItem[i].style.cssText = `
              background-color: var(--white)
            `;
          } else {
            elTaskItem[i].style.cssText = `
              background-color: var(--colorOpacityBlack);
            `;
          }
        }
      }
    }
  }
});

//-------------------------------------------------------------------

window.addEventListener("resize", () => {
  windowSize = window.innerWidth;
  if (windowSize < 650) {
    if (color == "white") {
      showNavbarSections = false;
      elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorGray);
                border: 1px solid ${profileColor};
              `;
    } else {
      showNavbarSections = false;
      elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorDarkGray);
                border: 1px solid ${profileColor};
              `;
    }
  }
});

function profileColors(proColor) {
  elNavbarIcon[0].style.cssText = `
      border: 1px solid ${proColor};
      background-color: ${profileColorsBg};
    `;
  elNavbarIcon[1].style.cssText = `
      border: 1px solid ${proColor};
      background-color: ${profileColorsBg};
    `;
  elNavbarIcon[2].style.cssText = `
      border: 1px solid ${proColor};
      background-color: ${profileColorsBg};
    `;
  if (windowSize < 650) {
    if (color == "white") {
      if (showNavbarSections) {
        elAbout.style.cssText = `
              animation-name: showNavbarSectionsPhone;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);
              border: 1px solid ${proColor};
            `;
      } else {
        elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorDarkGray);
                border: 1px solid ${proColor};
              `;
      }
      for (var i = 0; i < 3; i++) {
        elAboutText[i].style.cssText = `
            color: var(--colorOpacityBlack);
          `;
      }
    } else {
      if (showNavbarSections) {
        elAbout.style.cssText = `
              animation-name: showNavbarSectionsPhone;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorGray);
              border: 1px solid ${proColor};
            `;
      } else {
        elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorGray);
                border: 1px solid ${proColor};
              `;
      }
      for (var i = 0; i < 3; i++) {
        elAboutText[i].style.cssText = `
            color: var(--colorBlack);
          `;
      }
    }
  } else {
    if (color == "white") {
      if (showNavbarSections) {
        elAbout.style.cssText = `
              animation-name: showNavbarSections;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);
              border: 1px solid ${proColor};
            `;
      } else {
        elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorDarkGray);
                border: 1px solid ${proColor};
              `;
      }
      for (var i = 0; i < 3; i++) {
        elAboutText[i].style.cssText = `
            color: var(--colorOpacityBlack);
          `;
      }
    } else {
      if (showNavbarSections) {
        elAbout.style.cssText = `
              animation-name: showNavbarSections;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorGray);
              border: 1px solid ${proColor};
            `;
      } else {
        elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorGray);
                border: 1px solid ${proColor};
              `;
      }
      for (var i = 0; i < 3; i++) {
        elAboutText[i].style.cssText = `
            color: var(--colorBlack);
          `;
      }
    }
  }

  elTaskRightText.style.cssText = `
    background-color: ${proColor};
  `;

  if (!colorChange) {
    elTaskLeft.style.cssText = `
    animation-none;
    visibility: visible;
    border: 1px solid ${proColor};
    background-color: var(--colorGray);
  `;
    elTaskRight.style.cssText = `
    animation-none;
    visibility: visible;
    border: 1px solid ${proColor};
    background-color: var(--colorGray);
  `;
  } else {
    elTaskLeft.style.cssText = `
    animation-none;
    visibility: visible;
    border: 1px solid ${proColor};
    background-color: var(--colorDarkGray);
  `;
    elTaskRight.style.cssText = `
    animation-none;
    visibility: visible;
    border: 1px solid ${proColor};
    background-color: var(--colorDarkGray);
  `;
  }

  elTaskButton.style.cssText = `
    background-color: ${proColor};
  `;

  if (windowSize < 650) {
    if (color == "black") {
      elIconSet.style.cssText = `
                display: flex;
                top: 90px;
                right: 10px;
                margin-bottom: -130px;
                animation-name: showIconSetPhone;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${proColor};
                background-color: var(--colorGray);
              `;
    } else {
      elIconSet.style.cssText = `
                display: flex;
                right: 10px;
                top: 90px;
                margin-bottom: -130px;
                animation-name: showIconSetPhone;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${proColor};
                background-color: var(--colorDarkGray);
                
              `;
    }
  } else {
    if (color == "black") {
      elIconSet.style.cssText = `
                display: flex;
                right: 30px;
                // top: -150px;
                // margin-bottom: -130px;
                animation-name: showIconSetPhone2;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${proColor};
                background-color: var(--colorGray);
                
              `;
    } else {
      elIconSet.style.cssText = `
                display: flex;
                right: 30px;
                // top: -150px;
                // margin-bottom: -130px;
                animation-name: showIconSetPhone2;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${proColor};
                background-color: var(--colorDarkGray);
                
              `;
    }
  }
  if (window.innerWidth <= 650) {
    if (showHideReport) {
      showHideReport = true;
      if (!colorChange) {
        elHeaderBoxBurger.style.cssText = `
                display: block;
                animation-name: showHeaderBox;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${proColor}
                `;
      } else {
        elHeaderBoxBurger.style.cssText = `
                display: block;
                background-color: var(--colorDarkGray);
                animation-name: showHeaderBox;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${proColor}
              `;
      }
    } else {
      elHeaderBoxBurger.style.cssText = `
                display: none;
                animation: none;
                border: 1px solid ${proColor}
            `;
    }
  }
  if (!userEntered) {
    elProfileForm.style.cssText = `
        display: flex;
        border: 1px solid ${proColor};
      `;
  }
}

function setProfileColor(profileSwitchIndex) {
  switch (profileSwitchIndex) {
    case 0: {
      profileColors(profileColor);
      break;
    }
    case 1: {
      profileColors(profileColor);

      break;
    }
    case 2: {
      profileColors(profileColor);
      break;
    }
    case 3: {
      profileColors(profileColor);
      break;
    }
    case 4: {
      profileColors(profileColor);
      break;
    }
    case 5: {
      profileColors(profileColor);
      break;
    }
    case 6: {
      profileColors(profileColor);
      break;
    }
    case 7: {
      profileColors(profileColor);
      break;
    }
    case 8: {
      profileColors(profileColor);
      break;
    }
    case 9: {
      profileColors(profileColor);
      break;
    }
  }
}

elProfileColors[0].addEventListener("click", () => {
  profileColorsIndex = 0;
  profileColor = "var(--colorUser)";
  setProfileColor(0);
});

elProfileColors[1].addEventListener("click", () => {
  profileColorsIndex = 1;
  profileColor = `var(--colorUserGreen)`;
  setProfileColor(1);
});
elProfileColors[2].addEventListener("click", () => {
  profileColorsIndex = 2;
  profileColor = "var(--colorUserYellow)";
  setProfileColor(2);
});
elProfileColors[3].addEventListener("click", () => {
  profileColorsIndex = 3;
  profileColor = "var(--colorUserPurple)";
  setProfileColor(3);
});
elProfileColors[4].addEventListener("click", () => {
  profileColorsIndex = 4;
  profileColor = "var(--colorUserBlack)";
  setProfileColor(4);
});

elProfileColors[5].addEventListener("click", () => {
  profileColorsIndex = 5;
  profileColorsBg = "var(--colorUserOpacity)";
  setProfileColor(5);
});

elProfileColors[6].addEventListener("click", () => {
  profileColorsIndex = 6;
  profileColorsBg = "var(--colorUserGreenOpacity)";
  setProfileColor(6);
});

elProfileColors[7].addEventListener("click", () => {
  profileColorsIndex = 7;
  profileColorsBg = "var(--colorUserYellowOpacity)";
  setProfileColor(7);
});

elProfileColors[8].addEventListener("click", () => {
  profileColorsIndex = 8;
  profileColorsBg = "var(--colorUserPurpleOpacity)";
  setProfileColor(8);
});

elProfileColors[9].addEventListener("click", () => {
  profileColorsIndex = 9;
  profileColorsBg = "var(--colorUserBlackOpacity)";
  setProfileColor(9);
});

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
  elProfileTextId[0].style.cssText = `
    color: var(--colorBlack);
  `;
  elProfileTextId[1].style.cssText = `
    color: var(--colorBlack);
  `;
  elBody.style.cssText = `
    background-color: var(--white);
  `;
  elTitle.style.cssText = `
    color: var(--colorBlack);
  `;
  elProfileId[0].style.cssText = `
    color: var(--colorBlack);
  `;
  elProfileId[1].style.cssText = `
    color: var(--colorBlack);
  `;

  elTaskTitle.style.cssText = `
    color: var(--colorBlack);
  `;

  elTaskInputs.style.cssText = `
    background-color: var(--white);
    color: var(--colorBlack);
  `;

  elTaskRightTitle.style.cssText = `
    color: var(--colorBlack);
  `;

  if (elTaskItem) {
    for (var i = 0; i < elTaskItem.length; i++) {
      elTaskItem[i].style.cssText = `
        background-color: var(--white);
      `;
    }
  }

  if (showTaskForm) {
    elTaskLeft.style.cssText = `
    animation-none;
    visibility: visible;
    border: 1px solid ${profileColor};
    background-color: var(--colorGray);
  `;
    elTaskRight.style.cssText = `
    animation-none;
    visibility: visible;
    border: 1px solid ${profileColor};
    background-color: var(--colorGray);
  `;
  } else {
    elTaskLeft.style.cssText = `
    animation-none;
    visibility: hidden;
    border: 1px solid ${profileColor};
    background-color: var(--colorGray);
  `;
    elTaskRight.style.cssText = `
    animation-none;
    visibility: hidden;
    border: 1px solid ${profileColor};
    background-color: var(--colorGray);
  `;
  }

  for (var i = 0; i <= 5; i++) {
    elProfileInputs[i].style.cssText = `
      background-color: var(--white)
    `;
  }

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
  if (windowSize < 650) {
    if (showNavbarSections) {
      elAbout.style.cssText = `
                animation-name: showNavbarSectionsPhone;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
                background-color: var(--colorGray);
                border: 1px solid ${profileColor};

              `;
    } else {
      elAbout.style.cssText = `
                  visibility: hidden;
                  animation: none;
                  background-color: var(--colorGray);
                  border: 1px solid ${profileColor};

                `;
    }
    for (var i = 0; i < 3; i++) {
      elAboutText[i].style.cssText = `
              color: var(--colorBlack);
            `;
    }
  } else {
    if (showNavbarSections) {
      elAbout.style.cssText = `
                animation-name: showNavbarSections;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
                background-color: var(--colorGray);
                border: 1px solid ${profileColor};

              `;
    } else {
      elAbout.style.cssText = `
                  visibility: hidden;
                  animation: none;
                  background-color: var(--colorGray);
                  border: 1px solid ${profileColor};

                `;
    }
    for (var i = 0; i < 3; i++) {
      elAboutText[i].style.cssText = `
              color: var(--colorBlack);
            `;
    }
  }

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
      border: 1px solid ${profileColor}
    `;
  } else {
    elProfileForm.style.cssText = `
      background-color: var(--colorGray);
      border: 1px solid ${profileColor}
    `;
  }
  if (windowSize < 650) {
    if (!showChoose) {
      showChoose = false;
      elIconSet.style.cssText = `
      display: none;
      right: 10px;
      top: 90px;
      margin-bottom: -130px;
      background-color: var(--colorGray);
      border: 1px solid ${profileColor};

    `;
    } else {
      showChoose = true;
      elIconSet.style.cssText = `
      display: flex;
      right: 10px;
      top: 90px;
      margin-bottom: -130px;
      background-color: var(--colorGray);
      border: 1px solid ${profileColor};

    `;
    }
  } else {
    if (!showChoose) {
      showChoose = false;
      elIconSet.style.cssText = `
      display: none;
      right: 30px;
      // top: -150px;
      // margin-bottom: -130px;
      background-color: var(--colorGray);
      border: 1px solid ${profileColor};

    `;
    } else {
      showChoose = true;
      elIconSet.style.cssText = `
      display: flex;
      right: 30px;
      // top: -150px;
      // margin-bottom: -130px;
      background-color: var(--colorGray);
      border: 1px solid ${profileColor};

    `;
    }
  }

  elProfileClose.style.cssText = `
  color: var(--colorBlack);
`;
}

function whiteToBlack() {
  colorChange = true;
  color = "white";

  elProfileTextId[0].style.cssText = `
    color: var(--white);
  `;
  elProfileTextId[1].style.cssText = `
    color: var(--white);
  `;
  elBody.style.cssText = `
    background-color: var(--colorBlack)
  `;
  elTitle.style.cssText = `
    color: var(--white)
  `;
  elProfileId[0].style.cssText = `
    color: var(--white);
  `;
  elProfileId[1].style.cssText = `
    color: var(--white);
  `;

  elTaskTitle.style.cssText = `
    color: var(--white);
  `;

  elTaskInputs.style.cssText = `
    background-color: var(--colorOpacityBlack);
  `;

  elTaskRightTitle.style.cssText = `
    color: var(--white);
  `;

  if (elTaskItem) {
    for (var i = 0; i < elTaskItem.length; i++) {
      elTaskItem[i].style.cssText = `
        background-color: var(--colorOpacityBlack);
      `;
    }
  }

  if (showTaskForm) {
    elTaskLeft.style.cssText = `
    animation-none;
    visibility: visible;
    border: 1px solid ${profileColor};
    background-color: var(--colorDarkGray);
  `;
    elTaskRight.style.cssText = `
    animation-none;
    visibility: visible;
    border: 1px solid ${profileColor};
    background-color: var(--colorDarkGray);
  `;
  } else {
    elTaskLeft.style.cssText = `
    animation-none;
    visibility: hidden;
    border: 1px solid ${profileColor};
    background-color: var(--colorDarkGray);
  `;
    elTaskRight.style.cssText = `
    animation-none;
    visibility: hidden;
    border: 1px solid ${profileColor};
    background-color: var(--colorDarkGray);
  `;
  }

  for (var i = 0; i <= 5; i++) {
    elProfileInputs[i].style.cssText = `
      background-color: var(--colorOpacityBlack);
    `;
  }

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
  if (windowSize < 650) {
    if (showNavbarSections) {
      elAbout.style.cssText = `
              animation-name: showNavbarSectionsPhone;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);
              border: 1px solid ${profileColor};

            `;
    } else {
      elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorDarkGray);
                border: 1px solid ${profileColor};

              `;
    }
    for (var i = 0; i < 3; i++) {
      elAboutText[i].style.cssText = `
            color: var(--colorOpacityBlack);
          `;
    }
  } else {
    if (showNavbarSections) {
      elAbout.style.cssText = `
              animation-name: showNavbarSections;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);
              border: 1px solid ${profileColor};

            `;
    } else {
      elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorDarkGray);
                border: 1px solid ${profileColor};

              `;
    }
    for (var i = 0; i < 3; i++) {
      elAboutText[i].style.cssText = `
            color: var(--colorOpacityBlack);
          `;
    }
  }

  elTextArea.style.cssText = `
    background-color: var(--colorGray)
  `;
  elProfileBoxTop.style.cssText = `
    border-bottom: 1px solid var(--colorGray);
  `;

  if (!userEntered) {
    elProfileForm.style.cssText = `
      display: flex;
      background-color: var(--colorSecondBlack);
      border: 1px solid ${profileColor}
    `;
  } else {
    elProfileForm.style.cssText = `
      background-color: var(--colorGray);
      border: 1px solid ${profileColor}
    `;
  }
  if (windowSize < 650) {
    if (!showChoose) {
      showChoose = false;
      elIconSet.style.cssText = `
      display: none;
      right: 10px;
      top: 90px;
      margin-bottom: -130px;
      background-color: var(--colorDarkGray);
      border: 1px solid ${profileColor};

    `;
    } else {
      showChoose = true;
      elIconSet.style.cssText = `
      display: flex;
      right: 10px;
      top: 90px;
      margin-bottom: -130px;
      background-color: var(--colorDarkGray);
      border: 1px solid ${profileColor};

    `;
    }
  } else {
    if (!showChoose) {
      showChoose = false;
      elIconSet.style.cssText = `
      display: none;
      right: 30px;
      // top: -150px;
      // margin-bottom: -130px;
      background-color: var(--colorDarkGray);
      border: 1px solid ${profileColor};

    `;
    } else {
      showChoose = true;
      elIconSet.style.cssText = `
      display: flex;
      right: 30px;
      // top: -150px;
      // margin-bottom: -130px;
      background-color: var(--colorDarkGray);
      border: 1px solid ${profileColor};

    `;
    }
  }

  elProfileClose.style.cssText = `
  color: var(--white);
`;
}

function formShow() {
  elProfileForm.style.cssText = `
    display: flex;
    animation-name: showForm;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    border: 1px solid ${profileColor}
  `;
}

formShow();

elDayBox[0].addEventListener("click", () => {
  if (colorChange) {
    elIconSet.style.cssText = `
                display: flex;
                // top: -150px;
                // margin-bottom: -130px;
                animation-name: showIconSetPhone;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${profileColor};
                background-color: var(--colorDarkGray);

                
              `;
  } else {
    elIconSet.style.cssText = `
                display: flex;
                // top: -150px;
                // margin-bottom: -130px;
                animation-name: showIconSetPhone;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${profileColor};
                background-color: var(--colorGray);

                
              `;
  }

  if (!dayNight) {
    dayNight = true;
    whiteToBlack();
    elLeftIcons[0].style.cssText = `
            visibility: visible;

          `;
    elLeftIcons[1].style.cssText = `
            visibility: hidden;
          `;
    elLeftIcons[2].style.cssText = `
            visibility: visible;

          `;
    elLeftIcons[3].style.cssText = `
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
    elLeftIcons[2].style.cssText = `
            visibility: hidden;

          `;
    elLeftIcons[3].style.cssText = `
            visibility: visible;
          `;
  }
});

elDayBox[1].addEventListener("click", () => {
  if (showHideReport) {
    showHideReport = true;
    if (colorChange) {
      elHeaderBoxBurger.style.cssText = `
                display: block;
                animation-name: showHeaderBox;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${profileColor};

                `;
    } else {
      elHeaderBoxBurger.style.cssText = `
                display: block;
                background-color: var(--colorDarkGray);
                animation-name: showHeaderBox;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${profileColor};

              `;
    }
  } else {
    showHideReport = false;
    showChoose = false;
    elIconSet.style.cssText = `
          display: none;
        `;
    elHeaderBoxBurger.style.cssText = `
                display: none;
                animation: none;
            `;
  }
  if (!dayNight) {
    dayNight = true;
    whiteToBlack();
    elLeftIcons[2].style.cssText = `
            visibility: visible;

          `;
    elLeftIcons[3].style.cssText = `
            visibility: hidden;
          `;
    elLeftIcons[0].style.cssText = `
            visibility: visible;

          `;
    elLeftIcons[1].style.cssText = `
            visibility: hidden;
          `;
  } else {
    dayNight = false;
    blackToWhite();
    elLeftIcons[2].style.cssText = `
            visibility: hidden;

          `;
    elLeftIcons[3].style.cssText = `
            visibility: visible;
          `;
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
    elLink[1].addEventListener("click", () => {
      if (color == "white") {
        if (!showNavbarSections) {
          showNavbarSections = true;
          elAbout.style.cssText = `
              animation-name: showNavbarSections;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);
              border: 1px solid ${profileColor};
            `;
        } else {
          showNavbarSections = false;
          elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorDarkGray);
                border: 1px solid ${profileColor};
              `;
        }
        for (var i = 0; i < 3; i++) {
          elAboutText[i].style.cssText = `
            color: var(--colorOpacityBlack);
          `;
        }
      } else {
        if (!showNavbarSections) {
          showNavbarSections = true;
          elAbout.style.cssText = `
              animation-name: showNavbarSections;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorGray);
              border: 1px solid ${profileColor};
            `;
        } else {
          showNavbarSections = false;
          elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorGray);
                border: 1px solid ${profileColor};
              `;
        }
        for (var i = 0; i < 3; i++) {
          elAboutText[i].style.cssText = `
            color: var(--colorBlack);
          `;
        }
      }
    });

    elLink[4].addEventListener("click", () => {
      if (color == "white") {
        if (!showNavbarSections) {
          showNavbarSections = true;
          elAbout.style.cssText = `

              animation-name: showNavbarSectionsPhone;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);
              border: 1px solid ${profileColor};

            `;
        } else {
          showNavbarSections = false;
          elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorDarkGray);
                border: 1px solid ${profileColor};
              `;
        }
        for (var i = 0; i < 3; i++) {
          elAboutText[i].style.cssText = `
            color: var(--colorOpacityBlack);
          `;
        }
      } else {
        if (!showNavbarSections) {
          showNavbarSections = true;
          elAbout.style.cssText = `
              animation-name: showNavbarSectionsPhone;
              animation-duration: 0.4s;
              animation-fill-mode: forwards;
              background-color: var(--colorGray);
              border: 1px solid ${profileColor};

            `;
        } else {
          showNavbarSections = false;
          elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorGray);
                border: 1px solid ${profileColor};
              `;
        }
        for (var i = 0; i < 3; i++) {
          elAboutText[i].style.cssText = `
            color: var(--colorBlack);
          `;
        }
      }
    });

    elProfileClose.addEventListener("click", () => {
      showChoose = false;
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
              border: 1px solid ${profileColor};

            `;
        } else {
          elIconSet.style.cssText = `
              display: flex;
              animation-name: showIconSet;
              animation-duration: 0.3s;
              animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);
              border: 1px solid ${profileColor};
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
                top: 90px;
                margin-bottom: -130px;
                animation-name: showIconSetPhone;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${profileColor};

              `;
        } else {
          elIconSet.style.cssText = `
                display: flex;
                top: 90px;
                margin-bottom: -130px;
                animation-name: showIconSetPhone;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
              background-color: var(--colorDarkGray);
              border: 1px solid ${profileColor};
                
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
      if (showNavbarSections) {
        showNavbarSections = false;
        elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorGray);
                border: 1px solid ${profileColor};
              `;
      }
      if (!showHideReport) {
        showHideReport = true;
        if (!colorChange) {
          elHeaderBoxBurger.style.cssText = `
                display: block;
                animation-name: showHeaderBox;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${profileColor};

                `;
        } else {
          elHeaderBoxBurger.style.cssText = `
                display: block;
                background-color: var(--colorDarkGray);
                animation-name: showHeaderBox;
                animation-duration: 0.3s;
                animation-fill-mode: forwards;
                border: 1px solid ${profileColor};

              `;
        }
      } else {
        showHideReport = false;
        showChoose = false;
        elIconSet.style.cssText = `
          display: none;
        `;
        elHeaderBoxBurger.style.cssText = `
                display: none;
                animation: none;
                border: 1px solid ${profileColor}
            `;
      }
      burgerAnimateF(color);
    });

    function headerBurgerWork() {
      if (window.innerWidth < 650) {
        if (!showHideReport) {
          elBurger.style.cssText = `
            display: flex;
          `;
        }

        elIconSet.style.cssText = `
            display: none;
            `;
        elAbout.style.cssText = `
            visibility: hidden;
          `;
        showNavbarSections = false;
        if (color == "white") {
          showNavbarSections = false;
          elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorGray);
                border: 1px solid ${profileColor};
              `;
        } else {
          showNavbarSections = false;
          elAbout.style.cssText = `
                visibility: hidden;
                animation: none;
                background-color: var(--colorDarkGray);
                border: 1px solid ${profileColor};
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
        elHeaderBoxBurger.style.cssText = `
          visibility: hidden;
        `;
        elIconSet.style.cssText = `
          display: none;
        `;
        elAbout.style.cssText = `
          visibility: hidden;
        `;
        showNavbarSections = false;
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
    if (!colorChange) {
      elProfileInputs[index].style.cssText = `
      border: 1px solid var(--colorUser);
      background-color: var(--white);
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
    } else {
      elProfileInputs[index].style.cssText = `
      border: 1px solid var(--colorUser);
      background-color: var(--colorOpacityBlack)
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
    }

    keyDown();
  });
}
elProfileInputsWork(0);
elProfileInputsWork(1);
elProfileInputsWork(2);
elProfileInputsWork(3);
elProfileInputsWork(4);
elProfileInputsWork(5);

function keyDown() {
  if (showTaskForm) {
    if (!elTaskInputs.value.trim()) {
      elTaskText.textContent = `Enter name of task`;
      if (!colorChange) {
        elTaskInputs.style.cssText = `
          background-color: var(--white);
          color: var(--colorBlack);
          border: 1px solid red;
        `;
      } else {
        elTaskInputs.style.cssText = `
          background-color: var(--colorOpacityBlack);
          color: var(--colorBlack);
          border: 1px solid red;
        `;
      }

      elTaskText.style.cssText = `
        animation-name: warningTask;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        color: red;
      `;
    } else {
      elTaskText.textContent = `Enter name of task`;
      if (!colorChange) {
        elTaskInputs.style.cssText = `
          background-color: var(--white);
          color: var(--colorBlack);
          border: 1px solid var(--colorUser);
        `;
      } else {
        elTaskInputs.style.cssText = `
          background-color: var(--colorOpacityBlack);
          color: var(--colorBlack);
          border: 1px solid var(--colorUser);
        `;
      }

      elTaskText.style.cssText = `
        animation: none;
        color: var(--colorUser);
      `;
    }
  }

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
    if (!colorChange) {
      elProfileInputs[2].style.cssText = `
      border: 1px solid var(--colorUser);
      background-color: var(--white);
    `;
    } else {
      elProfileInputs[2].style.cssText = `
      border: 1px solid var(--colorUser);
      background-color: var(--colorOpacityBlack);
    `;
    }

    elProfileText[2].style.cssText = `
      animation-name: inputText;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
      color: var(--colorUser)
    `;
  } else if (Number(elProfileInputs[2].value.trim()) >= 120) {
    elProfileText[2].textContent = "Make sure less than 120";
    if (!colorChange) {
      elProfileInputs[2].style.cssText = `
                border: 1px solid red;
                background-color: var(--white);
              `;
      elProfileText[2].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
          `;
    } else {
      elProfileInputs[2].style.cssText = `
                border: 1px solid red;
                background-color: var(--colorOpacityBlack);
              `;
      elProfileText[2].style.cssText = `
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
    if (!colorChange) {
      elProfileInputs[3].style.cssText = `
      border: 1px solid var(--colorUser);
      background-color: var(--white);
    `;
    } else {
      elProfileInputs[3].style.cssText = `
      border: 1px solid var(--colorUser);
      background-color: var(--colorOpacityBlack);
    `;
    }

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
      elProfileText[3].textContent = "Make sure '@'";
      elProfileText[3].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
      if (!colorChange) {
        elProfileInputs[3].style.cssText = `
      border: 1px solid red;
      background-color: var(--white);
    `;
      } else {
        elProfileInputs[3].style.cssText = `
      border: 1px solid red;
      background-color: var(--colorOpacityBlack);
    `;
      }
    } else if (includesInEmail) {
      for (var i = 0; i < elProfileInputs[3].value.trim().length; i++) {
        if (elProfileInputs[3].value.trim()[i] == "@") {
          if (
            elProfileInputs[3].value.trim()[
              elProfileInputs[3].value.trim().length - 1
            ] == "@"
          ) {
            elProfileText[3].textContent = "Make sure text after '@'";
            if (!colorChange) {
              elProfileInputs[3].style.cssText = `
                border: 1px solid red;
                background-color: var(--white);
              `;
            } else {
              elProfileInputs[3].style.cssText = `
                border: 1px solid red;
                background-color: var(--colorOpacityBlack);
              `;
            }
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
}

window.addEventListener("keydown", () => {
  keyDown();
});

elProfileFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  let accept = 0;

  for (var i = 0; i <= 5; i++) {
    if (!elProfileInputs[i].value.trim()) {
      if (!colorChange) {
        elProfileInputs[i].style.cssText = `
                border: 1px solid red;
                background-color: var(--white);
                
              `;
        elProfileText[i].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
      } else {
        elProfileInputs[i].style.cssText = `
                border: 1px solid red;
                background-color: var(--colorOpacityBlack);
                
              `;
        elProfileText[i].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
      }
    }
  }

  if (elEmailChecked) {
    var includesInEmail = elProfileInputs[3].value.trim().includes("@");
    includesEmailGlobal = includesInEmail;

    if (
      elProfileInputs[3].value.trim()[
        elProfileInputs[3].value.trim().length - 1
      ] != "@" &&
      includesEmailGlobal
    ) {
      elProfileText[3].textContent = "Correct";
      if (!colorChange) {
        elProfileInputs[3].style.cssText = `
                border: 1px solid var(--colorUser);
                background-color: var(--white);
                
              `;
        elProfileText[3].style.cssText = `
                animation-name: inputText;
                animation-duration: 0.2s;
                animation-fill-mode: forwards;
                color: var(--colorUser)
              `;
      } else {
        elProfileInputs[3].style.cssText = `
                border: 1px solid var(--colorUser);
                background-color: var(--colorOpacityBlack);
                
              `;
        elProfileText[3].style.cssText = `
                animation-name: inputText;
                animation-duration: 0.2s;
                animation-fill-mode: forwards;
                color: var(--colorUser)
              `;
      }
    }

    if (!includesInEmail) {
      elProfileText[3].textContent = "Make sure '@'";
      if (!colorChange) {
        elProfileInputs[3].style.cssText = `
                border: 1px solid red;
                background-color: var(--white);
                
              `;
        elProfileText[3].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
      } else {
        elProfileInputs[3].style.cssText = `
                border: 1px solid red;
                background-color: var(--colorOpacityBlack);
                
              `;
        elProfileText[3].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
      }
    } else if (includesInEmail) {
      for (var i = 0; i < elProfileInputs[3].value.trim().length; i++) {
        if (elProfileInputs[3].value.trim()[i] == "@") {
          if (
            elProfileInputs[3].value.trim()[
              elProfileInputs[3].value.trim().length - 1
            ] == "@"
          ) {
            elProfileText[3].textContent = "Make sure text after '@'";
            if (!colorChange) {
              elProfileInputs[3].style.cssText = `
                border: 1px solid red;
                background-color: var(--white);
                
              `;
              elProfileText[3].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
            } else {
              elProfileInputs[3].style.cssText = `
                border: 1px solid red;
                background-color: var(--colorOpacityBlack);
                
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
          if (!colorChange) {
            elProfileInputs[i].style.cssText = `
                border: 1px solid red;
                background-color: var(--white);
              `;
            elProfileText[i].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
          } else {
            elProfileInputs[i].style.cssText = `
                border: 1px solid red;
                background-color: var(--colorOpacityBlack);
              `;
            elProfileText[i].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
              `;
          }
        } else {
          accept++;
        }
      }
    } else {
      elProfileText[2].textContent = "Make sure less than 120";

      if (!colorChange) {
        elProfileInputs[2].style.cssText = `
                border: 1px solid red;
                background-color: var(--white);
              `;
        elProfileText[2].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
          `;
      } else {
        elProfileInputs[2].style.cssText = `
                border: 1px solid red;
                background-color: var(--colorOpacityBlack);
              `;
        elProfileText[2].style.cssText = `
                color: red ;
                animation-name: warning;
                animation-duration: 0.4s;
                animation-fill-mode: forwards;
          `;
      }
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
      if (!colorChange) {
        elProfileInputs[i].style.cssText = `
        animation-name: accepted;
        animation-duration: 0.1s;
        animation-delay: ${i / 4}s;
        animation-fill-mode: forwards;
        background-color: var(--white);
      `;
      } else {
        elProfileInputs[i].style.cssText = `
        animation-name: accepted;
        animation-duration: 0.1s;
        animation-delay: ${i / 4}s;
        animation-fill-mode: forwards;
        background-color: var(--colorOpacityBlack);
      `;
      }

      elProfileText[i].style.cssText = `
        animation-name: acceptedText;
        animation-duration: 0.1s;
        animation-delay: ${i / 4}s;
        animation-fill-mode: forwards;
        top: 0px;
        transform: translateX(-4px);

      `;
    }

    if (!colorChange) {
      elProfileForm.style.cssText = `
      display: flex;
      animation-name: closeForm;
      animation-duration: 0.5s;
      animation-delay: 2s;
      animation-fill-mode: forwards;
      background-color: var(--colorGray);
    `;
    } else {
      elProfileForm.style.cssText = `
      display: flex;
      animation-name: closeForm;
      animation-duration: 0.5s;
      animation-delay: 2s;
      animation-fill-mode: forwards;
      background-color: var(--colorSecondBlack);
    `;
    }

    elProfileFormButton.textContent = "";
    elMainLoader.style.cssText = `
      visibility: visible;      
    `;
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

    userEntered = true;
    start();
    showTask();
    elTask.style.cssText = `
      display: flex;
    `;
    showTaskForm = true;
  }
});
