function mostrarPares() {
    const n = parseInt(document.getElementById('numberInput').value);
    const resultadoDiv = document.getElementById('resultado');
    
    if (isNaN(n) || n < 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número entero no negativo.';
        return;
    }

    let pares = [];
    for (let i = 0; i <= n; i += 2) {
        pares.push(i);
    }

    resultadoDiv.innerHTML = pares.join(', ');
}
