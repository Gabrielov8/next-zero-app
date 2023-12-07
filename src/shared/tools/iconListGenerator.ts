import fs from 'fs';
import path from 'path';

const directoryPath = path.join('./src/assets/icons');

const readFiles = async (): Promise<string[]> => {
	try {
		const files = await fs.promises.readdir(directoryPath);
		return files.filter((file) => file.endsWith('.svg'));
	} catch (err) {
		console.error('Unable to scan directory:', err);
		return [];
	}
};

const generateIconImportName = (iconName: string): string => {
	const name = iconName
		.split('.')
		.slice(0, -1)
		.join('')
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, '')
		.replace('-', '');
	return `Icon${name.charAt(0).toUpperCase() + name.slice(1)}`;
};

const createComponents = async (icons: string[]): Promise<void> => {
	const iconListFilePath = path.join('./src/shared/ui/components/Icon/IconList.constants.tsx');
	await fs.promises.writeFile(iconListFilePath, '');
	
	const iconList = icons.map((iconName) => {
		const importName = generateIconImportName(iconName);
		return `import ${importName} from '@/assets/icons/${iconName}';\r\n`;
	});
	
	const iconListExport = `export const IconList = {\r\n${icons
		.map((iconName) => {
			const importName = generateIconImportName(iconName);
			const iconNameWithoutExtension = iconName.split('.')[0];
			const iconComponent = `<${importName} />`;
			return `  '${iconNameWithoutExtension}': ${iconComponent},\r\n`;
		})
		.join('')}};\r\n`;
	
	await fs.promises.appendFile(iconListFilePath, iconList.join(''));
	await fs.promises.appendFile(iconListFilePath, iconListExport);
};

readFiles()
	.then((icons) => createComponents(icons))
	.then(() => console.info('Created icons ✓'))
	.catch((err) => console.error('Error creating icons:', err));
