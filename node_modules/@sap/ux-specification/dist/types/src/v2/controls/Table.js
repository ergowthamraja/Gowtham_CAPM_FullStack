"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadDataOnAppLaunchSettings = exports.DefaultFilterMode = exports.DefaultContentView = exports.IgnoredFieldsType = exports.Strategy = exports.TableColumnExtensionTypeV2 = exports.TableTypeV2 = exports.customColumnViewTypes = void 0;
var customColumnViewTypes;
(function (customColumnViewTypes) {
    customColumnViewTypes["XML"] = "XML";
})(customColumnViewTypes || (exports.customColumnViewTypes = customColumnViewTypes = {}));
var TableTypeV2;
(function (TableTypeV2) {
    TableTypeV2["ResponsiveTable"] = "ResponsiveTable";
    TableTypeV2["GridTable"] = "GridTable";
    TableTypeV2["AnalyticalTable"] = "AnalyticalTable";
    TableTypeV2["TreeTable"] = "TreeTable";
})(TableTypeV2 || (exports.TableTypeV2 = TableTypeV2 = {}));
var TableColumnExtensionTypeV2;
(function (TableColumnExtensionTypeV2) {
    TableColumnExtensionTypeV2["ResponsiveTableColumnsExtension"] = "ResponsiveTableColumnsExtension";
    TableColumnExtensionTypeV2["AnalyticalTableColumnsExtension"] = "AnalyticalTableColumnsExtension";
    TableColumnExtensionTypeV2["TreeTableColumnsExtension"] = "TreeTableColumnsExtension";
    TableColumnExtensionTypeV2["GridTableColumnsExtension"] = "GridTableColumnsExtension";
})(TableColumnExtensionTypeV2 || (exports.TableColumnExtensionTypeV2 = TableColumnExtensionTypeV2 = {}));
var Strategy;
(function (Strategy) {
    Strategy["extension"] = "extension";
})(Strategy || (exports.Strategy = Strategy = {}));
var IgnoredFieldsType;
(function (IgnoredFieldsType) {
    IgnoredFieldsType["GENERICPROPERTY"] = "GENERICPROPERTY";
})(IgnoredFieldsType || (exports.IgnoredFieldsType = IgnoredFieldsType = {}));
var DefaultContentView;
(function (DefaultContentView) {
    DefaultContentView["charttable"] = "charttable";
    DefaultContentView["chart"] = "chart";
    DefaultContentView["table"] = "table";
})(DefaultContentView || (exports.DefaultContentView = DefaultContentView = {}));
var DefaultFilterMode;
(function (DefaultFilterMode) {
    DefaultFilterMode["visual"] = "visual";
    DefaultFilterMode["compact"] = "compact";
})(DefaultFilterMode || (exports.DefaultFilterMode = DefaultFilterMode = {}));
var LoadDataOnAppLaunchSettings;
(function (LoadDataOnAppLaunchSettings) {
    LoadDataOnAppLaunchSettings["always"] = "always";
    LoadDataOnAppLaunchSettings["never"] = "never";
    LoadDataOnAppLaunchSettings["ifAnyFilterExist"] = "ifAnyFilterExist";
})(LoadDataOnAppLaunchSettings || (exports.LoadDataOnAppLaunchSettings = LoadDataOnAppLaunchSettings = {}));
//# sourceMappingURL=Table.js.map