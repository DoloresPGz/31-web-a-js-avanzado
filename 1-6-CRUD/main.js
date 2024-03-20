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
            itemContainer.innerHTML = ""
            items.forEach(
                item => {
                    const section = document.createElement("section")
                    section.innerHTML = `
                <strong id="${item._id}">${item.name}</strong>
                <p>${item.price}</p>
                <button class="btn btn-edit" data-id="${item._id}">Editar</button>
                <button class="btn btn-delete" data-id="${item._id}">Eliminar</button>
               `
                    itemContainer.appendChild(section)
                }
            );
        })
}

//ALTA DE UN ITEM
itemForm.addEventListener("submit", function (event) {
    event.preventDefault()

    //Cuerpo de mi request, nuevo item para darlo de alta
    const newItem = {
        name: nameInput.value,
        price: priceInput.value
    }

    fetch(apiURL, {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(response => {
            loadItems()
        })
})

//EDICIÓN DE UN ITEM
itemContainer.addEventListener("click", function (event) {

    //event -> Objeto que contiene información sobre el evento que se desencadenó
    //target -> El elemento específico de HTML que desencadenó el evento
    //classList -> Propiedad que me permite acceder a la lista de clases aplicadas a mi elemento
    //contains -> Método de la propiedad classList que verifica 
    //            que la clase esté presente en la lista de clases del elemento
    if (event.target.classList.contains("btn-edit")) {
        //Obtengo el id del artículo al que pertenece el botón
        const itemID = event.target.getAttribute("data-id")
        console.log(itemID);
        const newPrice = prompt("Ingresa el nuevo precio del producto:")
        if (newPrice) {
            let nameItem = document.getElementById(itemID).innerHTML

            fetch(`${apiURL}/${itemID}`, {
                method: "PUT",
                body: JSON.stringify({
                    name: nameItem,
                    price: newPrice
                }),
                headers: {
                    "Content-type": "application/json"
                }

            }).then(response => loadItems())

        }
    }
})



document.addEventListener("DOMContentLoaded", function () {
    loadItems()
})