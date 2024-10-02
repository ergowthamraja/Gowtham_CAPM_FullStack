import type { v4 } from '@sap/ux-specification-types';
export declare class AdditionalSemanticObject implements v4.AdditionalSemanticObject {
    allowedActions?: string[];
    unavailableActions?: string[];
    mapping?: v4.SemanticObjectPropertyMapping;
}
export declare class RelatedApps implements v4.RelatedApps {
    showRelatedApps?: boolean;
    additionalSemanticObjects: v4.AdditionalSemanticObjects;
}
//# sourceMappingURL=RelatedApps.d.ts.map