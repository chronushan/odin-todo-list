import "./style.css";
import Todo from "./javascripts/todo_DOM.js";
import showDialog from "./javascripts/todo_dialogue.js";
import newTodoButton from "./javascripts/create_new_todo_button.js";
import localStorageSave from "./javascripts/localStorage_save.js";
import localStorageLoad from "./javascripts/localStorage_load.js";

showDialog();
newTodoButton();
localStorageLoad();
