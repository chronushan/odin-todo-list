export default function localStorageSave(key, value) {
	let arr = JSON.parse(localStorage.getItem(key));
	if (!arr) {
		arr = [];
	} else {
		arr.push(value);
		localStorage.setItem(key, JSON.stringify(arr));
	}
}
