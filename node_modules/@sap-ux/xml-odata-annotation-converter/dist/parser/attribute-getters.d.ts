import type { XMLElement, XMLAttribute } from '@xml-tools/ast';
/**
 * Get attribute by its name.
 *
 * @param attributeName Name of the attribute
 * @param element Element containing attributes
 * @returns Attribute node if attribute with given name exists
 */
export declare function getElementAttributeByName(attributeName: string, element: XMLElement): XMLAttribute | undefined;
/**
 * Get attribute value by its name.
 *
 * @param attributeName Name of the attribute
 * @param element Element containing attributes
 * @returns Value of the attribute
 */
export declare function getAttributeValue(attributeName: string, element: XMLElement): string;
//# sourceMappingURL=attribute-getters.d.ts.map