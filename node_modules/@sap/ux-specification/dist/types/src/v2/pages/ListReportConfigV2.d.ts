import type { PageConfig } from '../../common';
import type { ResponsiveTableWithMultiSelect, ResponsiveTableWithInlineDelete, TreeTable, AnalyticalTable, GridTable, ListReportFilterBar, GenericFooter, Header } from '../controls';
export type ListReportTableTypeV2 = ResponsiveTableWithMultiSelect | ResponsiveTableWithInlineDelete | TreeTable | AnalyticalTable | GridTable;
export interface ListReportConfigV2 extends PageConfig {
    /**
     * Set fitContent to true to optimize the dynamic page responsiveness on small screens and behavior when the DynamicPageHeader is expanded or collapsed.
     */
    fitContent?: boolean;
    /**
     * Header
     */
    header?: Header;
    filterBar?: ListReportFilterBar;
    table?: ListReportTableTypeV2;
    footer?: GenericFooter;
}
//# sourceMappingURL=ListReportConfigV2.d.ts.map