function updateTotalPrice(button) {
    button.classList.toggle('selected');

    const value = button.value;
    const price = parseInt(value.match(/\d+/)[0]);

    const totalElement = document.querySelector('input[type="text"]');
    let currentTotal = parseInt(totalElement.value.match(/\d+/)[0]);

    if (button.classList.contains('selected')) {
        //currentTotal += price;
        currentTotal = currentTotal+price;
    } else {
        currentTotal -= price;
    }

    totalElement.value = 'Total: ' + currentTotal;
}
