import { Range } from '@sap-ux/odata-annotation-core-types';
import { GenericTokenImpl } from './genericToken';
import type { AnnotationAssignmentToken, IdentifierToken } from './types';
export declare const NEWLINE_REGEX: RegExp;
export declare class AnnotationAssignmentTokenImpl extends GenericTokenImpl implements AnnotationAssignmentToken {
    readonly uri: string;
    readonly tokenIndex: number;
    readonly text: string;
    readonly line: number;
    readonly character: number;
    readonly carrierName: string;
    readonly carrier?: IdentifierToken | undefined;
    readonly carrierNameRange?: Range | undefined;
    annotationValue?: string | undefined;
    private _range?;
    constructor(uri: string, tokenIndex: number, text: string, line: number, character: number, carrierName: string, carrier?: IdentifierToken | undefined, carrierNameRange?: Range | undefined, annotationValue?: string | undefined);
    get range(): Range;
}
//# sourceMappingURL=annotationAssignmentToken.d.ts.map