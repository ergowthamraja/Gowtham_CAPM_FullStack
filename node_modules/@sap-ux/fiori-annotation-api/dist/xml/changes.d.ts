import type { Element, ElementChild } from '@sap-ux/odata-annotation-core-types';
import type { JsonPointer } from '../types';
export declare const INSERT_ELEMENT = "insert-element";
export interface InsertElement {
    type: typeof INSERT_ELEMENT;
    /**
     * This must resolve to an element.
     */
    pointer: JsonPointer;
    element: Element;
    /**
     * Before which child element the new element should be inserted. If omitted will be added at the end.
     */
    index?: number;
}
export declare const REPLACE_ELEMENT = "replace-element";
export interface ReplaceElement {
    type: typeof REPLACE_ELEMENT;
    /**
     * This must resolve to an element.
     */
    pointer: JsonPointer;
    newElement: Element;
}
export declare const REPLACE_ELEMENT_CONTENT = "replace-element-content";
export interface ReplaceElementContent {
    type: typeof REPLACE_ELEMENT_CONTENT;
    /**
     * This must resolve to an element.
     */
    pointer: JsonPointer;
    newValue: ElementChild[];
}
export declare const UPDATE_ELEMENT_NAME = "update-element-name";
export interface UpdateElementName {
    type: typeof UPDATE_ELEMENT_NAME;
    /**
     * This must resolve to an element.
     */
    pointer: JsonPointer;
    newName: string;
}
export declare const DELETE_ELEMENT = "delete-element";
export interface DeleteElement {
    type: typeof DELETE_ELEMENT;
    /**
     * This must resolve to an element.
     */
    pointer: JsonPointer;
}
export declare const INSERT_ATTRIBUTE = "insert-attribute";
export interface InsertAttribute {
    type: typeof INSERT_ATTRIBUTE;
    /**
     * This must resolve to an element.
     */
    pointer: JsonPointer;
    name: string;
    value: string;
    /**
     * Index of an attribute before which new value will be added. If omitted will be added at the end.
     */
    index?: number;
}
export declare const UPDATE_ATTRIBUTE_NAME = "update-attribute-name";
export interface UpdateAttributeName {
    type: typeof UPDATE_ATTRIBUTE_NAME;
    /**
     * This must resolve to an attribute.
     */
    pointer: JsonPointer;
    newName: string;
}
export declare const UPDATE_ATTRIBUTE_VALUE = "update-attribute-value";
export interface UpdateAttributeValue {
    type: typeof UPDATE_ATTRIBUTE_VALUE;
    /**
     * This must resolve to an attribute.
     */
    pointer: JsonPointer;
    newValue: string;
}
export declare const DELETE_ATTRIBUTE = "delete-attribute";
export interface DeleteAttribute {
    type: typeof DELETE_ATTRIBUTE;
    /**
     * This must resolve to an attribute.
     */
    pointer: JsonPointer;
}
export declare const MOVE_COLLECTION_VALUE = "move-collection-value";
export interface MoveCollectionValue {
    type: typeof MOVE_COLLECTION_VALUE;
    /**
     * move before index.
     */
    index?: number;
    /**
     * Array of  eg: collection.
     */
    fromPointers: JsonPointer[];
    /**
     * This must resolve to container eg: collection.
     */
    pointer: JsonPointer;
}
/**
 *  Creates {@link InsertElement} change.
 *
 * @param pointer - Pointer to the element.
 * @param element - Value to be inserted.
 * @param index - Position before which element should the new value be inserted.
 * @returns InsertElement change object.
 */
export declare function insertElement(pointer: string, element: Element, index?: number): InsertElement;
export type XMLDocumentChange = InsertElement | UpdateElementName | DeleteElement | ReplaceElement | ReplaceElementContent | InsertAttribute | UpdateAttributeName | UpdateAttributeValue | DeleteAttribute | MoveCollectionValue;
//# sourceMappingURL=changes.d.ts.map