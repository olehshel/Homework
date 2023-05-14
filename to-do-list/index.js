const btnAdd = document.querySelector('#btn-add');
const toDoList = document.querySelector('.to-do-list');

btnAdd.addEventListener('click', (e) => {
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    const newInput = document.createElement('input');

    newLi.setAttribute('class', 'to-do-list-item');
    newSpan.setAttribute('class', 'to-do-list-item-text');
    newInput.setAttribute('type', 'checkbox')
    newInput.classList.add('to-do-list-item-input')
    newBtn.setAttribute('class', 'to-do-list-item-btn');

    const userText = prompt('What is your task ?');

    newSpan.textContent = userText;
    newBtn.textContent = 'Delete';
    
    newLi.append(newInput);
    newLi.append(newSpan);
    newLi.append(newBtn);
    toDoList.append(newLi);

    newBtn.addEventListener('click', () => {
        newLi.remove();
    });

    newInput.addEventListener('change', () => {
        if (newInput.checked){
            newSpan.style.opacity = '0.5'
            newBtn.style.opacity = '0.7'
        } else {
            newSpan.style.opacity = '1'
            newBtn.style.opacity = '1'
        }
    })
});