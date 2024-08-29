const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const modalContainer = document.getElementById('modal_container');

function openModal(event) {
    event.preventDefault();
    document.body.classList.add('modal-open');
    modalContainer.style.display = 'flex';
}
function closeModal() {
    modalContainer.style.display = 'none';
    document.body.classList.remove('modal-open');
}
function escapekey(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
document.addEventListener('keydown', escapekey);
