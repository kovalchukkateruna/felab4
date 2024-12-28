const item9 = document.getElementById('item9');
item9.addEventListener('click', () => {
  if (!item9.classList.contains('highlight1')) {
    item9.classList.add('highlight1');
  } else {
    item9.classList.remove('highlight1');
  }
});

const item10 = document.querySelector('#item10');
item10.addEventListener('click', () => {
  if (!item10.classList.contains('highlight2')) {
    item10.classList.add('highlight2');
  } else {
    item10.classList.remove('highlight2');
  }
});

const image = document.querySelector('img');
let originalWidth = image.clientWidth;

document.getElementById('add-image').addEventListener('click', () => {
  image.style.width = originalWidth;
});

document.getElementById('increase-image').addEventListener('click', () => {
  image.style.width = `${image.offsetWidth * 1.1}px`;
  originalWidth = `${image.offsetWidth * 1.1}px`;
});

document.getElementById('decrease-image').addEventListener('click', () => {
  image.style.width = `${image.offsetWidth * 0.9}px`;
  originalWidth = `${image.offsetWidth * 0.9}px`;
});

document.getElementById('remove-image').addEventListener('click', () => {
  image.style.width = `0px` ;
});
