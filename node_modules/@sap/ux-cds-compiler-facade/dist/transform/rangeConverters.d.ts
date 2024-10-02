import { Range } from '@sap-ux/odata-annotation-core-types';
import type { XsnLocation } from '@sap/cds-compiler-types';
export declare function locationToRange(location?: XsnLocation): Range;
/**
 * Get text for range covered in the provided XsnLocation
 * @param xsnLocation
 * @param content
 */
export declare const getTextForLocationRange: (xsnLocation: XsnLocation, contentLines: string[]) => string;
/**
 * Get start line and column from location
 * - supports cds compiler location v1 and v2
 * - needed for finding antr token
 *
 * @param location
 */
export declare const getStartLineColFromLocation: (location: XsnLocation | undefined) => {
    line: number;
    col: number;
};
//# sourceMappingURL=rangeConverters.d.ts.map