const getButton = document.querySelector('.btn-resume');
const liveEtch = document.querySelector('.live-etch');
const liveRPS = document.querySelector('.live-rps');
const liveCalculate = document.querySelector('.live-calculate');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')
const navLink = document.querySelectorAll('.nav-link');

getButton.addEventListener('click', (url) => {
  window.open('https://drive.google.com/file/d/1ZFSNVuZBKGwDUoeKLS1HzPkilm7tcDB_/view', '_blank');
});

liveEtch.addEventListener('click', (url) => {
  window.open('https://dim-27.github.io/etch-a-sketch/', '_blank');
});

liveRPS.addEventListener('click', () => {
  window.open('https://dim-27.github.io/rock-paper-scissors/', '_blank');
});

liveCalculate.addEventListener('click', () => {
  window.open('https://dim-27.github.io/calculator/', '_blank');
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

navLink.forEach((nav) => {
  nav.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
})
