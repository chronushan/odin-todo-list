export default function priorityCheck() {
	const priority = document.querySelectorAll(".priority");
	priority.forEach((item) => {
		switch (item.textContent) {
			case "Low":
				item.style.background = "RGB(174, 233, 196)";
				break;
			case "Medium":
				item.style.background = "RGB(254, 243, 182)";
				break;
			case "High":
				item.style.background = "RGB(255, 179, 186)";
				break;
		}
	});
}
