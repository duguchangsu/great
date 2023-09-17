import {
	Key,
	Ref,
	Props,
	ReactElementType,
	ElementType
} from 'shared/ReactTypes';
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';

export const ReactElement = (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType => {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'haoyunbuhuijuangushagua'
	};

	return element;
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
					continue;
				case 'ref':
					ref = propValue;
					continue;
				default:
					props[propKey] = propValue;
					continue;
			}
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: object) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const [propKey, propValue] of Object.entries(config)) {
		if (propValue) {
			switch (propKey) {
				case 'key':
					key = String(propValue);
					continue;
				case 'ref':
					ref = propValue;
					continue;
				default:
					props[propKey] = propValue;
					continue;
			}
		}
	}

	return ReactElement(type, key, ref, props);
};
