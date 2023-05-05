import { rgbToHex, rgbToHsl, rgbToHsv } from "./colorutils";
import { TailwindColor } from "./tailwindcolor";
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

function printPalette (heading: string, palette: Color[]) {
	console.log(heading);
	palette.forEach((color, idx) => {
		console.log(`\t#${idx+1} ${color}`);
	});
}

export class Color {
	r: number = 0;
	g: number = 0;
	b: number = 0;
	a: number = 100;
	hex: string = "#000";

	readonly name: string;
	readonly codeName: string;
	value: number = 500;

	constructor(rgb: number[], name: string=DEFAULT_COLOR_NAME) {
		this.setRgb(rgb);
		this.name = name.trim();
		this.codeName = sanitizeCodeName(this.name);
	}

	setRgb (rgb: number[]) {
		if (rgb && rgb.length >= 3) {
			this.r = rgb[0] % 256;
			this.g = rgb[1] % 256;
			this.b = rgb[2] % 256;
		}
		this.hex = rgbToHex(this.rgb);
	}


	get rgb () : number[] {
		return [this.r, this.g, this.b];
	}

	get hsl () : number[] {
		return rgbToHsl(this.rgb);
	}

	get hsv () : number[] {
		return rgbToHsv(this.rgb);
	}

	get hsb () : number[] {
		return rgbToHsv(this.rgb);
	}

	get valueS () : string {
		return `${this.value}`;
	}

	get bgStyle () : Object {
		return {
			backgroundColor: this.hex
		};
	}

	get textStyle () : Object {
		return {
			color: this.hex
		};
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
		const tints = this.getTints(n).reverse();
		const shades = this.getShades(n);
		const palette = [...tints, this.makeCopy(), ...shades];
		return palette;
	}

	getStandardPalette () : Color[] {
		const palette = this.getPalette();
		palette.forEach((c, idx) => c.value = STANDARD_VALUES[idx]);
		return palette;
	}

	getTailwindPalette () : TailwindColor {
		const palette = this.getStandardPalette();
		const paletteObject: any = {};
		palette.forEach(color => paletteObject[color.valueS] = color.hex);
		const tailwindcolor: TailwindColor = paletteObject;
		return tailwindcolor;
	}

	printPalette = (n: number=5) => printPalette(`Palette for ${this.name}:`, this.getPalette(n));
	printStandardPalette = () => printPalette(`Standard palette for ${this.name}:`, this.getStandardPalette());

	printShades = (n: number=5) => printColors(`5 shades of ${this.name}`, this.getShades(n));
	printTints = (n: number=5) => printColors(`5 tints of ${this.name}`, this.getTints(n));
	printTones = (n: number=5) => printColors(`5 tones of ${this.name}`, this.getTones(n));

	toString () {
		return `${this.name} (${this.value}) [${this.rgb.join(', ')}]`;
	}
}

const BLACK = new Color([0, 0, 0]);
const GRAY = new Color([127, 127, 127]);
const WHITE = new Color([255, 255, 255]);
