"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OdataVersion = exports.FioriElementsVersion = exports.PAGETYPE_VIEW_EXTENSION_TEMPLATE_MAP = exports.PageType = exports.PageTypeV4 = exports.PageTypeV2 = void 0;
var PageTypeV2;
(function (PageTypeV2) {
    PageTypeV2["ObjectPage"] = "ObjectPage";
    PageTypeV2["ListReport"] = "ListReport";
    PageTypeV2["OverviewPage"] = "OverviewPage";
    PageTypeV2["CustomPage"] = "CustomPage";
    PageTypeV2["AnalyticalListPage"] = "AnalyticalListPage";
})(PageTypeV2 || (exports.PageTypeV2 = PageTypeV2 = {}));
var PageTypeV4;
(function (PageTypeV4) {
    PageTypeV4["ObjectPage"] = "ObjectPage";
    PageTypeV4["ListReport"] = "ListReport";
    PageTypeV4["CustomPage"] = "CustomPage";
    PageTypeV4["FPMCustomPage"] = "FPMCustomPage";
    PageTypeV4["AnalyticalListPage"] = "AnalyticalListPage";
})(PageTypeV4 || (exports.PageTypeV4 = PageTypeV4 = {}));
exports.PageType = { ...PageTypeV2, ...PageTypeV4 };
exports.PAGETYPE_VIEW_EXTENSION_TEMPLATE_MAP = new Map([
    [PageTypeV2.ListReport, 'sap.suite.ui.generic.template.ListReport.view.ListReport'],
    [PageTypeV2.AnalyticalListPage, 'sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage'],
    [PageTypeV2.ObjectPage, 'sap.suite.ui.generic.template.ObjectPage.view.Details']
]);
var FioriElementsVersion;
(function (FioriElementsVersion) {
    FioriElementsVersion["v2"] = "v2";
    FioriElementsVersion["v4"] = "v4";
})(FioriElementsVersion || (exports.FioriElementsVersion = FioriElementsVersion = {}));
var OdataVersion;
(function (OdataVersion) {
    OdataVersion["v2"] = "v2";
    OdataVersion["v4"] = "v4";
})(OdataVersion || (exports.OdataVersion = OdataVersion = {}));
//# sourceMappingURL=page.js.map