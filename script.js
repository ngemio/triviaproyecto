function datos() {
    const name = document.getElementById('name-ejemplo').value;

    sessionStorage.setItem("nombre", name);

    window.open("preguntas.html", "_self"); 
}
// Declaración de preguntas
var preguntas = [
    "Cuál fue el primer software desarrollado? ",
    "Cuál fue el primer mensaje transmitido en Internet? ",
    "Qué es la World Wide Web?",
    "Cuál de estos NO es un Sistema Operativo?",
    "¿Qué es un algoritmo?",
    "¿En qué casos se utiliza la estructura de control FOR?",
    "¿Quién es conocido como el Padre de la Computación?",
    "Qué es HTML?"
    
];

// Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas.
var opciones = [
    ["ENIAC",
    "EDSAC",
    "ÁBACO",
    "UNIVAC"],

    ["Ok!",
    "Hello!",
    "Lo!",
    "Equisde"],

    ["Es un tipo común de ciberataque por internet",
    "Es un dispositivo de memoria de gran capacidad integrado en la computadora o en otro dispositivo electrónico",
    "Es un lenguaje de programación ampliamente utilizado en las aplicaciones web y el desarrollo de software",
    "Es un sistema informático que permite la creación y acceso a documentos interconectados mediante enlaces"],

    ["Windows",
    "Linux",
    "Firefox",
    "iOS"],

    ["Es un conjunto de pasos ordenados para realizar una tarea",
    "Es un dispositivo de hardware para almacenar datos",
    "Es una forma de codificar mensajes secretos",
    "Es un programa compilador"],

    ["Se utiliza para múltiples opciones",
    "Se utiliza cuando se conoce el número de veces que se repetirá la acción",
    "Se utiliza cuando sólo cuentan con dos opciones, verdadero o falso",
    "Se utiliza para codificar un mensaje"],

    ["Carl Friedrich Gauss",
    "Bill Gates",
    "Alan Turing",
    "Charles Babbage"],

    ["Es una herramienta para dibujar figuras geométricas ",
    "Es un lenguaje de Marcado de Hipertexto para la creación de páginas web",
    "Es un lenguaje orientado a objetos, permitiendo la encapsulación, la herencia y el polimorfismo",
    "Es un tipo de conexión a internet"]
    ]

var puntajePorOpcion = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0]
  //27 22 17 12 10
  //22 22 14 11 10   
]

var imgPorPreg = [
    "https://www.codium.ai/wp-content/uploads/2023/10/how-does-code-integrity-work.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXA3YjQxaWw1aHBqb2NpMnk5MHp5YTdyYTdqMXVjZHNhNmg4dmMzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9J7tdYltWyXIY/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmlwZW1weWtkb2N1Z3J1bnhianYzdWN2aWd2ZDBlYmI4MDI5a2R3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4nEX49exKktpOubjhI/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNnZ2Z0enpra3IyaHA1Mjg4M2E0ZnFsNHMydXpkenlrOG9pOXc2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4N5ddOOJJ7gtKTgNac/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzNndDlxd212NDA0OXQ2bDF5b3FkeGpvOGZyMml0ZG5kemprZmc1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PkD8o1I8w55aE/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm9rYXYzazR4d3lmcHNnb3puaTdycXR2amU2OG5ua21hOGF2OGFlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.webp",
    "https://i.pinimg.com/originals/0b/58/66/0b5866bbbfd04f43c86c205eb6dfaef8.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2V0ZnJ3eGt1MDExbjJieXdhOWQ1OHNoNXpscGRkcmt4aHN2bjJhMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fuJPZBIIqzbt1kAYVc/giphy.webp"

]

// Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

// Despliegue de los resultados
function mostrarResultado() {
    // Se remueven los hijos del div con clase "card", dentro de él agregaremos los resultados
    var div = document.getElementsByClassName("card")[0];
    var nombre = sessionStorage.getItem("nombre");
    div.innerHTML = "";

    // Se actualiza la barra de progreso
    document.getElementById("barra-progreso").value = i * 100 / (preguntas.length - 1);

    
    
    // Agregamos los elementos correspondientes a los resultados
    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";
    div.innerHTML += `<p class='resultado_obtenido'>${nombre}, Has obtenido ${puntaje} puntos`;

    

    
}

// Actualiza el puntaje acumulado según la opción seleccionada y avanza a la siguiente pregunta o muestra los resultados
function actualizarPuntaje(opcion) {
    // Calcula el índice de la opción seleccionada
    var indice = opcion - 1;
    // Incrementa el puntaje acumulado con el valor correspondiente a la opción seleccionada
    puntaje += puntajePorOpcion[i][indice];
// Incrementa el índice de la pregunta actual
    i++
    // Si aún quedan preguntas por responder, muestra la siguiente pregunta
    if (i < preguntas.length) {
      
        siguientePregunta();
    } else { // Si no quedan preguntas, muestra los resultados
        mostrarResultado();
    }
}

// Muestra la siguiente pregunta y sus opciones
function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("Ayudita").src = imgPorPreg[i];
  
    
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
    
}

siguientePregunta();  // Muestra la primera pregunta
// Agrega "event listeners" a los elementos de las opciones para detectar cuando el usuario selecciona una opción
// y actualizar el puntaje y avanzar a la siguiente pregunta según la opción seleccionada
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);
});


