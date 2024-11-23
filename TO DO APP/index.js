let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let task = document.getElementById('task').value
    let priority = document.getElementById('priority').value

    let store = {
        task : task,
        priority : priority
    }
    console.log(store)

    let row = document.createElement('tr')

    let col1 = document.createElement('td');
    col1.innerText = task

    let col2 = document.createElement('td')
    col2.innerText = priority

    let col3 = document.createElement('td')
    col3.innerHTML = ('<button>DELETE</button>')

    row.append(col1, col2, col3)

    let tbody = document.getElementsByTagName('tbody')
    tbody[0].append(row)

    let button = document.querySelectorAll('button')

    for(let i=0; i<button.length; i++){
        button[i].addEventListener("click", () => {
            button[i].parentElement.parentElement.remove();
        })
    }

    task = document.getElementById('task').value='';
    priority = document.getElementById('priority').value='';
})