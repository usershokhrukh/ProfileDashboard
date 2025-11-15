

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
const elProfileText = document.querySelectorAll(".profileform__text");
const elProfileForm = document.querySelector(".profileform__form")
const elProfileTextSpan = document.querySelectorAll(".navbar__profile-sub")
let showHideReport = false;
let showHideIconSet = false;
let nightLight = false;
let userEntered = false

function start() {
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
}

start();


let elProfileINputCheck = false;

function elProfileInputsWork(index) {
  elProfileInputs[index].addEventListener('click', ()=>{
    elProfileInputs[index].style.cssText = `
      border: 1px solid var(--colorUser);
    `;

    elProfileText[index].style.cssText = `
      animation-name: inputText;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
      color: var(--colorUser)
    `;
  });
} 
  elProfileInputsWork(0);
  elProfileInputsWork(1);
  elProfileInputsWork(2);
  elProfileInputsWork(3);
  elProfileInputsWork(4);
  elProfileInputsWork(5);




elProfileFormButton.addEventListener("submit", (e) => {
  e.preventDefault();
  let accept = 0;
  for (var i = 0; i <= 5; i++) {
    if(!elProfileInputs[i].value.trim()) {
      elProfileInputs[i].style.cssText = `
        border: 1px solid red;
      `;
      elProfileText[i].style.cssText = `
        color: red ;
        animation-name: warning;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
      `;
    }else {
      accept++;
    }
  }

  if (!elProfileInputs[3].value.trim()) {
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

  if (accept == 6) {  
    elProfileFormButton.style.cssText = `
      animation-name: block;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    `;

    elProfileFormButton.disabled = true;
    console.log(elProfileFormButton);
    
    for(var i = 0; i <= 5; i++) {
      elProfileInputs[i].style.cssText = `
        animation-name: accepted;
        animation-duration: 0.1s;
        animation-delay: ${i/4}s;
        animation-fill-mode: forwards;
      `;
      elProfileText[i].style.cssText = `
        animation-name: acceptedText;
        animation-duration: 0.1s;
        animation-delay: ${i/4}s;
        animation-fill-mode: backwards;
        top: 0px;
        transform: translateX(-4px);
      `;
    }

    elProfileForm.style.cssText = `
      animation-name: closeForm;
      animation-duration: 0.5s;
      animation-delay: 2s;
      animation-fill-mode: backwards;
    `;

    userEntered = true;    
    start();

    function userNames(inputs) {
      const userInputFirst = (inputs.value.trim()).toLowerCase()
      const userNameFinal = (userInputFirst[0].toUpperCase()).concat(userInputFirst.slice(1));

      return userNameFinal;
    }

    elProfileTextSpan[0].textContent = userNames(elProfileInputs[0]);
    elProfileTextSpan[1].textContent = userNames(elProfileInputs[1]);


    for(var i = 2; i <= 5; i++) {
      elProfileTextSpan[i].textContent = elProfileInputs[i].value.trim();
    }
  }
});


window.addEventListener("keydown", ()=> {
  if (!elProfileInputs[3].value.trim()) {
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

});