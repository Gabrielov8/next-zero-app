export const isDev = process.env.NODE_ENV === 'development';

export const ArrayUtils = {
	addOrRemove: <T>(arr: T[], item: T): T[] =>
		arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item],
	addOrRemoveById: (arr: Record<any, any>[], item: Record<any, any>): Record<any, any>[] =>
		arr.findIndex((i) => i.id === item.id) >= 0
			? arr.filter((i) => i.id !== item.id)
			: [item, ...arr],
	
	areArraysEqual: (array1: string[], array2: string[]): boolean => {
		if (array1.length !== array2.length) {
			return false;
		}
		
		const sorted1 = [...array1].sort();
		const sorted2 = [...array2].sort();
		
		return sorted1.every((value, index) => value === sorted2[index]);
	},
	removeItemByIndex: (array: any[], index: number) => {
		return [...array.slice(0, index), ...array.slice(index + 1)];
	},
	changeItemByIndex: (array: any[], index: number, newItem: any) => {
		return [...array.slice(0, index), newItem, ...array.slice(index + 1)];
	}
};

export const StringUtils = {
	/**
	 * Делает первую букву слова заглавной
	 * @param str - строка
	 */
	firstLetterToLowerCase: (str: string) => {
		if (str.length === 0) {
			return str;
		}
		return str.charAt(0).toLowerCase() + str.substring(1);
	}
};

/**
 * Форматирует число с пробелами 10000 -> 10 000
 * @param number - число
 */
export const separateNumber = (number: number): string => {
	const numberFormat = new Intl.NumberFormat('ru-RU');
	return `${numberFormat.format(number)}`;
};
