export default function statusToggle(card) {
	if (card.getAttribute("data-status") === "true") {
		card.style.textDecoration = "none";
		card.setAttribute("data-status", "false");
	} else {
		card.style.textDecoration = "line-through";
		card.setAttribute("data-status", "true");
	}
}
