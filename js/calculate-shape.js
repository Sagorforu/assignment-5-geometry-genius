let serial = 0;
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
})
// Card Triangle
document.getElementById('btn-triangle').addEventListener('click', function(){
    serial += 1;
    const triangle = getElementName('triangle-name');
    const firstInputField = getInputValue('inputFieldForB');
    const secondInputField = getInputValue('inputFieldForH');
    validationCheck(firstInputField, secondInputField);
    const triangleArea = 0.5 * parseFloat(firstInputField) * parseFloat(secondInputField);
    displayData(triangle, triangleArea);
})

    // Card Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    serial += 1;
    const rectangle = getElementName('rectangle-name');
    const firstInputField = getInputValue('rectangle-w');
    const secondInputField = getInputValue('rectangle-l');
    validationCheck(firstInputField, secondInputField);
    const rectangleArea = parseFloat(firstInputField) * parseFloat(secondInputField);
    displayData(rectangle, rectangleArea);
})
    // Card Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    serial += 1;
    const parallelogram = getElementName('parallelogram-name');
    const firstInputField = getInputValue('parallelogram-b');
    const secondInputField = getInputValue('parallelogram-h');
    validationCheck(firstInputField, secondInputField);
    const parallelogramArea = parseFloat(firstInputField) * parseFloat(secondInputField);
    displayData(parallelogram, parallelogramArea);
})
    // card Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    serial += 1;
    const rhombus = getElementName('rhombus-name');
    const firstInputField = getInputValue('rhombus-d1');
    const secondInputField = getInputValue('rhombus-d2');
    validationCheck(firstInputField, secondInputField);
    const rhombusArea = 0.5 * parseFloat(firstInputField) * parseFloat(secondInputField);
    displayData(rhombus, rhombusArea);
})
    // Card Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    serial += 1;
    const pentagon = getElementName('pentagon-name');
    const firstInputField = getInputValue('pentagon-p');
    const secondInputField = getInputValue('pentagon-b');
    validationCheck(firstInputField, secondInputField);
    const pentagonArea = 0.5 * parseFloat(firstInputField) * parseFloat(secondInputField);
    displayData(pentagon, pentagonArea);
})
    // Card Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    serial += 1;
    const ellipse = getElementName('ellipse-name');
    const firstInputField = getInputValue('ellipse-a');
    const secondInputField = getInputValue('ellipse-b');
    validationCheck(firstInputField, secondInputField);
    const ellipseArea = 3.14 * parseFloat(firstInputField) * parseFloat(secondInputField);
    displayData(ellipse, ellipseArea);
})
// card triangle
document.getElementById('triangle-bg').addEventListener('mouseenter', function(){
    const randomColors = document.getElementById('triangle-bg')
    randomColors.style.backgroundColor = changeColor('triangle-bg')
})
// card rectangle
document.getElementById('rectangle-bg').addEventListener('mouseenter', function(){
    const randomColors = document.getElementById('rectangle-bg')
    randomColors.style.backgroundColor = changeColor('rectangle-bg')
})
// card parallelogram
document.getElementById('parallelogram-bg').addEventListener('mouseenter', function(){
    const randomColors = document.getElementById('parallelogram-bg')
    randomColors.style.backgroundColor = changeColor('parallelogram-bg')
})
// card rhombus
document.getElementById('rhombus-bg').addEventListener('mouseenter', function(){
    const randomColors = document.getElementById('rhombus-bg')
    randomColors.style.backgroundColor = changeColor('rhombus-bg')
})
// card pentagon
document.getElementById('pentagon-bg').addEventListener('mouseenter', function(){
    const randomColors = document.getElementById('pentagon-bg')
    randomColors.style.backgroundColor = changeColor('pentagon-bg')
})
// card ellipse
document.getElementById('ellipse-bg').addEventListener('mouseenter', function(){
    const randomColors = document.getElementById('ellipse-bg')
    randomColors.style.backgroundColor = changeColor('ellipse-bg')
})

/*
Function for randomly colors change
*/
function changeColor(id){
    const colors = document.getElementById(id); 
        let hexColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
        return hexColor;
    }

/*
function for validation
*/
function validationCheck (firstInput, secondInput){
    if (firstInput == '' || secondInput == '' || 
    firstInput <= 0 || secondInput <= 0 || isNaN(firstInput)
    || isNaN(secondInput)){
        return alert ('Please enter valid number');
    }
}

/*
Function for get shape name from heading tag using innerText
*/
function getElementName(id){
    const elementName = document.getElementById(id).innerText;
    return elementName;
}

/*
Function for get value from input field
*/
function getInputValue(id){
    const element = document.getElementById(id).value;
    return element;
}

/*
Function for show result
*/
function displayData(nameOfShape, triangleArea){
    const table = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${serial}</td>
    <td>${nameOfShape}</td>
    <td>${triangleArea.toFixed(2)}cm<sup>2</sup></td>
    <td><button class="side-btn">convert to m<sup>2</sup></button></td>
    `;
    table.appendChild(tr);
}
