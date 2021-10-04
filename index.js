const myList = document.getElementById('myList')
const myText = document.getElementById('myInput')
const btn = document.getElementById('myButton')


btn.addEventListener('click', doSomething)


function doSomething() {
  const text = myText.value
  // myList.innerHTML += `<li>${text}</li>`
  // myList.innerHTML += '<li>' + text + '</li>'
  const li = document.createElement('li')
  li.textContent = text
  li.classList.add('element')
  // myList.append(li)
  console.log(myList.append(li))
  console.log(myList.appendChild(li))
  // li.addEventListener('click', eraseItem)
}

// function eraseItem () {

// }