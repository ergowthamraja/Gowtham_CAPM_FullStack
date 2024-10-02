import type { ICdsCompiler, XsnCompileModel, XsnElement, XsnNamedObject } from '@sap/cds-compiler-types';
export declare function getAssociation(element: XsnElement | undefined, compiler?: ICdsCompiler): {
    target: string;
    isToMany: boolean;
    isComposition: boolean;
};
export declare const getServiceNameForEntity: (entity: XsnNamedObject, compileModel?: XsnCompileModel) => string;
//# sourceMappingURL=utils.d.ts.map