export const setCookie = (cookie_name, value, days) => {
	let exdate = new Date();
	exdate.setDate(exdate.getDate() + days);
	let cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
	document.cookie = cookie_name + '=' + cookie_value;
}

export const getCookie = (cookie_name) => {
	let x, y;
	let val = document.cookie.split(';');

	for (var i = 0; i < val.length; i++) {
		x = val[i].substr(0, val[i].indexOf('='));
		y = val[i].substr(val[i].indexOf('=') + 1);
		x = x.replace(/^\s+|\s+$/g, '');
		if (x === cookie_name) {
			return unescape(y);
		}
	}
}
