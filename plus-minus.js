window.onload = function() {

let amountValue = 0;
let amountBox = document.getElementById('amount');
let amountText = amountBox.innerText = amountValue;
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let addToBasket = document.getElementById('addToBasket');
let basket = document.getElementById('basket');
let clearBasket = document.getElementById('clearBasket');
let undo = document.getElementById('undo');
const MIN_VALUE = 0;
const MAX_VALUE = 20;

// function CheckLocalStorage(showThis) {
  if (localStorage.getItem("basket") === null) {
    console.log('No local storage, let\'s initialise it.');
    localStorage.setItem("basket", JSON.stringify([]));
  }
// }

// var checkIfStored = new CheckLocalStorage;



function checkIfZero(e) {
  if (e <= MIN_VALUE) {
    minus.disabled = true;
    addToBasket.disabled = true;
  } else {
    minus.disabled = false;
    addToBasket.disabled = false;
  }

  if (e >= MAX_VALUE) {
    plus.disabled = true;
  } else {
    plus.disabled = false;
  }
}

function toggleClearButton() {
  let basketLength = basketArray.length;
  if (basketLength === 0) {
    clearBasket.disabled = true;
    undo.disabled = true;
  } else {
    clearBasket.disabled = false;
    undo.disabled = false;
  }
}

let basketArray = JSON.parse(localStorage.getItem("basket"));
basket.innerHTML = basketArray;

console.log(basketArray);

checkIfZero(amountText);
toggleClearButton(addToBasket);

  plus.addEventListener('click', function() {
    amountText++;
    amountBox.innerText = amountText;
    checkIfZero(amountText);
  });

  minus.addEventListener('click', function() {
    amountText--;
    amountBox.innerText = amountText;
    checkIfZero(amountText);
  });

  addToBasket.addEventListener('click', function() {
    basketArray.push(amountText);
    basket.innerHTML = basketArray;
    localStorage.setItem("basket", JSON.stringify(basketArray));
    console.log(basketArray);
    toggleClearButton();
  });

  clearBasket.addEventListener('click', function() {
    basket.innerHTML = '';
    basketArray = [];
    localStorage.setItem("basket", JSON.stringify(basketArray));
    toggleClearButton();
    console.log(basketArray);
  });

  undo.addEventListener('click', function() {
    basketArray.pop();
    basket.innerHTML = basketArray;
    localStorage.setItem("basket", JSON.stringify(basketArray));
    basketLength = basketArray.length;
    console.log(basketArray);
    toggleClearButton(undo);
  });

console.log(amountText);

};
