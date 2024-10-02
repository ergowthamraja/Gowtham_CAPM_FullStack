import type { Element, TextNode } from '@sap-ux/odata-annotation-core';
import { EDM_NAMESPACE_ALIAS, EDMX_NAMESPACE_ALIAS } from '@sap-ux/odata-annotation-core';
import type { Options } from './builders';
export interface PrintContext {
    namespaces?: NamespaceAliasMap;
    /**
     * Number that describes how deeply nested is this element relative to the document root element
     * 0 based
     */
    cursorIndentLevel: number;
}
export declare const printCsdlNodeToXmlString: (snippet: Node | Node[], opts: Options, context: PrintContext) => string;
export interface NamespaceAliasMap {
    [EDM_NAMESPACE_ALIAS]?: string;
    [EDMX_NAMESPACE_ALIAS]?: string;
}
export declare const escapeText: (input: string) => string;
export declare const unescapeText: (input: string) => string;
export declare const escapeAttribute: (input: string) => string;
export declare const unescapeAttribute: (input: string) => string;
type Node = Element | TextNode;
export {};
//# sourceMappingURL=csdl-to-xml.d.ts.map