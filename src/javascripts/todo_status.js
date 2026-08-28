export default function statusToggle() {
	const status = document.querySelector(".card");
	if (status.getAttribute("data-status") === "true") {
		status.style.textDecoration = "none";
	} else {
		status.style.textDecoration = "line-through";
	}
}
