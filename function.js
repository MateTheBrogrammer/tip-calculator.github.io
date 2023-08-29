const bill = document.getElementById('bill').value;

const btn5 = document.getElementById('5');
const btn10 = document.getElementById('10');
const btn15 = document.getElementById('15');
const btn25 = document.getElementById('25');
const btn50 = document.getElementById('50');
const custom = document.getElementById('custom');

const tipCalculated = document.getElementById('tipCalculated');
const totalCalculated = document.getElementById('totalCalculated');



btn5.addEventListener("click", function(){
    const billInput = document.getElementById('bill');
    const tipCalculated = document.getElementById('tipCalculated');
    const totalCalculated = document.getElementById('totalCalculated');

    const bill = parseFloat(billInput.value);

    if (isNaN(bill)) {
        alert("Please fill in the Bill input with a valid number")
    } else {
        const result = bill * (5/100);
        tipCalculated.textContent = result.toFixed(2);
        const total = bill + result;
        totalCalculated.textContent = total.toFixed(2);
    }
})

btn10.addEventListener("click", function(){
    const billInput = document.getElementById('bill');
    const tipCalculated = document.getElementById('tipCalculated');
    const totalCalculated = document.getElementById('totalCalculated');

    const bill = parseFloat(billInput.value);

    if (isNaN(bill)) {
        alert("Please fill in the Bill input with a valid number")
    } else {
        const result = bill * (10/100);
        tipCalculated.textContent = result.toFixed(2);
        const total = bill + result;
        totalCalculated.textContent = total.toFixed(2);
    }
})

btn15.addEventListener("click", function(){
    const billInput = document.getElementById('bill');
    const tipCalculated = document.getElementById('tipCalculated');
    const totalCalculated = document.getElementById('totalCalculated');

    const bill = parseFloat(billInput.value);

    if (isNaN(bill)) {
        alert("Please fill in the Bill input with a valid number")
    } else {
        const result = bill * (15/100);
        tipCalculated.textContent = result.toFixed(2);
        const total = bill + result;
        totalCalculated.textContent = total.toFixed(2);
    }
})

btn25.addEventListener("click", function(){
    const billInput = document.getElementById('bill');
    const tipCalculated = document.getElementById('tipCalculated');
    const totalCalculated = document.getElementById('totalCalculated');

    const bill = parseFloat(billInput.value);

    if (isNaN(bill)) {
        alert("Please fill in the Bill input with a valid number")
    } else {
        const result = bill * (25/100);
        tipCalculated.textContent = result.toFixed(2);
        const total = bill + result;
        totalCalculated.textContent = total.toFixed(2);
    }
})

btn50.addEventListener("click", function(){
    const billInput = document.getElementById('bill');
    const tipCalculated = document.getElementById('tipCalculated');
    const totalCalculated = document.getElementById('totalCalculated');

    const bill = parseFloat(billInput.value);

    if (isNaN(bill)) {
        alert("Please fill in the Bill input with a valid number")
    } else {
        const result = bill * (50/100);
        tipCalculated.textContent = result.toFixed(2);
        const total = bill + result;
        totalCalculated.textContent = total.toFixed(2);
    }
})

custom.addEventListener("input", function(){
    const billInput = document.getElementById('bill');
    const tipCalculated = document.getElementById('tipCalculated');
    const totalCalculated = document.getElementById('totalCalculated');
    const customInput = document.getElementById('custom');

    const bill = parseFloat(billInput.value);
    const custom = parseFloat(customInput.value);

    if (isNaN(bill)) {
        alert("Please fill in the Bill input with a valid number")
    } else if (custom > 100) {
        alert("You can't type more then 100 in custom tip!")
        tipCalculated.textContent = NaN;
        totalCalculated.textContent = NaN;
    } else if (custom < 0) {
        alert("You can't type less then 0 in custom tip!")
        tipCalculated.textContent = NaN;
        totalCalculated.textContent = NaN;
    } else {
        const result = bill * (custom/100);
        tipCalculated.textContent = result.toFixed(2);
        const total = bill + result;
        totalCalculated.textContent = total.toFixed(2);
    }
})