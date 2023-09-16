export type Type = string;
export type Key = string | null;
export type Ref = any;
export type Props = any;
export type ElementType = any;

export interface GreatElementType {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	ref: Ref;
	props: Props;
	__mark: string;
}
