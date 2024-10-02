import type { XMLElement, SourcePosition } from '@xml-tools/ast';
import { Range } from '@sap-ux/odata-annotation-core';
/**
 * Converts @xml-tools/ast ranges where lines and columns start with 1.
 *
 * @param position @xml-tools/ast range.
 * @returns Range where lines and columns start with 0.
 */
export declare function transformRange(position: SourcePosition | undefined): Range | undefined;
/**
 * Converts @xml-tools/ast ranges where lines and columns start with 1.
 * This can only be used with XML element, but it offers more accurate range in case of syntax errors.
 *
 * @param position @xml-tools/ast range.
 * @param element XML element for which the range belongs. Using different position may lead to unexpected behavior.
 * @returns Range where lines and columns start with 0.
 */
export declare function transformElementRange(position: SourcePosition | undefined, element: XMLElement): Range | undefined;
/**
 * Creates a range between two SourcePositions.
 *
 * @param begin SourcePosition from which the end will be used
 * @param end SourcePosition from which the start will be used
 * @returns Range between the begin and end positions
 */
export declare function getGapRangeBetween(begin: SourcePosition | undefined, end: SourcePosition | undefined): Range | undefined;
/**
 * Mutates range by the given parameters.
 *
 * @param range Range object that will be changed.
 * @param startColAdjust Number which will be added to the start positions column.
 * @param endColAdjust Number which will be added to the end position column.
 * @param startLineAdjust Number which will be added to the start position line.
 * @param endLineAdjust Number which will be added to the end position line.
 */
export declare function adjustRange(range: Range, startColAdjust: number, endColAdjust: number, startLineAdjust?: number, endLineAdjust?: number): void;
//# sourceMappingURL=range.d.ts.map