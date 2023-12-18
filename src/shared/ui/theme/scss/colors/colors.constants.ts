export const themeColors = {
	primary01: '#3881CB',
	primary02: '#3C91E6',
	primary03: '#63A7EB',
	primary04: '#8ABDF0',
	primary05: '#8ABDF0',
	secondary01: '#CC9F47',
	secondary02: '#9066BA',
	secondary03: '#FFD27A',
	secondary04: '#FFE9BD',
	secondary05: '#FFF9EE',
	alert01: '#BE6A2A',
	alert02: '#EE8434',
	alert03: '#F19D5D',
	alert04: '#FADAC2',
	alert05: '#FDF3EB',
	error01: '#CA4126',
	error02: '#FC5130',
	error03: '#FD7459',
	error04: '#FEB9AC',
	error05: '#FADAC2',
	success01: '#00A352',
	success02: '#00CC66',
	success03: '#33D685',
	success04: '#99EBC2',
	success05: '#E6FAF0',
	white: '#FFF',
	white75: 'rgba(#fff, 0.75)',
	white50: 'rgba(#fff, 0.5)',
	white25: 'rgba(#fff, 0.25)',
	white10: 'rgba(#fff, 0.1)',
	whiteAlmost: '#EEEEEE',
	whiteShaded: '#DDDDDD',
	whiteDark: '#DADADA',
	black: '#000',
	black75: 'rgba(#000, 0.75)',
	black50: 'rgba(#000, 0.5)',
	black25: 'rgba(#000, 0.25)',
	black10: 'rgba(#000, 0.1)',
	blackTinted: '#222222',
	blackPale: '#444444',
	greyShaded: '#666666',
	greyTinted: '#888888',
	greyPale: '#AAAAAA',
	blackSecondary: '#3d3f44'
} as const;

export type TColorKey = keyof typeof themeColors;