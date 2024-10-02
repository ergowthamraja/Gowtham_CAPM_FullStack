interface IdentifierBase {
    namespaceOrAlias?: string;
    /**
     * Simple identifier segment of the name
     */
    name: string;
}
export interface ParsedIdentifier extends IdentifierBase {
    type: 'identifier';
}
export interface ParsedCollectionIdentifier extends IdentifierBase {
    type: 'collection';
}
export interface ParsedActionFunctionSignature extends IdentifierBase {
    type: 'action-function';
    parameters: (ParsedIdentifier | ParsedCollectionIdentifier)[];
}
export type ParsedName = ParsedIdentifier | ParsedCollectionIdentifier | ParsedActionFunctionSignature;
export declare const COLLECTION_PREFIX = "Collection(";
/**
 *
 * @param identifier
 * @returns
 */
export declare function parseIdentifier(identifier: string): ParsedName;
export {};
//# sourceMappingURL=parse.d.ts.map