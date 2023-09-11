const calculate = () => {
    let num1 = parseInt(document.getElementById('first_num').value);
    let num2 = parseInt(document.getElementById('second_num').value);
    let num3 = parseInt(document.getElementById('third_num').value);
    const results = document.getElementById('results');
    results.style.opacity = 1;

    let sum = num1 + num2 + num3;
    let average = (sum / 3).toFixed(2);
    let product = num1 * num2 * num3;
    let smallest = Math.min(num1, num2, num3);
    let largest = Math.max(num1, num2, num3);

    if (isNaN(sum)) {
        results.textContent = 'Only numeric inputs are allowed';
    } else {
        results.textContent = `
        Sum: ${sum} 
        Average: ${average} 
        Product: ${product} 
        Min Value: ${smallest} 
        Max Value: ${largest}`
    }
}

const clearForm = () => {
    document.getElementById('first_num').value = '';
    document.getElementById('second_num').value = '';
    document.getElementById('third_num').value = '';
    document.getElementById('results').textContent = ''

}

$(function() {
    $('#fade_button').click(() => {
        let resultDiv = $('#results')
        if (resultDiv.textContent !== '') {
            resultDiv.fadeTo('slow', .7);
        }
    });

 });