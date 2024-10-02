import { GenericTokenImpl } from './genericToken';
import type { IdentifierToken, GenericDefinition } from './types';
export declare class IdentifierTokenImpl extends GenericTokenImpl implements IdentifierToken {
    readonly uri: string;
    readonly tokenIndex: number;
    readonly text: string;
    readonly line: number;
    readonly character: number;
    readonly definitions?: GenericDefinition | undefined;
    annotationValue?: string | undefined;
    constructor(uri: string, tokenIndex: number, text: string, line: number, character: number, definitions?: GenericDefinition | undefined, annotationValue?: string | undefined);
}
//# sourceMappingURL=identifierToken.d.ts.map