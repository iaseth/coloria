


function componentToHex (c: number) : string {
	const cx = c % 256;
	const hex = cx.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex (rgb: number[]) : string {
	const [r, g, b] = rgb;
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb (hex: string) : number[]|null {
	hex = hex.trim();
	if (hex.startsWith("#")) {
		hex = hex.slice(1);
	}

	if (hex.length === 3) {
		const r = parseInt(hex[0], 16) * 17;
		const g = parseInt(hex[1], 16) * 17;
		const b = parseInt(hex[2], 16) * 17;
		return [r, g, b];
	} else if (hex.length === 6) {
		const r = parseInt(hex.slice(0, 2), 16);
		const g = parseInt(hex.slice(2, 4), 16);
		const b = parseInt(hex.slice(4, 6), 16);
		return [r, g, b];
	} else {
		return null;
	}
}



export function hslToRgb (hsl: number[]) : number[] {
	const [h, s, l] = hsl;

	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs((h / 60) % 2 - 1));
	const m = l - c/2;

	let r = 0, g = 0, b = 0;

	if (0 <= h && h < 60) {
		r = c; g = x; b = 0;
	} else if (60 <= h && h < 120) {
		r = x; g = c; b = 0;
	} else if (120 <= h && h < 180) {
		r = 0; g = c; b = x;
	} else if (180 <= h && h < 240) {
		r = 0; g = x; b = c;
	} else if (240 <= h && h < 300) {
		r = x; g = 0; b = c;
	} else if (300 <= h && h < 360) {
		r = c; g = 0; b = x;
	}

	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return [r, g, b];
}

export function rgbToHsl (rgb: number[]) : number[] {
	const [r, g, b] = rgb.map(c => c/255);

	const cmin = Math.min(r, g, b);
	const cmax = Math.max(r, g, b);
	const delta = cmax - cmin;

	let h = 0, s = 0, l = 0;

	if (delta === 0) {
		h = 0;
	} else if (cmax === r) {
		h = ((g-b) / delta) + 6;
	} else if (cmax === g) {
		h = ((b-r) / delta) + 2;
	} else {
		h = ((r-g) / delta) + 4;
	}

	h = Math.round(h * 60);
	if (h < 0) h += 360;
	if (h >= 360) h -= 360;

	l = (cmax + cmin) / 2;
	s = (delta === 0) ? 0 : delta / (1 - Math.abs(2 * l - 1));

	s = Math.round(s * 100);
	l = Math.round(l * 100);

	return [h, s, l];
}



export function hslToHsv (hsl: number[]) : number[] {
	const [h, s, l] = hsl;
	const v = Math.round(l + (s*Math.min(l, 100-l)/100));
	let s2 = 0;

	if (v !== 0) {
		s2 = Math.round(2 * 100 * (1 - l/v));
	}
	return [h, s2, v];
}

export function hsvToHsl (hsv: number[]) : number[] {
	const [h, s, v] = hsv;
	const l = Math.round(v - v*s/200);
	let s2 = 0;

	if (l !== 0 && l !== 100) {
		s2 = Math.round(100 * (v-l)/Math.min(l, 100-l));
	}
	return [h, s2, l];
}



export function hsvToRgb (hsv: number[]) : number[] {
	const hsl = hsvToHsl(hsv);
	return hslToRgb(hsl);
}

export function rgbToHsv (rgb: number[]) : number[] {
	const hsl = rgbToHsl(rgb);
	return hslToHsv(hsl);
}


