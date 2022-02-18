const body = document.querySelector('body');
const colorBtn = document.querySelectorAll('.btn');
const firstColor = document.querySelector('.first-color');
const secondColor = document.querySelector('.second-color');
const code = document.querySelector('.code');
const container = document.querySelector('.container');
const firstColorText = document.querySelector('.first-color-code');
const secondColorText = document.querySelector('.second-color-code');

colorBtn.forEach(btn =>
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    body.style.backgroundColor = e.target.value;
    body.style.backgroundImage = 'none';
  })
);

firstColor.addEventListener('input', function (e) {
  body.style.backgroundImage = `linear-gradient(to right, ${e.target.value}, ${secondColor.value})`;
  firstColorText.textContent = e.target.value;
});
secondColor.addEventListener('input', function (e) {
  body.style.backgroundImage = `linear-gradient(to right, ${firstColor.value}, ${e.target.value})`;
  secondColorText.textContent = e.target.value;
});

code.addEventListener('click', e => {
  e.preventDefault();
  copyToClipboard();
});

function showCopiedNotif() {
  const copied = document.createElement('p');
  copied.classList.add('copied');
  copied.textContent = 'Copied!';
  container.appendChild(copied);
  setTimeout(() => {
    copied.remove();
  }, 500);
}

function copyToClipboard() {
  const text = document.querySelector('.code').textContent;
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  showCopiedNotif();
}
