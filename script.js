// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar el primer paso visible
    document.getElementById('step1').style.display = 'block';
});

// Función para cambiar entre pasos
function nextStep(currentStep, nextStep) {
    // Ocultar el paso actual
    document.getElementById(currentStep).style.display = 'none';
    
    // Mostrar el siguiente paso
    document.getElementById(nextStep).style.display = 'block';
}

// Función para mostrar el mensaje final
function showFinalMessage() {
    document.getElementById('finalMessage').style.display = 'block';
    
    // Ocultar todos los pasos
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
}