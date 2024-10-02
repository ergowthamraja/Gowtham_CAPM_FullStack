import type { PageBase, PagesBase, PageTypeV2 } from '../common';
export interface Page extends PageBase {
    pageType?: PageTypeV2;
}
export interface Pages extends PagesBase {
    [key: string]: Page;
}
//# sourceMappingURL=page.d.ts.map