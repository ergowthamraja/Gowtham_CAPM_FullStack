import type { XsnKind } from '@sap/cds-compiler-types';
import type { GenericDefinition } from './types';
export declare class GenericDefinitionImpl implements GenericDefinition {
    readonly symbolName: string;
    readonly kind: XsnKind;
    readonly absoluteName: string;
    constructor(symbolName: string, kind: XsnKind, absoluteName?: string);
    /** @deprecated */
    get fullyQualifiedName(): string;
}
//# sourceMappingURL=genericDefinition.d.ts.map