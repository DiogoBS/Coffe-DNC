const openModalLink = document.getElementById('open-modal');
const modal = document.getElementById('modal-');
const closeModalButton = document.querySelector('.close-');

openModalLink.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
