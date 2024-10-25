document.getElementById('mostrar').onclick = function() {
    const limite = parseInt(document.getElementById('limite').value);
    let resultados = '';

    if (!isNaN(limite) && limite > 0) {
        for (let i = 1; i <= limite; i++) {
            if (i % 7 === 0) {
                resultados += i + '\n';
            }
        }
    } else {
        resultados = 'Por favor, introduce un número válido.';
    }

    document.getElementById('resultados').value = resultados || 'No hay múltiplos de 7.';
};

document.getElementById('limpiar').onclick = function() {
    document.getElementById('limite').value = '';
    document.getElementById('resultados').value = '';
};
