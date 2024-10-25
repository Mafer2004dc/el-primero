document.getElementById('submit').addEventListener('click', function() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    const positiveNumbers = numbers.filter(num => num > 0);
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = positiveNumbers.length > 0 ? positiveNumbers.join(', ') : 'No hay números positivos';
});
