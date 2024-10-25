function generarTabla() {
    const tabla = document.getElementById('sumaTabla');
    for (let i = 1; i <= 12; i++) {
        const resultado = 10 + i;
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>10 + ${i}</td><td>=</td><td>${resultado}</td>`;
        tabla.appendChild(fila);
    }
}

// Generar la tabla al cargar la página
window.onload = generarTabla;
