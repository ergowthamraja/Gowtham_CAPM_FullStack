declare const _default: {
    'com.sap.cds.vocabularies.AnalyticsDetails': {
        $Alias: string;
        '@Org.OData.Core.V1.Description': string;
        measureType: {
            $Kind: string;
            $AppliesTo: string[];
            $Type: string;
            '@Org.OData.Core.V1.Description': string;
        };
        MeasureTypeEnumeration: {
            $Kind: string;
            BASE: number;
            'BASE@Org.OData.Core.V1.Description': string;
            RESTRICTION: number;
            'RESTRICTION@Org.OData.Core.V1.Description': string;
            CALCULATION: number;
            'CALCULATION@Org.OData.Core.V1.Description': string;
        };
        exceptionAggregationSteps: {
            $Kind: string;
            $AppliesTo: string[];
            $Collection: boolean;
            $Type: string;
            '@Org.OData.Core.V1.Description': string;
        };
        ExceptionAggregationStepType: {
            $Kind: string;
            '@Org.OData.Core.V1.Description': string;
            exceptionAggregationBehavior: {
                $Type: string;
                '@Org.OData.Core.V1.Description': string;
            };
            exceptionAggregationElements: {
                $Collection: boolean;
                $Type: string;
                '@Org.OData.Core.V1.Description': string;
            };
        };
        ExceptionAggregationBehaviorType: {
            $Kind: string;
            SUM: number;
            'SUM@Org.OData.Core.V1.Description': string;
            MIN: number;
            'MIN@Org.OData.Core.V1.Description': string;
            MAX: number;
            'MAX@Org.OData.Core.V1.Description': string;
            COUNT: number;
            'COUNT@Org.OData.Core.V1.Description': string;
            COUNTNULL: number;
            'COUNTNULL@Org.OData.Core.V1.Description': string;
            COUNTNULLZERO: number;
            'COUNTNULLZERO@Org.OData.Core.V1.Description': string;
            AVG: number;
            'AVG@Org.OData.Core.V1.Description': string;
            AVERAGENULL: number;
            'AVERAGENULL@Org.OData.Core.V1.Description': string;
            AVERAGENULLZERO: number;
            'AVERAGENULLZERO@Org.OData.Core.V1.Description': string;
            STD: number;
            'STD@Org.OData.Core.V1.Description': string;
            FIRST: number;
            'FIRST@Org.OData.Core.V1.Description': string;
            LAST: number;
            'LAST@Org.OData.Core.V1.Description': string;
        };
        variable: {
            $Kind: string;
            $AppliesTo: string[];
            $Type: string;
            '@Org.OData.Core.V1.Description': string;
        };
        VariableType: {
            $Kind: string;
            '@Org.OData.Core.V1.Description': string;
            usageType: {
                $Type: string;
                '@Org.OData.Core.V1.Description': string;
            };
            referenceElement: {
                $Type: string;
                $Nullable: boolean;
                '@Org.OData.Core.V1.Description': string;
            };
            mandatory: {
                $Type: string;
                $Nullable: boolean;
                $DefaultValue: boolean;
                '@Org.OData.Core.V1.Description': string;
            };
            defaultValue: {
                $Nullable: boolean;
                '@Org.OData.Core.V1.Description': string;
            };
            defaultValueHigh: {
                $Nullable: boolean;
                '@Org.OData.Core.V1.Description': string;
            };
            defaultRanges: {
                $Nullable: boolean;
                $Collection: boolean;
                $Type: string;
                '@Org.OData.Core.V1.Description': string;
            };
            selectionType: {
                $Nullable: boolean;
                $Type: string;
                '@Org.OData.Core.V1.Description': string;
            };
            multipleSelections: {
                $Type: string;
                $Nullable: boolean;
                $DefaultValue: boolean;
                '@Org.OData.Core.V1.Description': string;
            };
        };
        VariableUsageTypeEnumeration: {
            $Kind: string;
            PARAMETER: number;
            'PARAMETER@Org.OData.Core.V1.Description': string;
            FILTER: number;
            'FILTER@Org.OData.Core.V1.Description': string;
            FORMULA: number;
            'FORMULA@Org.OData.Core.V1.Description': string;
        };
        VariableSelectionTypeEnumeration: {
            $Kind: string;
            SINGLE: number;
            'SINGLE@Org.OData.Core.V1.Description': string;
            INTERVAL: number;
            'INTERVAL@Org.OData.Core.V1.Description': string;
            RANGE: number;
            'RANGE@Org.OData.Core.V1.Description': string;
        };
        RangeType: {
            $Kind: string;
            '@Org.OData.Core.V1.Description': string;
            sign: {
                $Type: string;
                '@Org.OData.Core.V1.Description': string;
            };
            option: {
                $Type: string;
                '@Org.OData.Core.V1.Description': string;
            };
            low: {
                '@Org.OData.Core.V1.Description': string;
            };
            high: {
                '@Org.OData.Core.V1.Description': string;
            };
        };
        RangeSignType: {
            $Kind: string;
            I: number;
            'I@Org.OData.Core.V1.Description': string;
            E: number;
            'E@Org.OData.Core.V1.Description': string;
        };
        RangeOptionType: {
            $Kind: string;
            EQ: number;
            'EQ@Org.OData.Core.V1.Description': string;
            BT: number;
            'BT@Org.OData.Core.V1.Description': string;
            CP: number;
            'CP@Org.OData.Core.V1.Description': string;
            LE: number;
            'LE@Org.OData.Core.V1.Description': string;
            GE: number;
            'GE@Org.OData.Core.V1.Description': string;
            NE: number;
            'NE@Org.OData.Core.V1.Description': string;
            NB: number;
            'NB@Org.OData.Core.V1.Description': string;
            NP: number;
            'NP@Org.OData.Core.V1.Description': string;
            GT: number;
            'GT@Org.OData.Core.V1.Description': string;
            LT: number;
            'LT@Org.OData.Core.V1.Description': string;
        };
    };
};
export default _default;
//# sourceMappingURL=com.sap.cds.vocabularies.AnalyticsDetails.d.ts.map