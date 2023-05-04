


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
		const r = parseInt(hex[0], 16);
		const g = parseInt(hex[0], 16);
		const b = parseInt(hex[0], 16);
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
