import { format, parseISO } from "date-fns";

export function formatDate(date) {
	const parsedDate = parseISO(date);
	return format(parsedDate, PPPP);
}
