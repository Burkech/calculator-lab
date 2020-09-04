//Grab the two inputs
//    Validate by logging them out
const sumNum1 = document.getElementById('sum-first-number');
const sumNum2 = document.getElementById('sum-second-number');

const subNum1 = document.getElementById('sub-first-number');
const subNum2 = document.getElementById('sub-second-number');

const multNum1 = document.getElementById('mult-first-number');
const multNum2 = document.getElementById('mult-second-number');

const divNum1 = document.getElementById('div-first-number');
const divNum2 = document.getElementById('div-second-number');

//console.log(num1);
//console.log(num2);

//Grab the sum span: the place where we will inject the sum
//    Validate by logging it out
const sumButton = document.getElementById('sum-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');

//Grab the button
//    Validate by logging it out
const newSumTotal = document.getElementById('sum-total');
const newSubTotal = document.getElementById('sub-total');
const newMultTotal = document.getElementById('mult-total');
const newDivTotal = document.getElementById('div-total');

//We want to have an 'event listener' on the 'click' of the button
//    Validate that the event listener is wired up by logging something ('hello!') out on click
//Get the values of the two inputs
//Add together the VALUE of the two inputs
//Inject the sum into our sum span
sumButton.addEventListener('click', () => {
    const sumNum1value = sumNum1.valueAsNumber;
    const sumNum2value = sumNum2.valueAsNumber;
    const sum = sumNum1value + sumNum2value;
    newSumTotal.textContent = sum;
    console.log(sumNewTotal);
})

subButton.addEventListener('click', () => {
    const subNum1value = subNum1.valueAsNumber;
    const subNum2value = subNum2.valueAsNumber;
    const sub = subNum1value - subNum2value;
    newSubTotal.textContent = sub;
})

multButton.addEventListener('click', () => {
    const multNum1value = multNum1.valueAsNumber;
    const multNum2value = multNum2.valueAsNumber;
    const mult = multNum1value * multNum2value;
    newMultTotal.textContent = mult;
})

    divButton.addEventListener('click', () => {
    const divNum1value = divNum1.valueAsNumber;
    const divNum2value = divNum2.valueAsNumber;
    const div = divNum1value / divNum2value;
    newDivTotal.textContent = div;
});

//console.log(num1value);
//console.log(num2value);



