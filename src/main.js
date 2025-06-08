/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
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

function handleSubmit(event) {
  event.preventDefault();
  const title = event.target.elements.taskName.value;
  const description = event.target.elements.taskDescription.value;
  // console.log(title);
  // console.log(description);
  const message = { title, description, id: nanoid() };
  // console.log(message);

  list.insertAdjacentHTML('beforeend', markupItem());
}

function markupItem(message) {
  return `
  <li class="task-list-item" data-id="${id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${description}</p>
  </li>
  `;
}
console.log(markupItem());
