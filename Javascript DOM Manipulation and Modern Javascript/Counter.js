const countValue = document.querySelector('#counter');
const increment = () => {
    let value = countValue.innerText;
    // Here the text will be in form of string and hence convert it to integer
    intValue = parseInt(value);
    intValue = intValue + 1;
    countValue.innerText = intValue;
}
const decrement = () => {
    let value = countValue.innerText;
    // Here the text will be in form of string and hence convert it to integer
    intValue = parseInt(value);
    intValue = intValue - 1;
    countValue.innerText = intValue;
}
