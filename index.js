import { vegetablesArray } from './data.js'

const chooseVegetable = document.getElementById('choose-vegetable')
const getVegetableBtn = document.getElementById('getVegetableBtn');
const typeOfVegetables = document.getElementById('vegetables')
const modal = document.getElementById('modal')
const innerModal = document.getElementById('inner-modal')
const closeBtn = document.getElementById('close-btn')


chooseVegetable.addEventListener('change', getVegetable);
getVegetableBtn.addEventListener('click', displayVegetableImage);
closeBtn.addEventListener('click', closeModal)


// function to filter arrays of object containing the specified value in the select element
function getVegetable() {
    if (document.querySelector('option:checked')) {
        const vegetable = document.querySelector('option:checked').value
    
        const foundVegetableArray = vegetablesArray.filter(function(veges) {
           if (vegetable) {
            return veges.vegetableName.includes(vegetable)
           }
        })
        return foundVegetableArray[0]
    } 
} 
   

// displays images of vegetables in the modal
function displayVegetableImage() {
    const vegetableObject = getVegetable()
     innerModal.innerHTML =  `
             <img 
             class="vegetable-img"
             src="./images/${vegetableObject.image}"
             alt="${vegetableObject.alt}"
             >`
 
     modal.style.display='block'
 }
   

// function to close modal
function closeModal() {
    modal.style.display='none'
}

// displays vegetables in the select list 
function showVegetables(vegetableDB) {

    for ( let eachVegetable of vegetableDB){
        typeOfVegetables.innerHTML += `
        <option>
          ${eachVegetable.vegetableName}
        </option>`
    }

}

showVegetables(vegetablesArray)