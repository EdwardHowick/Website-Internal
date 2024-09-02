/*
================================================================================
MODAL OPEN AND CLOSE


Description: 
This is used to open and close the modal using the inputs from the user.
================================================================================
*/

//disables the keyboard inputs of the quantity input
window.onload = () => {
    const mouseOnlyNumberInputField = document.getElementById("mouse-only-number-input");
    mouseOnlyNumberInputField.addEventListener("keypress", (event) => {
      event.preventDefault();
    });
}

const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const modalContainer = document.getElementById('modal_container');


//opens the modal section
function openModal(event) {

    //prevents any default javascript actions
    event.preventDefault();
    //makes modal visible using css
    document.body.classList.add('modal-open');
    modalContainer.style.display = 'flex';
}

//closes modal section
function closeModal() {
    //makes modal invisible using css
    modalContainer.style.display = 'none';
    document.body.classList.remove('modal-open');
}

//closes model if escape key pressed
function escapekey(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

//event listeners for the inputs that open and close the modal
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
document.addEventListener('keydown', escapekey);