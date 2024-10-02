import type { Position } from '@sap-ux/odata-annotation-core-types';
import { Location, Range } from '@sap-ux/odata-annotation-core-types';
import type { GenericToken } from './types';
export declare class GenericTokenImpl implements GenericToken {
    readonly uri: string;
    readonly tokenIndex: number;
    readonly text: string;
    readonly line: number;
    readonly character: number;
    annotationValue?: string | undefined;
    constructor(uri: string, tokenIndex: number, text: string, line: number, // zero-based
    character: number, // zero-based
    annotationValue?: string | undefined);
    toString(): string;
    get range(): Range;
    get location(): Location;
    compare(position: Position): number;
}
//# sourceMappingURL=genericToken.d.ts.map