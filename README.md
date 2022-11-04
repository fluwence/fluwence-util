# Fluwence Util
🛠 Fluwence Utility Package for making complex tasks simpler.

```bash
npm install fluwence-util
```


+ Capitalize First Character/Letter of first word of a Sentence

```js
const { capitalizeFirstChar } = require('fluwence-util');

const sentence = 'my name is fluwence!';

const newSentence = capitalizeFirstChar(sentence); // Capitalizes only the first letter of first word

console.log(newSentence); // "My name is fluwence!"
```


+ Capitalize each new word of a Sentence

```js
const { capitalizeFirstCharForEach } = require('fluwence-util');

const sentence = 'my name is fluwence!';

const newSentence = capitalizeFirstCharForEach(sentence); // Capitalizes first letter of every new word

console.log(newSentence); // "My Name Is Fluwence!"
```


+ Validate Usernames, can only contain: `A-Z`, `a-z`, `0-9`, `_`, `-`, `.`

```js
const { isValidUsername } = require('fluwence-util');

const username_1 = 'fluwence_user';
const username_2 = 'fluwence$user';

console.log(isValidUsername(username_1)); // true
console.log(isValidUsername(username_2)); // false
```