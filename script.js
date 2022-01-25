const billSplitterForm = document.getElementById('splitter-form');

//Runs Function once submit button is pressed
billSplitterForm.addEventListener('submit', billSplitterHandler);

// Bill Splitter Function: Handles and runs all other functions below 
function billSplitterHandler(event){
    event.preventDefault();
    const inputs = getInputs();
    calculateOutput(inputs);
}

// Input Function: Records users Subtotal, Tip Percent, and Guest Number
function getInputs(){
    let subtotal = document.getElementById('subtotal').value;
    let tipPercent = document.getElementById('tip').value;
    let numPeople = document.getElementById('numPeople').value;
    return {subtotal, tipPercent, numPeople};
}

// Output Function: Displays users Total Tip, Total Amount, Tip Per Guest, and Bill Per Guest
function calculateOutput(input) {
    billSplitterForm.reset();

    //Calculating Total Tip, Total Amount, Tip Per Guest, and Bill Per Guest
    let totalTip = (parseFloat(input.subtotal) * parseFloat (input.tipPercent)) / 100;
    let totalAmount = parseFloat(input.subtotal) + totalTip;
    let tipPerPerson = totalTip / parseFloat(input.numPeople);
    let billPerPerson = totalAmount / parseFloat(input.numPeople);
    
    //Setting decimals to 2 decimal points
    document.getElementById('total-bill').innerHTML = `$ ${totalAmount.toFixed(2)}`;
    document.getElementById('per-person').innerHTML = `$ ${billPerPerson.toFixed(2)}`;
    document.getElementById('total-tip').innerHTML = `$ ${totalTip.toFixed(2)}`;
    document.getElementById('tip-per-person').innerHTML = `$ ${tipPerPerson.toFixed(2)}`;
}