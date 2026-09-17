import { format, parseISO } from "date-fns";

export function formatDate(date) {
	if (!date) return "No date selected";

	const parsedDate = parseISO(date);
	return format(parsedDate, "PPPP");
}
