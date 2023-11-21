 const buttonsClassification = document.querySelectorAll(".classification__number")

const classChange = (element,removeclass,addclass) => {
    element.classList.remove(removeclass)
    element.classList.add(addclass)
};


export const styleClassificationClick  = () => {
    buttonsClassification.forEach((buttons) => {
    buttons.addEventListener("click", () =>{
        
        buttons.classList == "classification__number"?
        
        classChange(buttons,"classification__number","classification__number--active")
        :
        classChange(buttons,"classification__number--active","classification__number")
        })
    })
};


  
