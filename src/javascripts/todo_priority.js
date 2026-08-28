export default function priorityToggle(priority) {
	if (priority.textContent == "Low") {
		priority.textContent = "Medium";
		priority.setAttribute("data-priority", "Medium");
	} else if (priority.textContent == "Medium") {
		priority.textContent = "High";
		priority.setAttribute("data-priority", "High");
	} else {
		priority.textContent = "Low";
		priority.setAttribute("data-priority", "Low");
	}
}
