import { Range } from '@sap-ux/odata-annotation-core-types';
import type { parse } from '@xml-tools/parser';
export interface Comment {
    type: 'comment';
    value: string;
    range: Range;
}
type TokenVector = ReturnType<typeof parse>['tokenVector'];
/**
 * Extracts comment tokens from all the tokens in document.
 *
 * @param tokenVector - XML Tokens.
 * @returns All the comments in the document.
 */
export declare function collectComments(tokenVector: TokenVector): Comment[];
export {};
//# sourceMappingURL=comments.d.ts.map