/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item" data-id>
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
//
//
//
//  main.js — для ініціалізації застосунку та основної логіки.
//import/
//

import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

const form = document.querySelector('.header-form');
form.addEventListener('submit', handleSubmit);

const list = document.querySelector('.tasks-list');
list.addEventListener('click', handkeClick);

const LS_KEY = 'tascs';

let datas = JSON.parse(localStorage.getItem(LS_KEY)) || [];

function handleSubmit(event) {
  event.preventDefault();

  const title = event.target.elements.taskName.value.trim();
  const description = event.target.elements.taskDescription.value.trim();
  // console.log(title);
  // console.log(description);
  if (!title || !description) {
    return alert('Заповніть усі поля!!!');
  }
  const message = { title, description, id: nanoid() };
  // console.log(message);
  datas.push(message);
  list.insertAdjacentHTML('beforeend', markupItem(message));

  event.target.reset();
  localStorage.setItem(LS_KEY, JSON.stringify(datas));
}

visibleDatas(datas);
function visibleDatas(datas) {
  const markupItems = datas.map(markupItem).join('');
  console.log(markupItems);

  list.insertAdjacentHTML('beforeend', markupItems);
}

function markupItem({ title, description, id }) {
  return `
  <li class="task-list-item" data-id="${id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${description}</p>
  </li>
  `;
}

function handkeClick(event) {
  if (event.target.classList.contains('task-list-item-btn')) {
    console.log('ok');
    // localStorage.removeItem(event.target);
    const currentId = event.target.closest('[data-id]').dataset.id;
    // console.log(event.target.closest('[data-id]').dataset.id);
    datas = datas.filter(({ id }) => id !== currentId);
    // презаписати датас,
  }
}
