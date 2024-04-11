document.addEventListener("DOMContentLoaded", function() {
    const speechBubble = document.querySelector(".speech-bubble");
    const message = "Hola, soy Irin, un bot desarrollado por Steven García para ayudarte con ciertas informaciones sobre JGG.";
    let currentCharacter = 0;

    function typeMessage() {
        if (currentCharacter < message.length) {
            speechBubble.style.width = "calc(50% - 20px)"; // Ancho completo de la burbuja
            speechBubble.textContent += message[currentCharacter];
            currentCharacter++;
            setTimeout(typeMessage, 50); // Velocidad de escritura
        }
    }

    typeMessage();
});

function updateBubble(message) {
    document.getElementById('bubble-message').textContent = message;
}

function updateBubble(message) {
    document.getElementById('bubble-message').textContent = message;
}

function showDialog(message) {
    alert(message); // Mostrar un cuadro de diálogo con el mensaje
}


function showDialog(message) {
    // Crear el contenedor del cuadro de diálogo
    var dialogContainer = document.createElement('div');
    dialogContainer.classList.add('dialog-container');

    // Crear el contenido del cuadro de diálogo
    var dialogContent = document.createElement('div');
    dialogContent.classList.add('dialog-content');
    dialogContent.innerHTML = `
        <p>${message}</p>
        <button class="ok-button">OK</button>
    `;
    
    // Agregar el contenido al contenedor
    dialogContainer.appendChild(dialogContent);

    // Agregar el cuadro de diálogo al cuerpo del documento
    document.body.appendChild(dialogContainer);

    // Manejar el clic en el botón OK para cerrar el cuadro de diálogo
    var okButton = dialogContent.querySelector('.ok-button');
    okButton.addEventListener('click', function() {
        document.body.removeChild(dialogContainer);
    });
}
  // Función para verificar si el dispositivo es móvil
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Redirigir si es un dispositivo móvil
if (isMobileDevice()) {
    window.location.href = "te.html";
}