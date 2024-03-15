import APIKEY from "./apikey.js";

const apiURL = `https://crudcrud.com/api/${APIKEY}/items`
const nameInput = document.getElementById("article")
const priceInput = document.getElementById("price")
const itemContainer = document.getElementById("article-container")
const itemForm = document.getElementById("crud-form")


//CONSULTA DE LOS ITEMS

function loadItems() {
    
    fetch(apiURL)
    .then(response => response.json())
    .then(items => {
        console.log("respuesta", items)
    })
}

//ALTA DE UN ITEM
itemForm.addEventListener("submit", function (event) {
    event.preventDefault()
    
    const newItem = {
        name: nameInput.value,
        price: priceInput.value 
    }

    fetch(apiURL, {
        method : "POST",
        body: JSON.stringify(newItem),
        headers : {
            "Content-type" : "application/json"
        }
    })
    .then(response => {
        console.log(response);
    })
})


document.addEventListener("DOMContentLoaded", function () {
    //loadItems()
})