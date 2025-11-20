function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);      //inputElement.value is a string have to change to integer for math.
// Whenever we get a value from the DOM, the value will be a string.
    if(cost < 40 && cost >= 0){
        cost = cost + 10;
    } else if(cost < 0) {
        document.querySelector('.js-error-message')
            .classList.add('js-error-message');
        document.querySelector('.js-error-message')
            .innerHTML = 'Error: cost cannot be less $0';
    }

    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
};

function handleCostKeydown(event) {
    //console.log(event.key);
    if(event.key === 'Enter') {
        calculateTotal();
    }
};


