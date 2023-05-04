
# Coloria
[`Coloria`](https://www.npmjs.com/package/Coloria) is a JavaScript library for color conversion and palette generation.


## Table of contents
* [Coloria](#coloria)
    * [Table of contents](#table-of-contents)
    * [Installation](#installation)
    * [Getting started](#getting-started)
        * [Importing Coloria](#importing-coloria)
        * [Creating Colors](#creating-colors)
            * [Creating Colors from RGB values](#creating-colors-from-rgb-values)
            * [Creating Colors from Hex](#creating-colors-from-hex)
            * [Creating Colors from existing Colors](#creating-colors-from-existing-colors)
            * [Creating Neutral Colors](#creating-neutral-colors)
        * [Getting Shades](#getting-shades)
    * [Package details](#package-details)
    * [Dependencies](#dependencies)
    * [Dev dependencies](#dev-dependencies)
    * [License](#license)


## Installation
You can install [`coloria`](https://www.npmjs.com/package/coloria) with the following command:
```
npm install coloria
```
Or you can install it as a dev dependency:
```
npm install -D coloria
```


## Getting started

### Importing Coloria
First import the `coloria` module:
```
import coloria from "coloria";
```

Or if you are using CommonJS modules:
```
const coloria = require("coloria");
```

### Creating Colors
The `coloria` object contains many factory methods that allow you to create colors from your favorite format:

#### Creating Colors from RGB values
```
const black = coloria.fromRgb([0, 0, 0], "Black");
```
Here, the second argument is the `colorName`, which is optional.

#### Creating Colors from Hex
```
const red = coloria.fromHex("#ff0000", "Red");
```

#### Creating Colors from existing Colors
```
const anotherRed = coloria.fromColor(red, "AnotherRed");
```
Or, you can also do this with a method on the Color object:
```
const anotherRed = red.makeCopy("AnotherRed");
```

#### Creating Neutral Colors
Neutral colors are those which have identical `r`, `g` and `b` values.
Examples are black, white and grey.
Because of how frequently they are used, there is a special `getNeutral()` factory method to help keep your code DRY:
```
const black = coloria.getNeutral(0, "Black");
```


### Getting Shades
The `Color` class has special methods `getShades()`, `getTints()` and `getTones()` that allow you to easily create `shades`, `tints` and `tones` of any color.
Each of these methods accept an optional `length` argument and return an array of `Color` objects.
```
const shades = color.getShades();
```
```
const tints = color.getTints();
```
```
const tones = color.getTones(10);
```



## Package details
| `Name`        | `Value`                                                                        |
| ------------- | ------------------------------------------------------------------------------ |
| `Name`        | `coloria`                                                                      |
| `Description` | `Coloria is a JavaScript library for color conversion and palette generation.` |
| `Version`     | `1.0.2`                                                                        |
| `Author`      | `iaseth`                                                                       |
| `Homepage`    | `https://github.com/iaseth/coloria`                                            |
| `Repository`  | `iaseth/coloria`                                                               |
| `License`     | `MIT`                                                                          |



## Dependencies
This package has no dependencies.


## Dev dependencies
|     | `Package`   | `Version`   |
| --- | ----------- | ----------- |
| 1   | `jest`      | `^29.5.0`   |



## License
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).


