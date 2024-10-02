"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheKeyAnyTermName = exports.COLLECTION_KIND = exports.ASSOCIATION_SET_KIND = exports.FUNCTION_IMPORT_KIND = exports.ACTION_IMPORT_KIND = exports.SINGLETON_KIND = exports.ENTITY_SET_KIND = exports.NAVIGATION_PROPERTY_KIND = exports.PROPERTY_KIND = exports.ENTITY_CONTAINER_KIND = exports.ASSOCIATION_KIND = exports.FUNCTION_KIND = exports.ACTION_KIND = exports.ENTITY_TYPE_KIND = exports.TERM_KIND = exports.COMPLEX_TYPE_KIND = exports.ENUM_TYPE_KIND = exports.TYPE_DEFINITION_KIND = void 0;
/**
 * Target Kinds
 *
 * used for finding allowed vocabulary terms (kinds are restricted via AppliesTo attribute) to service meta data objects
 */
// kinds which have fully qualified name
exports.TYPE_DEFINITION_KIND = 'TypeDefinition';
exports.ENUM_TYPE_KIND = 'EnumType';
exports.COMPLEX_TYPE_KIND = 'ComplexType';
exports.TERM_KIND = 'Term';
exports.ENTITY_TYPE_KIND = 'EntityType';
exports.ACTION_KIND = 'Action';
exports.FUNCTION_KIND = 'Function';
exports.ASSOCIATION_KIND = 'Association'; // V2 only
exports.ENTITY_CONTAINER_KIND = 'EntityContainer';
// kinds which have simple identifier only
// (embedded in structural types)
exports.PROPERTY_KIND = 'Property';
exports.NAVIGATION_PROPERTY_KIND = 'NavigationProperty';
// (embedded in entity container)
exports.ENTITY_SET_KIND = 'EntitySet';
exports.SINGLETON_KIND = 'Singleton';
exports.ACTION_IMPORT_KIND = 'ActionImport';
exports.FUNCTION_IMPORT_KIND = 'FunctionImport';
exports.ASSOCIATION_SET_KIND = 'AssociationSet'; // V2 only
// miscellaneous
exports.COLLECTION_KIND = 'Collection';
exports.cacheKeyAnyTermName = 'Impl.AnyTerm';
//# sourceMappingURL=base.js.map