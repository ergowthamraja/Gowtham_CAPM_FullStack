import type { Element, Attribute, ElementName, AttributeName, TextNode, AnyNode } from '@sap-ux/odata-annotation-core-types';
export declare const elements: (predicate: (child: Element) => boolean | undefined, element: Element) => Element[];
export declare const elementsWithName: (name: ElementName, element: Element) => Element[];
export declare const getElementAttribute: (element: Element, name: AttributeName) => Attribute | undefined;
export declare const getElementAttributeValue: (element: Element, name: AttributeName) => string;
/**
 * Determines whether the node is of element type with given name.
 *
 * @param node node to check
 * @param name name to check
 * @returns boolean check result
 */
export declare function isElementWithName(node: AnyNode | undefined, name: string): node is Element;
/**
 * Get text node content of an element.
 * Elements content is supposed to only contain 'Annotation' tags or single text node.
 *
 * @param element
 * @returns TextNode
 */
export declare function getSingleTextNode(element: Element): TextNode | null;
//# sourceMappingURL=annotation-file.d.ts.map