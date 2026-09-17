export default function localStorageLoad(key, value) {
	//title, description, dates, priority, status
	const todoJSON = JSON.parse(localStorage.getItem("Todo"));

	const card = document.createElement("div");
	const title = document.createElement("p");
	const description = document.createElement("p");
	const dueDate = document.createElement("p");
	const priority = document.createElement("p");

	card.setAttribute("class", "card");
	card.setAttribute("data-status", "true");
}
