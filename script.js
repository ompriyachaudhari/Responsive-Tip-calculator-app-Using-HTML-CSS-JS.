const tipAmount = document.querySelector('.tipAmt')
const totalAmount = document.querySelector('.totalAmt')
const bill = document.querySelector('.bill')
const numPeople = document.querySelector('.numPeople')
const buttons = document.querySelectorAll('.Tips button')
const custom = document.querySelector('#customBtn')
const forZero = document.querySelector('.ifZero')
const inputBox = document.querySelector('.value2')
var value1
var value2
var value3
bill.addEventListener('change', () => {
  value1 = bill.value
  console.log(value1)
})

buttons.forEach(button => {
  button.addEventListener('click', () => {
    value2 = parseFloat(button.innerText)
    console.log(value2)
    button.classList.remove('active')
  })
  button.classList.add('active')
})
custom.addEventListener('change', () => {
  value2 = custom.value
  console.log(value2)
})
numPeople.addEventListener('change', () => {
  value3 = numPeople.value
  console.log(value3)

  let tipValue = (value1 * (value2 / 100)) / value3
  tipAmount.innerText = `$${tipValue.toFixed(2)}`
  totalAmount.innerText = '$' + (value1 / value3 + tipValue).toFixed(2)
  if (value3 == 0) {
    tipAmount.innerText = '$0.00'
    totalAmount.innerText = '$0.00'
    inputBox.style.border = '1px solid red'
    forZero.innerText = "Can't be zero"
    forZero.style.color = 'red'
  }
  if (value3 < 0) {
    tipAmount.innerText = '$'
    totalAmount.innerText = '$'
    inputBox.style.border = '1px solid red'
    forZero.innerText = "Can't be negative"
    forZero.style.color = 'red'
  }
})
