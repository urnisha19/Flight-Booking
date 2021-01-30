//handle ticket input quantity
function getInputValue(ticketClass) {
    const ticketInput = document.getElementById(ticketClass + '-class-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

//handle ticket count increment decrement
function handleTicketChange(ticketClass, isIncreasing) {
    const ticketCount = getInputValue(ticketClass);
    let ticketNewCount = ticketCount;
    if (isIncreasing == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncreasing == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticketClass + '-class-count').value = ticketNewCount;
    calculateTotal();
}

// calculation of ticket prices
function calculateTotal() {
    const firstClassCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    // Calculating subtotal
    const subTotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal-amount').innerText = subTotal;

    // Calculating VAT
    const vat = Math.round(subTotal * .1);
    document.getElementById('vat-amount').innerText = vat;

    // Calculating Total
    const total = subTotal + vat;
    document.getElementById('total-amount').innerText = total;

    // sending ticket count and total bill to confirmation area
    document.getElementById('first-class-ticket').innerText = firstClassCount;
    document.getElementById('economy-class-ticket').innerText = economyCount;
    document.getElementById('total-bill').innerText = total;
}

//handle buttons 
function handleButton(button) {
    const bookingBtn = document.getElementById(button);
    if (button == 'book-now') {
        document.getElementById('form-area').style.display = "none";
        document.getElementById('booking-content-area').style.display = "none";
        document.getElementById('confirmation-area').style.display = "block";
    }
    if (button == 'ok') {
        location.reload();
    }
} 