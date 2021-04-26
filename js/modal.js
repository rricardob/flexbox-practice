/*const openModal = document.getElementById('open')*/

const modalPage = () => {
  const modal_container = document.getElementById('modal_container');
  modal_container.classList.add('show');
};
const closeModal = () => {
  const modal_container = document.getElementById('modal_container');
  modal_container.classList.remove('show');
};
