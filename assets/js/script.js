"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// mobile sidebar clicked by default
sidebarBtn.click();

// auto scrolling Tech Skills
const list = document.querySelector(".technologies-list");
const listItems = list.querySelectorAll(".technologies-item");
const scrollSpeed = 0.7; // speed
const intervalDuration = 10; // smoothness
const totalWidth = list.scrollWidth - list.clientWidth;
let scrollPosition = 0;
let scrolling = false;

function startScrolling() {
  if (!scrolling) {
    scrolling = true;
    const interval = setInterval(() => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      if (!scrolling) {
        clearInterval(interval);
      }

      list.scrollLeft = scrollPosition;
    }, intervalDuration);
  }
}

function stopScrolling() {
  scrolling = false;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startScrolling();
      } else {
        stopScrolling();
      }
    });
  },
  { threshold: 0 }
);

observer.observe(list);

list.addEventListener("mouseenter", () => {
  stopScrolling();
});

list.addEventListener("mouseleave", () => {
  startScrolling();
});

// variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetSection = this.getAttribute("data-target-section")
      ? this.getAttribute("data-target-section")
      : this.innerHTML.toLowerCase();

    for (let i = 0; i < pages.length; i++) {
      if (targetSection === pages[i].dataset.page) {
        pages[i].classList.add("active");

        if (navigationLinks[i]) {
          navigationLinks[i].classList.add("active");
        }
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");

        if (navigationLinks[i]) {
          navigationLinks[i].classList.remove("active");
        }
      }
    }
  });
}

// open certificates on click
function imgWindow() {
  window.open("image");
}

// Copy Email Address
function copyEmail() {
  var email = document.querySelector(".email-text").textContent;
  var tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  
  // Show the copied message
  var copyMessage = document.getElementById("copy-message");
  copyMessage.style.display = "inline";
  
  // Hide the message after 2 seconds
  setTimeout(function() {
    copyMessage.style.display = "none";
  }, 2000);
}


// Animated percentage bar
function increaseProgress(element, targetWidth) {
  var currentWidth = 0;
  var increment = 1;
  var interval = 10;

  var timer = setInterval(function () {
    currentWidth += increment;
    element.style.width = currentWidth + "%";
    if (currentWidth >= targetWidth) {
      clearInterval(timer);
    }
  }, interval);
}

function startAnimationOnScroll() {
  var progressFillElements = document.querySelectorAll(
    ".languages-progress-fill"
  );

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var targetWidth = parseInt(entry.target.style.width);
        increaseProgress(entry.target, targetWidth);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  progressFillElements.forEach(function (element) {
    observer.observe(element);
  });
}

startAnimationOnScroll();

// Loading Animation
window.addEventListener("DOMContentLoaded", (event) => {
  const imageContainers = document.querySelectorAll(".travelled-img");
  imageContainers.forEach((container) => {
    const image = container.querySelector("img");
    image.addEventListener("load", function () {
      container.classList.remove("loading");
    });
  });
});

// Age Counter Animation
function countTo(target, duration) {
  const start = 0;
  const increment = (target / duration) * 50;

  let current = start;
  const timer = setInterval(function () {
    current += increment;
    document.getElementById("age").textContent =
      Math.floor(current) + " years old";

    if (current >= target) {
      clearInterval(timer);
      document.getElementById("age").textContent = target + " years old";
    }
  }, 50);
}

function calculateAge(birthDate) {
  const birthYear = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return age;
}

const ageElement = document.getElementById("age");
ageElement.textContent = "0 years old";

setTimeout(function () {
  countTo(calculateAge("2004-08-21"), 1000);
}, 1000);

// Motto Animation
// Motto Animation
const text = Array.from({ length: 20 }, () =>
  Array.from({ length: 16 }, () => Math.round(Math.random())).join("")
);
text.push("यथा दृष्टि तथा शृष्टि !");
text.push("As one sees, so is the creation !");

const mottoElement = document.getElementById("motto");

function displayLetters(textToDisplay, delay) {
  const letters = textToDisplay.split("");
  let index = 0;

  function displayNextLetter() {
    if (index < letters.length) {
      mottoElement.textContent += letters[index];
      index++;
      setTimeout(displayNextLetter, delay);
    }
  }

  displayNextLetter();
}

// Display mathematical numbers initially
const mathNumbers = Array.from({ length: 10 }, (_, index) => index);
mottoElement.textContent = mathNumbers.join(" ");

// Function to clear content and display text with doubled animation speed
function displayTextWithDoubleSpeed(textToDisplay) {
  mottoElement.textContent = ""; // Clear the content before displaying new text
  displayLetters(textToDisplay, 250); // Doubled animation speed (currently 250 milliseconds)
}

// Display "Hello, World!" after a short delay
setTimeout(() => {
  displayTextWithDoubleSpeed("यथा दृष्टि तथा शृष्टि !");
}, mathNumbers.length * 250);

// Display "As one sees, so is the creation !" after a short delay
setTimeout(() => {
  displayTextWithDoubleSpeed("As one sees, so is the creation !");
}, (mathNumbers.length + "As one sees, so is the creation !".length) * 250);


// Expanding About Text
function toggleText() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("toggle-button");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "&uarr; &nbsp; &nbsp; Hide text &nbsp; &nbsp; &uarr;";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "&darr; &nbsp; &nbsp; Show more &nbsp; &nbsp; &darr;";
  }
}


// Expanding About Text
function toggleText() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("toggle-button");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "&uarr; &nbsp; &nbsp; Hide text &nbsp; &nbsp; &uarr;";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "&darr; &nbsp; &nbsp; Show more &nbsp; &nbsp; &darr;";
  }
}






//Time JS

function updateTime() {
  const now = new Date();
  const utcTime = now.toUTCString().slice(-12, -4); // Extracts time from UTC string
  document.getElementById('utc-time').textContent = utcTime;
}

setInterval(updateTime, 1000); // Update the time every second

// Initialize the time immediately on page load
updateTime();

