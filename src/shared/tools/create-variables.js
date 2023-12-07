const fs = require('fs');
const path = require('path');

const type = process.argv.slice(2)[0];

const fileData = JSON.parse(fs.readFileSync(`./public/variables/${type}.json`, 'utf-8'));

let result = '';
switch (type) {
	case 'colors':
		Object.entries(fileData).forEach(([key, value]) => {
			result += `$${key}: ${value};\n`;
		});
		break;
	case 'breakpoints':
		result += `$grid-breakpoints: (${Object.entries(fileData)
			.map(([key, value]) => `${key}: ${value}px`)
			.join(',')})!default;`;
		break;
	default:
		break;
}

try {
	fs.writeFileSync(path.join(__dirname, `../../../src/assets/styles/variables/_${type}.scss`), result);
	console.log('\x1b[32m', 'Variables successfully updated!');
} catch (e) {
	return console.error(e);
}
