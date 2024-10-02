import type { ICdsCompiler, XsnFinalEffectiveType, XsnNamedObject, XsnUsing } from '@sap/cds-compiler-types';
/**
 * Get Xsn Named Object from the artifact
 * @param artifact: xsn artifact
 * @param compiler : cds compiler
 * @returns XsnName
 *
 * - API getArtifactName: depending on the input artifact, may return XsnName, XsnElementName, XsnExtensionName
 */
export declare function getNameObj(artifact?: XsnNamedObject | XsnFinalEffectiveType | XsnUsing, compiler?: ICdsCompiler): any;
//# sourceMappingURL=utils.d.ts.map