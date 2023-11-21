const submitButton = document.querySelector(".Submit__interactive__rating")
const modal = document.querySelector(".Modal")
const buttonsClassification = document.querySelectorAll(".classification__number")

const noteValue = [1,2,3,4,5]

export const showModal = () => {
    submitButton.addEventListener("click", () =>{
        modal.showModal();
    })
};

const  closeModal = () =>{
    setTimeout(() => {
        modal.close();
        location.reload()
    }, 7000);
}

export const showAndCloseThanks  = () => {
    buttonsClassification.forEach((buttons) => {
        const convertValues = Number(buttons.textContent)
        buttons.addEventListener("click", () =>{
            noteValue.filter((note) => note === convertValues ? showModal() : "") 
            closeModal();
        })      
    })
};

