console.log('ali');
const openModal = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("data-close-modal");

openModal.addEventListener("click", ()=>{
    modal.showModal();
})
closeModal.addEventListener("click", ()=>{
    modal.close();
})