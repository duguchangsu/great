import {
	Key,
	Ref,
	Props,
	GreatElementType,
	ElementType
} from 'shared/GreatTypes';
import { GREAT_ELEMENT_TYPE } from 'shared/GreatSymbols';

// GreatElement

export const GreatElement = (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
): GreatElementType => {
	return {
		$$typeof: GREAT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'haoyunbuhuijuangushagua'
	};
};

export const jsx = (type: ElementType, config: object, maybeKey: string) => {
	let key: Key = maybeKey ? String(maybeKey) : null;
	const props: Props = {};
	let ref: Ref = null;

	for (const [propKey, propValue] of Object.entries(config)) {
		if (propValue) {
			switch (propKey) {
				case 'key':
					key = String(propValue);
					props[propKey] = propValue;
					continue;
				case 'ref':
					ref = propValue;
					props[propKey] = propValue;
					continue;
				default:
					props[propKey] = propValue;
					continue;
			}
		}
		return GreatElement(type, key, ref, props);
	}
};

export const jsxDEV = jsx;
