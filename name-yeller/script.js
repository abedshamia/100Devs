const firstName = document.getElementsByName('first-name')[0];
const lastName = document.getElementsByName('last-name')[0];
const age = document.getElementsByName('age')[0];
const submit = document.querySelector('.btn');
const container = document.querySelector('.container');
const source = document.querySelector('source');

//Get the voices that are available
const synth = window.speechSynthesis;

submit.addEventListener('click', callResult);

function callResult() {
  clearResult();
  if (firstName.value === '' || lastName.value === '' || age.value === '') {
    const result = document.createElement('div');
    result.classList.add('result');
    result.innerHTML = 'Please fill all the fields';
    container.appendChild(result);
    return;
  }
  const result = `My name is ${firstName.value} ${lastName.value} and I'm ${age.value} years old`;
  const resultElement = document.createElement('h1');
  resultElement.innerText = result;
  resultElement.classList.add('result');
  container.appendChild(resultElement);

  const utterThis = new SpeechSynthesisUtterance(result);
  synth.speak(utterThis);

  //play mp3
  const audio = new Audio(source.src);

  setTimeout(() => {
    audio.play();
  }, 4000);

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
