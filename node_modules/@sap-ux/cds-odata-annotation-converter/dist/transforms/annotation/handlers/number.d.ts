import type { NumberLiteral } from '@sap-ux/cds-annotation-parser';
import type { NodeHandler } from '../handler';
export declare const numberHandler: NodeHandler<NumberLiteral>;
/**
 * Determines the corresponding Edm type for the given type name and value.
 *
 * @param typeName - The type name to be considered.
 * @param value - The value for which the Edm type is determined.
 * @returns The corresponding Edm type.
 */
export declare function getNumberType(typeName: string | undefined, value: number | string): string;
//# sourceMappingURL=number.d.ts.map