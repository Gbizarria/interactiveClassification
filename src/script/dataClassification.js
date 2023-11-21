const buttonsClassification = document.querySelectorAll(".classification__number")
const dataClassification = document.querySelector(".thanks__dataClassification__text")


export const textData = () =>{

 
  buttonsClassification.forEach((buttons) =>{
    const convertValues = Number(buttons.textContent)
    buttons.addEventListener("click", () =>{
        dataClassification.innerHTML = `Você selecionou ${convertValues} de 5`
     
    })
})   
} 


