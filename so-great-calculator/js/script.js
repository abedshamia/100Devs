const toggleMode = document.querySelector('.toggle-mode');
const calculator = document.querySelector('.calculator');

const allEleNodeList = document.querySelectorAll('*');
const EleArray = Array.from(allEleNodeList);

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    toggleMode.textContent = 'Light';
  } else {
    toggleMode.textContent = 'Dark';
  }
  EleArray.forEach(ele => {
    ele.style.transition = 'all 0.5s ease-in-out';
  });
});

toggleMode.addEventListener('click', () => {
  EleArray.forEach(e => e.classList.toggle('light'));

  if (document.body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
    toggleMode.textContent = 'Dark';
  } else {
    localStorage.setItem('theme', 'dark');
    toggleMode.textContent = 'Light';
  }
});

//Local Storage Theme Save

if (localStorage.getItem('theme') === 'light') {
  EleArray.forEach(e => e.classList.add('light'));
}

const displayInput = document.querySelector('.input-display');

const allInput = document.querySelector('.input-all');
const buttons = document.querySelectorAll('.btn-v');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    allInput.textContent += btn.textContent;
  });
});

const arithmiticBtns = document.querySelectorAll('.btn-ar');

arithmiticBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    allInput.textContent += btn.textContent;
  });
});

const clearBtn = document.querySelectorAll('.clear')[0];

clearBtn.addEventListener('click', () => {
  allInput.textContent = '';
  displayInput.textContent = '';
});

const equalBtn = document.querySelector('.btn-eq');

equalBtn.addEventListener('click', e => {
  displayInput.textContent = eval(allInput.textContent);
  allInput.textContent = displayInput.textContent;
});
