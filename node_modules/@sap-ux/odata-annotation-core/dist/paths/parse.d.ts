import type { ParsedActionFunctionSignature, ParsedIdentifier } from '..';
export interface ParsedPath {
    segments: ParsedPathSegment[];
}
export interface TermCastSegment {
    type: 'term-cast';
    namespaceOrAlias?: string;
    /**
     * Simple identifier segment of the name
     */
    name: string;
    qualifier?: string;
}
export interface NavigationPropertyAnnotationSegment {
    type: 'navigation-property-annotation';
    namespaceOrAlias?: string;
    /**
     * Simple identifier segment of the name
     */
    name: string;
    term: TermCastSegment;
}
export type ParsedPathSegment = ParsedIdentifier | TermCastSegment | NavigationPropertyAnnotationSegment | ParsedActionFunctionSignature;
export declare const PATH_SEPARATOR = "/";
/**
 * Parses OData model paths.
 *
 * @param path OData model path.
 * @returns Parsed path.
 */
export declare function parsePath(path: string): ParsedPath;
//# sourceMappingURL=parse.d.ts.map