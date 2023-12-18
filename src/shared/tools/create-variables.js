const fs = require('fs');
const path = require('path');

const type = process.argv.slice(2)[0];

const fileData = JSON.parse(fs.readFileSync(`./src/shared/ui/theme/variables/${type}.json`, 'utf-8'));

let resultSass = '';
let resultTs = '';
switch (type) {
	case 'colors':
		resultSass += '@use \'sass:list\';\n' +
			'@use \'sass:map\';\n\n' +
			'$themeColors: (\n';
		
		Object.entries(fileData).forEach(([key, value]) => {
			resultSass += `\t${key}: ${value},\n`;
		});
		
		resultSass += ');';
		
		resultTs += 'export const themeColors = {\n';
		Object.entries(fileData).forEach(([key, value]) => {
			resultTs += `\t${key}: '${value}',\n`;
		});
		resultTs += '} as const;\n\n' +
			'export type TColorKey = keyof typeof themeColors;';
		break;
	// case 'breakpoints':
	//   result += `$grid-breakpoints: (${Object.entries(fileData)
	//     .map(([key, value]) => `${key}: ${value}px`)
	//     .join(',')})!default;`;
	//   break;
	default:
		break;
}

try {
	fs.writeFileSync(path.join(`./src/shared/ui/theme/scss/colors/_${type}.scss`), resultSass);
	fs.writeFileSync(path.join(`./src/shared/ui/theme/scss/colors/${type}.constants.ts`), resultTs);
	console.log('\x1b[32m', 'Variables successfully updated!');
} catch (e) {
	return console.error(e);
}
