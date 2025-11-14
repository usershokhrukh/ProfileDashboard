const elBurger = document.querySelector(".navbar__burger");
const elHeaderBoxBurger = document.querySelector(".navbar__box-phone");
const elHeaderClose = document.querySelector(".navbar__close");
const elNavbarIcon = document.querySelectorAll(".navbar__profile");
const elIconSet = document.querySelector(".navbar__profile-choose");
const elTextArea = document.querySelector(".navbar__textarea");
const elNavbarButton = document.querySelector(".navbar__profile-button");
const elIconPath = document.querySelector(".navbar__icons-path");
const elProfileClose = document.querySelector(".navbar__profile-close");
const elLeftIcons = document.querySelectorAll(".navbar__left-icons");
const elProfileFormButton = document.querySelector(".profileform__button");
const elProfileInputs = document.querySelectorAll(".profileform__input");
let showHideReport = false;
let showHideIconSet = false;
let nightLight = false;
let userEntered = false


if (userEntered) {
    elLeftIcons[0].addEventListener("click", ()=>{
        elLeftIcons[0].style.cssText = `
          visibility: hidden;

        `;
        elLeftIcons[1].style.cssText = `
          visibility: visible;
        `; 

      
    });

    elLeftIcons[1].addEventListener("click", ()=>{
        elLeftIcons[1].style.cssText = `
          visibility: hidden;
        `;
        elLeftIcons[0].style.cssText = `
          visibility: visible;
        `;
    });



    elProfileClose.addEventListener("click", ()=>{
      elIconSet.style.cssText = `
            animation: none;
            visibility: hidden;
          `;
        showHideIconSet = false;

    });



    elNavbarIcon[0].addEventListener("click", () => {
      if(!showHideIconSet) {
        elIconSet.style.cssText = `
            animation-name: showIconSetPhone;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;

          `;
        showHideIconSet = true;
      }else {
        elIconSet.style.cssText = `
            animation: none;
            visibility: hidden;
          `;
        showHideIconSet = false;
      }
    });

    elNavbarIcon[1].addEventListener("click", () => {
      if(!showHideIconSet) {
        elIconSet.style.cssText = `
            animation-name: showIconSetPhone;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;

          `;
        showHideIconSet = true;
      }else {
        elIconSet.style.cssText = `
            animation: none;
            visibility: hidden;
          `;
        showHideIconSet = false;
      }
    });

    elNavbarButton.addEventListener("click", (e) => {    
      if (!elTextArea.value.trim()) {
        elTextArea.style.cssText = `
        border: 1px solid red;
        `;
      }else {
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
    
    window.addEventListener("keydown", () => {
      if (elTextArea.value.trim()) {
        elTextArea.style.cssText = `
          border: none;
        `;
        elNavbarButton.style.cssText = `
          opacity: 1;
        `;
        elNavbarButton.disabled = false;
      }
    });




  function headerBurgerWork() {
    if (window.innerWidth >= 650) {
      elBurger.style.cssText = `
        display: none;
      `;
      elHeaderBoxBurger.style.cssText = `
        visibility: hidden;
      `;
      elHeaderClose.style.cssText = `
        visibility: hidden;
      `;
      showHideReport = false;
    } else {
      if (!showHideReport) {
        elBurger.style.cssText = `
          display: flex;
        `;
        elIconSet.style.cssText = `
          visibility: hidden
        `;
      }
      elBurger.addEventListener("click", (e) => {
        if (!showHideReport) {
          showHideReport = true;

          elHeaderBoxBurger.style.cssText = `
              animation-name: showHeaderBox;
              animation-duration: 0.3s;
              animation-fill-mode: forwards;
            `;

          elHeaderClose.style.cssText = `
            display: block;
            `;

          elBurger.style.cssText = `
              display: none;
            `;

        }
      });

      elHeaderClose.addEventListener("click", (e) => {
        if (showHideReport) {
          showHideReport = false;

          elHeaderBoxBurger.style.cssText = `
              visibility: hidden;
              animation: none;
            `;

          elBurger.style.cssText = `
              display: flex;
            `;

          elHeaderClose.style.cssText = `
              display: none;
            `;
        }
      });
    }
  }
  headerBurgerWork();
  window.addEventListener("resize", headerBurgerWork);

}


elProfileFormButton.addEventListener("click", (e) => {
  e.preventDefault();

});