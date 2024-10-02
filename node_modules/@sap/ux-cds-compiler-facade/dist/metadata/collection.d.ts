import type { XsnCompileModel } from '@sap/cds-compiler-types';
import type { MetadataCollector } from './types';
/**
 * Collects metadata elements for absolute path (cds syntax), returns path in EDMX syntax
 *
 * @param cdsPath - path extracted from carrier e.g. AdminService.Books.title or AdminService.Books.addRating
 * @param cdsKind - cds kind, e.g. 'entity', 'element', 'action', 'function', 'param'
 * @param metadataCollector
 * @param compileModel
 * @returns path in EDMX format and key for corresponding entry in MetadataCollector
 */
export declare function collectMetadataForAbsolutePath(cdsPath: string, cdsKind: string, metadataCollector: MetadataCollector, compileModel: XsnCompileModel): {
    edmxPath: string;
    collectorKey: string;
};
/**
 * Collects metadata elements for relative path
 *
 * @param relativePath
 * @param baseCollectorKey - key for collector entry representing base for relative path
 * @param serviceName
 * @param metadataCollector
 */
export declare function collectMetadataForRelativePath(relativePath: string, baseCollectorKey: string, serviceName: string, metadataCollector: MetadataCollector, compileModel: XsnCompileModel): void;
//# sourceMappingURL=collection.d.ts.map