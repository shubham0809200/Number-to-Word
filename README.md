# Number-to-Word Converter [![](https://img.shields.io/badge/-npm-red)](https://www.npmjs.com/package/@i.shubham.kr/number-to-word)

Converts a number to its word equivalent.

## Installation

```bash
npm i @i.shubham.kr/number-to-word
```

## Usage

```js
const numberToWord = require('@i.shubham.kr/number-to-word')

console.log(numberToWord(1234567890, 'USD' ))
// Output: One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety
```

## Options

| Option | Type   | Default | Description                                       |
| ------ | ------ | ------- | ------------------------------------------------- |
| lang   | string | 'USD'   | Language of the output. Currently supports 'USD'  |
| lang   | string | 'INR'   | Language of the output. Currently supports 'INR'. |
| lang   | string | ''      | Invalid language will return the number as it is. |

## GitHub [![](https://img.shields.io/badge/-GitHub-black)](https://github.com/shubham0809200)

Shubham Kumar
