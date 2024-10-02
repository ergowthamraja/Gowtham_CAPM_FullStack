import type { SapUiGenericAppPageSettings } from '../../../common/page';
import type { FlexibleColumnLayout, FlexibleColumnLayoutType } from '../../../common';
export interface SapUiAppV2 {
    pages: SapUiAppPagesV2;
    _version?: string;
    settings?: SapUiAppSettingsV2;
}
export interface SapUiAppPagesV2 {
    [key: string]: SapUiAppPageV2;
}
export declare const FE_TEMPLATE_V2 = "sap.suite.ui.generic.template";
export declare const FE_TEMPLATE_V2_OBJECT_PAGE = "sap.suite.ui.generic.template.ObjectPage";
export declare const FE_TEMPLATE_V2_LIST_REPORT = "sap.suite.ui.generic.template.ListReport";
export declare const FE_TEMPLATE_V2_ALP = "sap.suite.ui.generic.template.AnalyticalListPage";
export interface SapUiAppPageV2 {
    entitySet?: string;
    navigationProperty?: string;
    component?: {
        name: string;
        list?: boolean;
        settings?: SapUiGenericAppPageSettings;
        sections?: {
            sectionIds?: SapUiGenericAppPageSettings;
        };
    };
    pages?: SapUiAppPagesV2;
    defaultLayoutType?: FlexibleColumnLayoutType;
}
export interface SapUiAppSettingsV2 {
    flexibleColumnLayout?: FlexibleColumnLayout;
}
//# sourceMappingURL=sapUiPageV2.d.ts.map