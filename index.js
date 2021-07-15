const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.body,
    buttonStart: document.querySelector('button[data-action= "start"]'),
    buttonStop: document.querySelector('button[data-action= "stop"]'),
};

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.buttonStart.addEventListener('click', onStart);
refs.buttonStop.addEventListener('click', onStop);

function onStart() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length - 1)];
    }, 1000);
    refs.buttonStart.disabled = true;
}

function onStop() {
    refs.buttonStart.disabled = false;
    clearInterval(intervalId);
}





