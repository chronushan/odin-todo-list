import "./style.css";
import Todo from "./javascripts/todo_DOM.js";
import showDialog from "./javascripts/todo_dialogue.js";
import newTodoButton from "./javascripts/create_new_todo_button.js";

const newTodo = new Todo("Test 3", "Test 3", "", "High");
newTodo.createTodoDOM();
const newTodo2 = new Todo("Test 3", "Test 3", "", "High");
newTodo2.createTodoDOM();
const newTodo3 = new Todo("Test 3", "Test 3", "", "High");
newTodo3.createTodoDOM();

showDialog();
newTodoButton();

localStorage.setItem("title", "");
localStorage.setItem("description", "");
localStorage.setItem("dueDate", "");
localStorage.setItem("priority", "");
localStorage.setItem("status", "");

const titleArr = [];
const descriptionArr = [];
const datesArr = [];
const priorityArr = [];
const statusArr = [];
