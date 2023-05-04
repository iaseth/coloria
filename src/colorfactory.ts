import { Color } from "./color";
import { hexToRgb, rgbToHex } from "./colorutils";



export function fromHex (hex: string) : Color|null {
	const rgb = hexToRgb(hex);
	if (rgb) {
		const color = new Color(rgb);
		return color;
	}
	return null;
}

export function fromRgb (rgb: number[]) : Color|null {
	if (rgb && rgb.length === 3) {
		const color = new Color(rgb);
		return color;
	}
	return null;
}

export function fromColor (color: Color) : Color|null {
	if (color) {
		return color.makeCopy();
	}
	return null;
}
