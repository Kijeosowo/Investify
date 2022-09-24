'use strict';

// const touchFooter = document.querySelectorAll('.touch');

document.querySelector('#Switch') .addEventListener('click', function() {
  document.querySelector('body') .style .backgroundColor = '#000';
  document.querySelector('nav') .style .backgroundColor = '#000';
  document.querySelector('ul') .style .backgroundColor = '#000';
  document.querySelector('.logo') .style .color = '#fff';

  // Iphone and Android link
  document.querySelector('#iPhone') .style .backgroundColor = '#1dda0c';
  document.querySelector('#iPhone') .style .border = 'none';
  document.querySelector('#iPhone a') .style .color = '#fff';
  document.querySelector('.fa-apple') .style .color = '#fff';
  document.querySelector('#Android') .style .backgroundColor = '#1dda0c';
  document.querySelector('#Android') .style .border = 'none';
  document.querySelector('#Android a') .style .color = '#fff';
  document.querySelector('.fa-google-play') .style .color = '#fff';

    // Text
  document.querySelector('.text h1') .style .color = '#fff';
  document.querySelector('.text p') .style .color = '#fff';

  // Savings
  document.querySelector('#savings') .style .backgroundColor = '#000';
  document.querySelector('.savings h4') .style .color = '#fff';
  document.querySelector('.savings p') .style .color = '#fff';

  // Tutor
  document.querySelector('.Tuts h5') .style .color = '#fff';
  document.querySelector('.Tuts p') .style .color = '#fff';

    // Testimony
  document.querySelector('.Testimonytext h1') .style .fontWeight = 'lighter';
  document.querySelector('.Testimonytext h1') .style .color = '#000';
  document.querySelector('.Testimonytext p') .style .color = '#000';
  document.querySelector('#Testimonysection') .style .backgroundColor = '#000';
  document.querySelector('.Testimonytext h1') .style .color = '#fff';
  document.querySelector('.Testimonytext p') .style .color = '#fff';


  // Freedom
  document.querySelector('#Freedom p') .style .color = '#fff';
  document.querySelector('#Freedom') .style .backgroundColor = '#000';

    // Money
  document.querySelector('#Money') .style .backgroundColor = '#000';
  document.querySelector('.Money h1') .style .fontWeight = 'lighter';
  document.querySelector('.Money h3') .style .fontWeight = 'lighter';

    // Footer
  document.querySelector('#Payments') .style .backgroundColor = '#000';
  document.querySelector('#Payments p') .style .color = '#fff';
  document.querySelector('#footer h5') .style .color = '#fff';
});

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});