import { hexToRgb, rgbToHex } from "./colorutils";



class Color {
	r: number = 0;
	g: number = 0;
	b: number = 0;
	a: number = 100;
	hex: string;

	constructor(rgb: number[]) {
		this.r = rgb[0];
		this.g = rgb[1];
		this.b = rgb[2];
		this.hex = rgbToHex(this.rgb);
	}

	get rgb () : number[] {
		return [this.r, this.g, this.b];
	}

	makeCopy () : Color {
		const copy = new Color(this.rgb);
		return copy;
	}
}


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