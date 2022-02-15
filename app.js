function updateProductNumber(product, price, increasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;


    if (increasing) {
        productNumber = parseFloat(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseFloat(productNumber) - 1;

    }
    productInput.value = productNumber;
    // update   Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculatetotal();

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculatetotal() {
    const phonetotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phonetotal + caseTotal;
    const tax = subtotal / 10;
    totalPrice = subtotal + tax;




    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}



// phone increase decrease....
document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});


// case increase decrease.....

document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true);

});
document.getElementById('case-minus').addEventListener('click', function () {

    updateProductNumber('case', 59, false);

});