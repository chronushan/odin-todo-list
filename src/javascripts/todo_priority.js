export default function priorityToggle() {
	const priorty = document.querySelector(".priority, .dialoguePriority");
	if ((priorty.textContent = "Low")) {
		priorty.textContent = "Medium";
		priorty.setAttribute("data-priority", "Medium");
	} else if ((priorty.textContent = "Medium")) {
		priorty.textContent = "High";
		priorty.setAttribute("data-priority", "High");
	} else {
		priorty.textContent = "Low";
		priorty.setAttribute("data-priority", "Low");
	}
}
