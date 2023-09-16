const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const GREAT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('great.element')
	: 0xeac7;
