import type { XsnCompileModel } from '@sap/cds-compiler-types';
export type EdmxNamesMap = Map<string, string>;
/**
 * converts name to edmx name (converting '.text' to '_text')
 *  - reason: generated EDMX will contain name with '_text'
 * @param name - name to convert
 * @param compileModel - cds compiled model
 */
export declare function convertNameToEdmxInternal(name: string, compileModel: XsnCompileModel): string;
export declare class EdmxNameConverter {
    private compileModel;
    private edmxNamesMap;
    private reverseNamesMap;
    constructor(compileModel: XsnCompileModel);
    convertNameToEdmx(name: string): string;
    convertNameFromEdmx(name: string): string | undefined;
}
//# sourceMappingURL=edmxNameConverter.d.ts.map