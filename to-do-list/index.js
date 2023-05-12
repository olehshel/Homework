const btnAdd = document.querySelector('#btn-add');
const toDoList = document.querySelector('.to-do-list');

btnAdd.addEventListener('click', (e) => {
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');

    newLi.setAttribute('class', 'to-do-list-item');
    newSpan.setAttribute('class', 'to-do-list-item-text');
    newBtn.classList.add('to-do-list-item-btn');

    const userText = prompt('What is your task ?');

    newSpan.textContent = userText;
    newBtn.textContent = 'Delete';

    newSpan.append(newBtn);
    newLi.append(newSpan);
    toDoList.append(newLi);

    newBtn.addEventListener('click', () => {
        newLi.remove();
    });
});