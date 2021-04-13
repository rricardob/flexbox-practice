const open1 = document.getElementById('open1'),
  open2 = document.getElementById('open2'),
  open3 = document.getElementById('open3'),
  close1 = document.getElementById('close1'),
  close2 = document.getElementById('close2'),
  close3 = document.getElementById('close3'),
  modal_container = document.getElementById('modal_container'),
  modal2_container = document.getElementById('modal2_container'),
  modal3_container = document.getElementById('modal3_container');

open1.addEventListener('click', () => {
  modal_container.classList.add('show');
});

open2.addEventListener('click', () => {
  modal2_container.classList.add('show');
});

open3.addEventListener('click', () => {
  modal3_container.classList.add('show');
});

close1.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

close2.addEventListener('click', () => {
  modal2_container.classList.remove('show');
});

close3.addEventListener('click', () => {
  modal3_container.classList.remove('show');
});
