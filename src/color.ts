import { rgbToHex } from "./colorutils";
import { sanitizeCodeName } from "./utils";



export const DEFAULT_COLOR_NAME = "Anoncolor";
const STANDARD_VALUES: number[] = [
	50, 100, 200, 300, 400,
	500,
	600, 700, 800, 900, 950,
];

function printColors (heading: string, colors: Color[]) {
	console.log(heading);
	for (let idx=0; idx<colors.length; idx++) {
		console.log(`\t#${idx+1} ${colors[idx]}`);
	}
}

export class Color {
	r: number = 0;
	g: number = 0;
	b: number = 0;
	a: number = 100;
	hex: string;
	readonly name: string;
	readonly codeName: string;
	value: number = 500;

	constructor(rgb: number[], name: string=DEFAULT_COLOR_NAME) {
		if (rgb && rgb.length >= 3) {
			this.r = rgb[0] % 256;
			this.g = rgb[1] % 256;
			this.b = rgb[2] % 256;
		}

		this.hex = rgbToHex(this.rgb);
		this.name = name.trim();
		this.codeName = sanitizeCodeName(this.name);
	}

	get rgb () : number[] {
		return [this.r, this.g, this.b];
	}

	makeCopy (name: string|null=null) : Color {
		const copy = new Color(this.rgb, name || this.name);
		return copy;
	}

	getColorsInBetween (other: Color, n: number = 5) : Color[] {
		const colors = [];

		for (let x=0; x<n; x++) {
			const rgbArray = [];
			for (const c in [0, 1, 2]) {
				const base = this.rgb[c];
				const summit = other.rgb[c];
				const gap = summit - base;

				const step = (gap / (n+1));
				const offset = step * (x + 1);
				const component = Math.floor(base + offset);
				rgbArray.push(component);
			}

			const color = new Color(rgbArray);
			colors.push(color);
		}

		return colors;
	}

	getShades (n: number = 5) : Color[] {
		return this.getColorsInBetween(BLACK, n);
	}

	getTints (n: number = 5) : Color[] {
		return this.getColorsInBetween(WHITE, n);
	}

	getTones (n: number = 5) : Color[] {
		return this.getColorsInBetween(GRAY, n);
	}


	getPalette (n: number = 5) : Color[] {
		const shades = this.getShades(n).reverse();
		const tints = this.getTints(n);
		const palette = [...shades, this.makeCopy(), ...tints];
		return palette;
	}

	getStandardPalette () : Color[] {
		const palette = this.getPalette();
		palette.forEach((c, idx) => c.value = STANDARD_VALUES[idx]);
		return palette;
	}

	printStandardPalette () {
		const palette = this.getStandardPalette();
		console.log(`Standard palette for ${this.name}:`);
		palette.forEach((color, idx) => {
			console.log(`\t#${idx+1} ${color}`);
		});
	}


	printShades = () => printColors(`5 shades of ${this.name}`, this.getShades());
	printTints = () => printColors(`5 tints of ${this.name}`, this.getTints());
	printTones = () => printColors(`5 tones of ${this.name}`, this.getTones());

	toString () {
		return `${this.name} (${this.value}) [${this.rgb.join(', ')}]`;
	}
}

const BLACK = new Color([0, 0, 0]);
const GRAY = new Color([127, 127, 127]);
const WHITE = new Color([255, 255, 255]);
