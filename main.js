var modalContent = document.querySelectorAll('.card-lesson');
var close = document.querySelector('.modal-content__close');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal-content');


function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  close.style.display = 'none';
  backdrop.style.display = 'none';
  modal.style.display = 'none';  
}

for (i = 0; i < modalContent.length; i++) {
  modalContent[i].addEventListener('click', openModal);
}

backdrop.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
close.addEventListener('click', closeModal);

console.log(modalContent[3]);