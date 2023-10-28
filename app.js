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
const donateSection = document.querySelector(".donate-card");
const dropDownMenu = document.querySelector(".drop-down-menu-bg");
const dropDownMenuBtns = document.querySelector(".drop-down-menu");
const joinBtnDropDowmMenu = dropDownMenuBtns.lastElementChild;
const joinBtnNavBar = navBtns[4];
const body = document.getElementsByTagName("body")[0];

const navBtnsObj = {
  about: navBtns[0],
  projects: navBtns[1],
  media: navBtns[2],
  contact: navBtns[3],
  donate: donateBtn,
};

const sectionsObj = {
  about: sections[1],
  projects: sections[2],
  media: sections[3],
  contact: sections[4],
  donate: donateSection,
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

navBtnsObj["projects"].addEventListener("click", () => {
  windowScroll(sectionsObj["projects"], offsetTop);
});

navBtnsObj["media"].addEventListener("click", () => {
  windowScroll(sectionsObj["media"], offsetTop);
});

navBtnsObj["contact"].addEventListener("click", () => {
  windowScroll(sectionsObj["contact"], offsetTop);
});

navBtnsObj["donate"].addEventListener("click", () => {
  windowScroll(sectionsObj["donate"], offsetTop);
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
  projects: dropDownMenuBtns.children[3],
  media: dropDownMenuBtns.children[4],
  contact: dropDownMenuBtns.children[5],
};

dropDownMenuBtnsObj["donate"].addEventListener("click", () => {
  windowScroll(sectionsObj["donate"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["about"].addEventListener("click", () => {
  windowScroll(sectionsObj["about"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["projects"].addEventListener("click", () => {
  windowScroll(sectionsObj["projects"], offsetTop);
  menuBarClose();
});
dropDownMenuBtnsObj["media"].addEventListener("click", () => {
  windowScroll(sectionsObj["media"], offsetTop);
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

document.getElementById("sub-button").addEventListener("click", () => {
  const name = document.getElementById("name-input");
  const email = document.getElementById("email-input");

  if (name.value === "" && email.value === "") {
    alert("Please enter your name and email to subscribe!");
  } else if (name.value != "" && email.value === "") {
    alert("Please enter your email to subscribe!");
  } else if (name.value === "" && email.value != "") {
    alert("Please enter your name to subscribe!");
  } else {
    apiCall(
      `https://olenarm5i6.execute-api.ap-southeast-1.amazonaws.com/UAT?email=${email.value}&name=${name.value}`
    );
    name.value = "";
    email.value = "";
  }
});
