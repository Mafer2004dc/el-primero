document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpiar resultados previos

    if (num1 > num2) {
        [num1, num2] = [num2, num1]; // Intercambiar si num1 es mayor que num2
    }

    let numbers = '';
    for (let i = num1 + 1; i < num2; i++) {
        numbers += i + ' ';
    }

    resultDiv.innerHTML = numbers || 'No hay números entre los valores ingresados.';
});
