const items = ['Candles', 'Decorations', 'Chocolate', 'Rum', 'Nut Roast']
const checklist = document.getElementById('checklist')
const addItemInput = document.getElementById('add-item')
const addItemBtn = document.getElementById('add-item-btn')

function addItemsFromArray() {
  checklist.textContent = ''

  items.forEach((item, i) => {
    const checklistItem = document.createElement('div')
    checklistItem.className = 'checklist-item'

    const inputEl = document.createElement('input')
    inputEl.type = 'checkbox'
    inputEl.id = `item-${i}`

    const labelEl = document.createElement('label')
    labelEl.htmlFor = `item-${i}`
    labelEl.textContent = item

    checklistItem.appendChild(inputEl)
    checklistItem.appendChild(labelEl)
    checklist.appendChild(checklistItem)
  })
}

function addNewItem(event) {
  event.preventDefault()
  items.push(addItemInput.value)
  addItemsFromArray()
}

addItemBtn.addEventListener('click', addNewItem)
addItemsFromArray()

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.
