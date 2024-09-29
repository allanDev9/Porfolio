let modalElement = document.getElementById('modal')

function openModal(){
    modalElement.classList.add('open-modal')
    modalElement.classList.remove('close-modal')
}
function closeModal(){
    modalElement.classList.remove('close-modal')
    setTimeout(() => {
        modalElement.classList.remove('open-modal');
        
    }, 100);
}