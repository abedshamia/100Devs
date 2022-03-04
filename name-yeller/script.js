const firstName = document.getElementsByName('first-name')[0];
const submit = document.querySelector('.btn');
const container = document.querySelector('.container');
const source = document.querySelector('source');
let bg = document.querySelector('body');

//Get the voices that are available
const synth = window.speechSynthesis;

submit.addEventListener('click', callResult);

submit.addEventListener('click', () => {
  setTimeout(() => {
    setInterval(changeColor, 10);
  }, 2000);
});

function changeColor() {
  bg.style.backgroundColor = `#${Math.round(Math.random() * 100000)}`;
}
function callResult() {
  clearResult();
  if (firstName.value === '') {
    const result = document.createElement('div');
    result.classList.add('result');
    result.innerHTML = 'Please fill the field';
    container.appendChild(result);
    return;
  }
  const result = firstName.value;

  const resultElement = document.createElement('h1');
  resultElement.innerText = `🔥${result}🔥`;
  resultElement.classList.add('result');
  container.appendChild(resultElement);

  const utterThis = new SpeechSynthesisUtterance(result);
  synth.speak(utterThis);

  //play mp3
  const audio = new Audio(source.src);

  setTimeout(() => {
    audio.play();
  }, 2000);

  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
  });
  //To repeat the result when it ends
  utterThis.onend = function () {
    synth.speak(utterThis);
  };
}

function clearResult() {
  const result = document.querySelector('.result');
  if (result) {
    result.remove();
  }
}
