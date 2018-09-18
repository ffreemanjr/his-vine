// var modalContent = document.querySelectorAll('.card-lesson');
// var close = document.querySelector('.modal-content__close');
// var backdrop = document.querySelector('.backdrop');
// var modal = document.querySelector('.modal-content');


// function openModal() {
//   backdrop.style.display = 'block';
//   modal.style.display = 'block';
// }

// function closeModal() {
//   close.style.display = 'none';
//   backdrop.style.display = 'none';
//   modal.style.display = 'none';  
// }

// for (i = 0; i < modalContent.length; i++) {
//   modalContent[i].addEventListener('click', openModal);
// }

// backdrop.addEventListener('click', closeModal);
// modal.addEventListener('click', closeModal);
// close.addEventListener('click', closeModal);

// console.log(modalContent[3]);

(function iife() {
  "use strict";
  function closestEl(el, selector) {
    var doc = el.document || el.ownerDocument;
    var matches = doc.querySelectorAll (selector);
    var i;
    while (el) {
      i = matches.length -1;
      while (i >= 0) {
        if (matches.item(i) === el) {
          return el;
        }
        i -=1;
      }
      el = el.parenElement;
    }
    return el;
  }
  var modalBtns = document.querySelectorAll(".button");
  modalBtns.forEach(function addBtnClickEvent (btn) {
    btn.onclick = function showModal() {
      var modal = btn.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
    };
  });
  var closeBtns = document.querySelectorAll(".modal-content__close");
  closeBtns.forEach(function addCloseClickEvent(btn) {
    btn.onclick = function closeModal() {
      var modal = closestEl(btn, ".modal");
      modal.style.display = "none";
    };
  });

  window.onclick = function closOnClick(event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };
}());