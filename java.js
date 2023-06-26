
const doc = document;
const tarea = doc.querySelector(".input");
const btnAgregar = doc.querySelector(".boton-agregar");
const divContainer = doc.querySelector(".container");


class Item {
    constructor(tarea){
        const vacio = [""];
        vacio.includes(tarea) ? alert("Complete el campo") : this.crearDiv(tarea);
    }


    crearDiv(tareaAgregar){
        this.tarea = tareaAgregar;
        let inputItem = doc.createElement("input");
        inputItem.type="text";
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = this.tarea;
        const divNuevo = doc.createElement("div");
        const btnEditar = doc.createElement("button");
        const btnRemover = doc.createElement("button");

        btnEditar.innerHTML = '<i class="fas fa-sharp fa-solid fa-lock"></i>';
        btnRemover.innerHTML = '<i class="fas fa-sharp fa-solid fa-trash"></i>';

        btnEditar.classList.add("boton-editar");
        btnRemover.classList.add("boton-remover");
        divNuevo.classList.add("item");

        btnEditar.addEventListener("click", event => {
            event.preventDefault();
            const candado = ['<i class="fas fa-sharp fa-solid fa-lock" aria-hidden="true"></i>', '<i class="fas fa-sharp fa-solid fa-lock-open" aria-hidden="true"></i>']
            btnEditar.innerHTML = (btnEditar.innerHTML === candado[0] ? candado[1] : candado[0]);
            inputItem.disabled = inputItem.disabled === false;
        });

        btnRemover.addEventListener("click", event => {
            event.preventDefault();
            divNuevo.remove();
        });

        divNuevo.appendChild(inputItem);
        divNuevo.appendChild(btnEditar);
        divNuevo.appendChild(btnRemover);
        
        divContainer.appendChild(divNuevo);
    }   
}

let agregarItem = (event) => {
    event.preventDefault();
    new Item(tarea.value.trim());
    tarea.value = "";
}

btnAgregar.addEventListener("click", agregarItem);