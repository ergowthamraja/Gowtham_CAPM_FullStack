export type Document = string | Concat | Indent | Line;
export interface Concat {
    type: 'concat';
    parts: Document[];
}
export interface Indent {
    type: 'indent';
    content: Document;
}
export interface Line {
    type: 'line';
    hard: boolean;
}
export interface Options {
    /**
     * Specify the number of spaces per indentation-level.
     */
    tabWidth: number;
}
export interface IndentInfo {
    value: string;
    length: number;
    level: number;
}
export declare const line: Line;
export declare const hardline: Line;
/**
 * Creates Concat.
 *
 * @param parts
 * @returns concat object
 */
export declare function concat(parts: Document[]): Concat;
/**
 * Creates Indent.
 *
 * @param content
 * @returns indent object
 */
export declare function indent(content: Document): Indent;
/**
 * Serializes given document to string.
 *
 * @param document document object.
 * @param options serialization options
 * @returns stringified document
 */
export declare function printDocumentToString(document: Document, options: Options): string;
//# sourceMappingURL=builders.d.ts.map