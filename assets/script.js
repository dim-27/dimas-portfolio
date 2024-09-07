const getButton = document.querySelector('.btn-resume');
const liveEtch = document.querySelector('.live-etch');
const liveRPS = document.querySelector('.live-rps');
const liveCalculate = document.querySelector('.live-calculate');

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