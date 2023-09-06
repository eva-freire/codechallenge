const url = `https://jsonplaceholder.typicode.com/users`;

const form = document.getElementById('form');

let JSONBody = {};


//Función que procesará los datos del formulario
const procesaDatos = (event) => {
event.preventDefault();

// Para sacar los datos creo objeto (js) de tipo FormData q representa el formulario
let formData = new FormData(event.target);
//console.log(formData);

//Object.fromEntries() es un metodo q transforma una lista de pares clave : valor en un objeto JS
let completeData = Object.fromEntries(formData.entries());
JSONBody=completeData;
//console.log(JSONBody);

};


form.addEventListener('submit',function(e){
    procesaDatos(e); 
    
    fetch(url , {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(JSONBody),
    })
    .then ((res) => {
        if (!res.ok) {
            throw new Error("Error en el fetch"); 
        } return res.json(); 
    })
    .then ((data) => {
        console.log ('Registro exitoso! Bienvenid@ ' , data.nombre, data);
    })
    .catch (error => {
        console.log('Error: ' + error);
    })
});
