import { Color, DEFAULT_COLOR_NAME } from "./color";
import { hexToRgb, rgbToHex } from "./colorutils";



export function fromHex (hex: string, name: string=DEFAULT_COLOR_NAME) : Color|null {
	const rgb = hexToRgb(hex);
	if (rgb) {
		const color = new Color(rgb, name);
		return color;
	}
	return null;
}

export function fromRgb (rgb: number[], name: string=DEFAULT_COLOR_NAME) : Color|null {
	if (rgb && rgb.length === 3) {
		const color = new Color(rgb, name);
		return color;
	}
	return null;
}

export function fromColor (color: Color, name: string=DEFAULT_COLOR_NAME) : Color|null {
	if (color) {
		return color.makeCopy(name);
	}
	return null;
}

export function getNeutral (c: number, name: string=DEFAULT_COLOR_NAME) : Color {
	const color = new Color([c, c, c], name);
	return color;
}



export function fromHexSafe (hex: string, name: string) : Color {
	const color = fromHex(hex, name);
	if (color) {
		return color;
	}
	return new Color([], name);
}

export function fromRgbSafe (rgb: number[], name: string) : Color {
	const color = fromRgb(rgb, name);
	if (color) {
		return color;
	}
	return new Color([], name);
}
