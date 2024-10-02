import type { Range } from '@sap-ux/odata-annotation-core-types';
/**
 *  Compares two objects based on their ranges.
 *  Can be used in {@link Array.prototype.sort} to sort in ascending order.
 *
 * @param a - First object.
 * @param b - Second object.
 * @returns A negative number if {@link a} should come before {@link b}; A positive number if {@link b} should come before {@link a};
 * 0 if the object ranges are equal.
 */
export declare function compareByRange<T extends {
    range?: Range;
}>(a: T, b: T): number;
//# sourceMappingURL=range.d.ts.map