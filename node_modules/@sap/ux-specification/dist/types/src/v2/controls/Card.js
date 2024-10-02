"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkListFlavorType = exports.SortOrderType = exports.ListTypeType = exports.ListFlavorType = exports.MeasureAggregateValues = exports.CardSettingsType = exports.cardTemplateSettingsMap = exports.cardTemplateTypeMap = exports.CardTemplateType = exports.ChartCardType = void 0;
var ChartCardType;
(function (ChartCardType) {
    ChartCardType["cardBubble"] = "cardBubble";
    ChartCardType["cardchartsline"] = "cardchartsline";
    ChartCardType["cardchartsdonut"] = "cardchartsdonut";
})(ChartCardType || (exports.ChartCardType = ChartCardType = {}));
var CardTemplateType;
(function (CardTemplateType) {
    CardTemplateType["analytical"] = "sap.ovp.cards.charts.analytical";
    CardTemplateType["analyticalv4"] = "sap.ovp.cards.v4.charts.analytical";
    CardTemplateType["list"] = "sap.ovp.cards.list";
    CardTemplateType["listv4"] = "sap.ovp.cards.v4.list";
    CardTemplateType["linklist"] = "sap.ovp.cards.linklist";
    CardTemplateType["linklistv4"] = "sap.ovp.cards.v4.linklist";
    CardTemplateType["table"] = "sap.ovp.cards.table";
    CardTemplateType["tablev4"] = "sap.ovp.cards.v4.table";
    CardTemplateType["stack"] = "sap.ovp.cards.stack";
})(CardTemplateType || (exports.CardTemplateType = CardTemplateType = {}));
exports.cardTemplateTypeMap = {
    'sap.ovp.cards.charts.analytical': 'AnalyticalCard',
    'sap.ovp.cards.v4.charts.analytical': 'AnalyticalCard',
    'sap.ovp.cards.list': 'ListCard',
    'sap.ovp.cards.v4.list': 'ListCard',
    'sap.ovp.cards.linklist': 'LinklistCard',
    'sap.ovp.cards.v4.linklist': 'LinklistCard',
    'sap.ovp.cards.table': 'TableCard',
    'sap.ovp.cards.v4.table': 'TableCard',
    'sap.ovp.cards.stack': 'StackCard'
};
// Map for anyOf definitions
exports.cardTemplateSettingsMap = {
    'sap.ovp.cards.charts.analytical': 'AnalyticalCardSettings',
    'sap.ovp.cards.v4.charts.analytical': 'AnalyticalCardSettingsv4'
};
var CardSettingsType;
(function (CardSettingsType) {
    CardSettingsType["analyticalCardSettings"] = "analyticalCardSettings";
    CardSettingsType["analyticalCardSettingsv4"] = "analyticalCardSettingsv4";
    CardSettingsType["listCardSettings"] = "listCardSettings";
    CardSettingsType["listCardSettingsv4"] = "listCardSettingsv4";
    CardSettingsType["stackCardSettings"] = "stackCardSettings";
    CardSettingsType["linkListCardSettings"] = "linkListCardSettings";
    CardSettingsType["tableCardSettings"] = "tableCardSettings";
    CardSettingsType["tableCardSettingsv4"] = "tableCardSettingsv4";
})(CardSettingsType || (exports.CardSettingsType = CardSettingsType = {}));
var MeasureAggregateValues;
(function (MeasureAggregateValues) {
    MeasureAggregateValues["average"] = "average";
    MeasureAggregateValues["max"] = "max";
    MeasureAggregateValues["min"] = "min";
    MeasureAggregateValues["sum"] = "sum";
    MeasureAggregateValues["count"] = "$count";
})(MeasureAggregateValues || (exports.MeasureAggregateValues = MeasureAggregateValues = {}));
var ListFlavorType;
(function (ListFlavorType) {
    ListFlavorType["standard"] = "standard";
    ListFlavorType["bar"] = "bar";
    ListFlavorType["carousel"] = "carousel";
})(ListFlavorType || (exports.ListFlavorType = ListFlavorType = {}));
var ListTypeType;
(function (ListTypeType) {
    ListTypeType["extended"] = "extended";
    ListTypeType["condensed"] = "condensed";
})(ListTypeType || (exports.ListTypeType = ListTypeType = {}));
var SortOrderType;
(function (SortOrderType) {
    SortOrderType["ascending"] = "ascending";
    SortOrderType["descending"] = "descending";
})(SortOrderType || (exports.SortOrderType = SortOrderType = {}));
var LinkListFlavorType;
(function (LinkListFlavorType) {
    LinkListFlavorType["standard"] = "standard";
    LinkListFlavorType["carousel"] = "carousel";
})(LinkListFlavorType || (exports.LinkListFlavorType = LinkListFlavorType = {}));
//# sourceMappingURL=Card.js.map