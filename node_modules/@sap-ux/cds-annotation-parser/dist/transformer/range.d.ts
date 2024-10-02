import { Position, Range } from '@sap-ux/text-document-utils';
/**
 * Checks if given positions are equal.
 *
 * @param a Position 1
 * @param b Position 2
 * @returns True if positions are equal
 */
export declare function arePositionsEqual(a: Position, b: Position): boolean;
/**
 * Checks if given ranges are equal.
 *
 * @param a Range 1
 * @param b Range 2
 * @returns True if ranges are equal
 */
export declare function areRangesEqual(a: Range, b: Range): boolean;
export declare const copyPosition: (position: Position) => Position;
export declare const copyRange: (range: Range) => Range;
//# sourceMappingURL=range.d.ts.map