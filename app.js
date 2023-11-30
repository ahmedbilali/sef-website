window.addEventListener("resize", () => {
  // console.log(window.innerWidth);
});

function windowScroll(section, offsetTop) {
  const yPos = section.offsetTop;
  // console.log(yPos, offsetTop);
  window.scroll({
    top: yPos + offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

async function apiCall(URL) {
  const res = await fetch(URL, {
    method: "PUT",
  });
  const resJson = await res.json();

  if (resJson.$metadata.httpStatusCode == 200) {
    alert("Thank You For Subscribing to our newsletter!");
  } else if (resJson.$metadata.httpStatusCode != 200) {
    // console.log(res.$metadata);
    alert("Our system is down, please try again after few minutes!");
  }

  return resJson;
}

function scrollToHome() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function menuBarClose() {
  dropDownMenu.style.display = "none";
  body.style.overflowY = "auto";
}

function menuBarOpen() {
  body.style.overflowY = "hidden";
  dropDownMenu.style.display = "block";
}
const offsetTop = -150;
const navBtns = document.getElementsByClassName("nav-btn");
const donateBtn = document.getElementsByClassName("special-btn")[0];
const sections = document.getElementsByClassName("section");
// const donateSection = document.querySelector(".donate-card");
const dropDownMenu = document.querySelector(".drop-down-menu-bg");
const dropDownMenuBtns = document.querySelector(".drop-down-menu");
const joinBtnDropDowmMenu = dropDownMenuBtns.lastElementChild;
const joinBtnNavBar = navBtns[4];
const body = document.getElementsByTagName("body")[0];

const navBtnsObj = {
  about: navBtns[0],
  vision: navBtns[1],
  mission: navBtns[2],
  goals: navBtns[3],
  sponsorship: navBtns[4],
  contact: navBtns[5],
  donate: donateBtn,
};

const sectionsObj = {
  about: sections[0],
  vision: sections[1],
  mission: sections[2],
  goals: sections[3],
  sponsorship: sections[4],
  contact: sections[5],
  // donate: donateSection,
};

function windowScroll(section, offsetTop) {
  const yPos = section.offsetTop;
  // console.log(yPos, offsetTop);
  window.scroll({
    top: yPos + offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

navBtnsObj["about"].addEventListener("click", () => {
  windowScroll(sectionsObj["about"], offsetTop);
});

navBtnsObj["vision"].addEventListener("click", () => {
  windowScroll(sectionsObj["vision"], offsetTop);
});

navBtnsObj["mission"].addEventListener("click", () => {
  windowScroll(sectionsObj["mission"], offsetTop);
});

navBtnsObj["goals"].addEventListener("click", () => {
  windowScroll(sectionsObj["goals"], offsetTop);
});

navBtnsObj["sponsorship"].addEventListener("click", () => {
  windowScroll(sectionsObj["sponsorship"], offsetTop);
});

navBtnsObj["contact"].addEventListener("click", () => {
  windowScroll(sectionsObj["contact"], offsetTop);
});

document.querySelector(".logo-container").addEventListener("click", () => {
  // console.log("logo clicked");
  scrollToHome();
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  menuBarOpen();
});

document.querySelector(".x-icon").addEventListener("click", () => {
  menuBarClose();
});

// console.log(dropDownMenuBtns, dropDownMenuBtns.children);

const dropDownMenuBtnsObj = {
  donate: dropDownMenuBtns.children[0],
  home: dropDownMenuBtns.children[1],
  about: dropDownMenuBtns.children[2],
  vision: dropDownMenuBtns.children[3],
  mission: dropDownMenuBtns.children[4],
  goals: dropDownMenuBtns.children[5],
  sponsorship: dropDownMenuBtns.children[6],
  contact: dropDownMenuBtns.children[7],
};

dropDownMenuBtnsObj["donate"].addEventListener("click", () => {
  windowScroll(sectionsObj["donate"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["about"].addEventListener("click", () => {
  windowScroll(sectionsObj["about"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["vision"].addEventListener("click", () => {
  windowScroll(sectionsObj["vision"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["mission"].addEventListener("click", () => {
  windowScroll(sectionsObj["mission"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["goals"].addEventListener("click", () => {
  windowScroll(sectionsObj["goals"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["sponsorship"].addEventListener("click", () => {
  windowScroll(sectionsObj["sponsorship"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["contact"].addEventListener("click", () => {
  windowScroll(sectionsObj["contact"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["home"].addEventListener("click", () => {
  scrollToHome();
  menuBarClose();
});

// joinBtnDropDowmMenu.addEventListener("click", () => {
//   window.open("https://forms.gle/eRgzeDvjGuRAatRu9");
// });

// joinBtnNavBar.addEventListener("click", () => {
//   window.open("https://forms.gle/eRgzeDvjGuRAatRu9");
// });

// document.querySelector("#watch-more").addEventListener("click", () => {
//   window.open("https://www.facebook.com/MesoPakistan/videos");
// });
