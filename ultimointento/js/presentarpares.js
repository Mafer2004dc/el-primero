document.getElementById('mostrarBtn').addEventListener('click', mostrarPares);

function mostrarPares() {
    const n = parseInt(document.getElementById('nInput').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores
    
    if (isNaN(n) || n < 1) {
        resultado.innerHTML = 'Por favor, ingresa un número entero positivo.';
        return;
    }
    
    for (let i = 2; i <= 2 * n; i += 2) {
        resultado.innerHTML += i + '<br>';
    }
}
