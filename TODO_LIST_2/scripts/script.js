import {getData, postTodo, deleteTodo, updateTodo} from './api-client.js';

const toDoList = document.querySelector('.todo_list');
const formTodo = document.querySelector('.todo_form');
const inputTodo = document.querySelector('.todo_input');

const addToDoList = async() => {
    toDoList.innerHTML = "";
    const data = await getData();
    const getTodo = data.map(item => {
        createToDo(item);
    });
}
addToDoList();

const createToDo = (item) => {
    const form = document.createElement('form');
    form.setAttribute('id', item._id); // creates ID
    form.classList.add('todo_id');

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.classList.add('todo_checkbox');
    newCheckbox.id = item.description;

    const label = document.createElement('label');
    label.htmlFor = item.description;
    label.innerHTML = item.description;
    label.contentEditable = true;
    label.classList.add('todo_single');

    if (item.done === true) {
        label.style.textDecoration = "line-through";
        newCheckbox.checked = true;
        
    }

    const deleteBtn = document.createElement('i');
    //deleteBtn.type= 'button';
    //deleteBtn.classList.add('delete');
   // deleteBtn.innerHTML = 'X'
    deleteBtn.classList.add("fa-solid");
    deleteBtn.classList.add("fa-trash-can");

    toDoList.insertAdjacentElement('afterbegin', form);
    // toDoList.append(form);
    form.append(newCheckbox, label, deleteBtn);
}

const postNewTodo = async() => {
    formTodo.addEventListener('submit', async(event) => {
        event.preventDefault();
        let item = {
            description: inputTodo.value,
            done: false,
        }
        const post = await postTodo(item);
        const data = await getData();
        const id = data.find(({ description }) => description === inputTodo.value);
        console.log(typeof id);
        item._id = id._id;
        createToDo(item);
    });
}
postNewTodo();

const updateNewLabelTodo = async(event) => {
    const newLabelText = event.target.innerText;
    if (event.target && event.target.classList.contains('todo_single')) {
        const targetID = event.target.parentNode.id;
        const data = await updateTodo(targetID, { description: newLabelText, done: false });
    }
}
toDoList.addEventListener('input', updateNewLabelTodo);

const updateCheckedTodo = async(event) => {
    const labelText = event.target.nextElementSibling.innerText;
    if (event.target && event.target.classList.contains('todo_checkbox')) {
        const targetID = event.target.parentNode.id;
        const data = await updateTodo(targetID, { description: labelText, done: true });
    }
}
toDoList.addEventListener('change', updateCheckedTodo);

const deleteToDoItem = async(event) => {
    const deleteBtn = event.target;
    if (event.target && event.target.classList.contains('fa-trash-can')) {
        event.target.parentNode.classList.add('delete');
        const targetID = event.target.parentNode.id;
        await deleteTodo(targetID);
        addToDoList()
    }
}
toDoList.addEventListener('click', deleteToDoItem);