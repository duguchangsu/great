export type Type = string;
export type Key = string | null;
export type Ref = object | null;
export type Props = object;
export type ElementType = string;

export interface GreatElementType {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	ref: Ref;
	props: Props;
	__mark: string;
}
