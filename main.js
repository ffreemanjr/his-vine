var study = document.querySelectorAll('.modal-content');
var bgModal = document.querySelector('.bg-modal');
var modal = document.querySelector('.modal-content');

function openModal() {
  bgModal.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  bgModal.style.display = 'none';
  modal.style.display = 'none';
}

for (i = 0; i < study.length; i++) {
  study[i].addEventListener('click', openModal);
}

bgModal.addEventListener('click', closeModal)






// document.getElementById('treasures').addEventListener("click", function() {
//   document.querySelector('.bg-modal').style.display = 'flex';
// });

// document.querySelector('.modal-content__close').addEventListener("click", function() {
//   document.querySelector('.bg-modal').style.display = 'none';
// });





console.log(study);