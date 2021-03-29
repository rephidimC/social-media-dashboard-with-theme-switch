document.querySelector(".slider").addEventListener("click", toggleMode);

var button = document.querySelector(".slider-button");
var originalBody = document.querySelector(".dark-mode-body");
var originalBackground = document.querySelector(".background");
var originalSocialMedia = document.querySelector(".social-media");
var originalTotal = document.querySelector(".total");
var originalH1 = document.querySelectorAll("h1");
var originalCard = document.querySelectorAll(".card");
var originalDarkMode = document.querySelector(".dark-mode");
var originalOverview = document.querySelector(".overview");
var originalWhite = document.querySelectorAll(".white");
var originalHover = document.querySelectorAll(".card-hover");
var originalAttribution = document.querySelector(".attribution");
var i;


function toggleMode() {
  if (button.style.left == "0.1rem") {
    // activate light mode=1.7rem
    button.style.left = "1.7rem";
    button.classList.add("body-light-mode");
    originalBody.classList.add("body-light-mode");
    originalBackground.classList.add("background-light-mode");
    originalSocialMedia.classList.add("social-media-light-mode");
    originalTotal.classList.add("total-light-mode");
    originalOverview.classList.add("total-light-mode");
    originalDarkMode.classList.add("total-light-mode");
    originalAttribution.classList.add("social-media-light-mode");


    for (i = 0; i < originalCard.length; i++) {
      originalCard[i].classList.add("card-light-mode");
    }
    for (i = 0; i < originalH1.length; i++) {
      originalH1[i].classList.add("social-media-light-mode");
    }
    for (i = 0; i < originalWhite.length; i++) {
      originalWhite[i].classList.add("social-media-light-mode");
    }
    for (i = 0; i < originalHover.length; i++) {
      originalHover[i].classList.remove("card-hover");
      // Recall that each class has its own hover, hence, I created a brand new class that carried its own hover. i.e. one class with hover for dark mode and another for light mode.
      // Then for light mode, I removed that for the dark mode, so the light mode parent class could flex its own hover. and to return to dark mode hover, I simply added the class I removed before.
    }
  } else {
    // activate dark mode=0.1rem
    button.style.left = "0.1rem";
    button.classList.remove("body-light-mode");
    originalBody.classList.remove("body-light-mode");
    originalBackground.classList.remove("background-light-mode");
    originalSocialMedia.classList.remove("social-media-light-mode");
    originalTotal.classList.remove("total-light-mode");
    originalOverview.classList.remove("total-light-mode");
    originalDarkMode.classList.remove("total-light-mode");
    originalAttribution.classList.remove("social-media-light-mode");
    for (i = 0; i < originalCard.length; i++) {
      originalCard[i].classList.remove("card-light-mode");
    }
    for (i = 0; i < originalH1.length; i++) {
      originalH1[i].classList.remove("social-media-light-mode");
    }
    for (i = 0; i < originalWhite.length; i++) {
      originalWhite[i].classList.remove("social-media-light-mode");
    }
    for (i = 0; i < originalHover.length; i++) {
      // originalHover[i].classList.remove("card-light-mode");
      originalHover[i].classList.add("card-hover");
    }
  }
}
