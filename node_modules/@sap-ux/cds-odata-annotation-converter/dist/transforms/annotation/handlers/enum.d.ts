import type { Collection, Enum } from '@sap-ux/cds-annotation-parser';
import type { Element } from '@sap-ux/odata-annotation-core-types';
import type { NodeHandler } from '../handler';
import type { VisitorState } from '../visitor-state';
/**
 * Delimiter between two enum values, used for flags
 */
export declare const ENUM_VALUE_DELIMITER = " ";
/**
 * Delimiter between enum type and member name
 */
export declare const ENUM_MEMBER_DELIMITER = "/";
export declare const toEnumValue: (type: string, memberName: string) => string;
export declare const enumHandler: NodeHandler<Enum>;
/**
 * Converts collection items representing flags (enums) into an EnumMember element.
 *
 * @param state - The visitor state.
 * @param node - The collection node containing enum items.
 * @param valueType - The type of the enum values.
 * @returns An EnumMember element representing the converted flags.
 */
export declare function convertFlags(state: VisitorState, node: Collection, valueType: string): Element;
//# sourceMappingURL=enum.d.ts.map