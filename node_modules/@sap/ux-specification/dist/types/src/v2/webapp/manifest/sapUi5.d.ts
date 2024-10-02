import type { SapUi5RootView, SapUi5OdataModel, SapUi5ResourceModel, SapUi5RoutingRoute, SAPUI5_FRAGMENT_CLASS, SAPUI5_VIEW_CLASS, ViewTypes, SapUi5RoutingTargetBase, SapUi5RoutingTarget, Dependencies } from '../../../common/webapp/manifest/sapUi5';
import type { ManifestSection } from '../../..';
export interface SapUi5 {
    flexEnabled?: boolean;
    resources?: object;
    dependencies?: Dependencies;
    models?: {
        [key: string]: SapUi5OdataModel | SapUi5ResourceModel;
    };
    routing?: SapUi5RoutingV2;
    [key: string]: string | object | boolean;
    rootView?: SapUi5RootView;
    extends?: SapUi5Extends;
}
export interface SapUi5RoutingV2 {
    routes?: SapUi5RoutingRoute[];
    targets: SapUi5RoutingTargetsV2;
}
export interface SapUi5RoutingTargetsV2 {
    [key: string]: SapUi5RoutingTarget | SapUi5RoutingTargetCustomPageV2;
}
export interface SapUi5RoutingTargetCustomPageV2 extends SapUi5RoutingTargetBase {
    viewId: string;
    viewName: string;
    viewLevel?: number;
    title?: string;
}
export declare const SAPUI5_VIEW_EXTENSION = "sap.ui.viewExtensions";
export declare const SAPUI5_CONTROLLER_EXTENSION = "sap.ui.controllerExtensions";
export interface SapUi5Extends {
    extensions?: SapUi5Extensions;
}
export interface SapUi5Extensions {
    [SAPUI5_VIEW_EXTENSION]?: SapUi5ViewExtensions;
    [SAPUI5_CONTROLLER_EXTENSION]?: SapUi5ControllerExtensions;
}
export declare const SAPUI5_VIEW_EXTENSION_OBJECT_PAGE = "sap.suite.ui.generic.template.ObjectPage.view.Details";
export declare const SAPUI5_VIEW_EXTENSION_LIST_REPORT = "sap.suite.ui.generic.template.ListReport.view.ListReport";
export declare const SAPUI5_VIEW_EXTENSION_ANALYTICAL_LIST_PAGE = "sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage";
export interface SapUi5PageViewExtensions {
    [key: string]: SapUi5ViewExtensionView | SapUi5ViewExtensionFragment;
}
export interface SapUi5ViewExtensions {
    [SAPUI5_VIEW_EXTENSION_OBJECT_PAGE]?: SapUi5PageViewExtensions;
    [SAPUI5_VIEW_EXTENSION_LIST_REPORT]?: SapUi5PageViewExtensions;
}
export interface SapUi5ViewExtensionBase {
    type: ViewTypes;
}
export interface SapUi5ViewExtensionView extends SapUi5ViewExtensionBase {
    className: typeof SAPUI5_VIEW_CLASS;
    viewName: string;
}
export interface SapUi5ViewExtensionFragment extends SapUi5ViewExtensionBase {
    className: typeof SAPUI5_FRAGMENT_CLASS;
    fragmentName: string;
}
export interface SapUi5ControllerExtensions {
    [SAPUI5_VIEW_EXTENSION_OBJECT_PAGE]?: SapUi5PageControllerExtensions;
    [SAPUI5_VIEW_EXTENSION_LIST_REPORT]?: SapUi5PageControllerExtensions;
}
export interface SapUi5PageControllerExtensions {
    [key: string]: SapUi5ControllerExtension;
}
export interface SapUi5ControllerExtension {
    controllerName: string;
    [ManifestSection.generic]: {
        [key: string]: SapUi5ControllerExtensionSettings;
    };
}
export interface SapUi5ControllerExtensionSettings {
    EntitySet: string;
    Actions?: unknown;
    Header?: unknown;
    Sections?: unknown;
}
//# sourceMappingURL=sapUi5.d.ts.map