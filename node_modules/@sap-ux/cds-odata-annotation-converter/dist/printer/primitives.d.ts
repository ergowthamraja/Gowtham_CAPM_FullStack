export declare const PRIMITIVE_VALUE_ATTRIBUTE_NAMES: Set<string>;
export declare const list: (entries: ContainerItemType[], useTrailingComma?: boolean) => string[];
export declare const container: (open: string, close: string, entries: ContainerItemType[]) => string;
export interface ContainerItem {
    value: string;
    placeholder: boolean;
}
export type ContainerItemType = ContainerItem | string;
export declare const struct: (properties: ContainerItemType[]) => string;
export declare const collection: (items: ContainerItemType[]) => string;
export declare const stringLiteral: (value: string) => string;
export declare const delimitedIdentifier: (value: string) => string;
export declare const valuePair: (key: string, value: string) => string;
export declare const keyAlone: (key: string) => string;
export declare const CDS_NULL_EXPRESSION_LITERAL = "null";
//# sourceMappingURL=primitives.d.ts.map