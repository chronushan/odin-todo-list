export default function localStorageLoad(key, value) {
	//title, description, dates, priority, status
	const titleArr = JSON.parse(localStorage.getItem("titleArr"));
	const descriptionArr = JSON.parse(localStorage.getItem("descriptionArr"));
	const dueDateArr = JSON.parse(localStorage.getItem("dueDateArr"));
	const priorityArr = JSON.parse(localStorage.getItem("priorityArr"));
	const statusButtonArr = JSON.parse(localStorage.getItem("statusButtonArr"));

	const card = document.createElement("div");
	const title = document.createElement("p");
	const description = document.createElement("p");
	const dueDate = document.createElement("p");
	const priority = document.createElement("p");

	card.setAttribute("class", "card");
	card.setAttribute("data-status", "true");
}
