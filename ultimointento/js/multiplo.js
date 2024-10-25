document.getElementById('mostrar').onclick = function() {
    const numero = parseInt(document.getElementById('numero').value);
    const limite = parseInt(document.getElementById('limite').value);
    let resultados = '';

    if (!isNaN(numero) && numero > 0 && !isNaN(limite) && limite > 0) {
        for (let i = 1; i <= limite; i++) {
            if (i % numero === 0) {
                resultados += i + '\n';
            }
        }
    } else {
        resultados = 'Por favor, introduce números válidos.';
    }

    document.getElementById('resultados').value = resultados || 'No hay múltiplos.';
};

document.getElementById('limpiar').onclick = function() {
    document.getElementById('numero').value = '';
    document.getElementById('limite').value = '';
    document.getElementById('resultados').value = '';
};
