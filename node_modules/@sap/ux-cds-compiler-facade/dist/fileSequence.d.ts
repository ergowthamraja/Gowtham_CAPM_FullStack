import type { XsnCompileModel } from '@sap/cds-compiler-types';
/**
 * get CDS file sequence
 * @param compileModel
 *  - each source has the property "_layerRepresentative" which is (another or the same) source representing a "layer"
 *  - a source which represents a layer has the property "_layerExtends" a dictionary of directly or indirectly dependent layer representatives
 */
export declare function getFileSequence(compileModel: XsnCompileModel): string[];
//# sourceMappingURL=fileSequence.d.ts.map