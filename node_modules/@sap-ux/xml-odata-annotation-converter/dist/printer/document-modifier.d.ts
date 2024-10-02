import type { XMLElement } from '@xml-tools/ast';
import type { Element, FormatterOptions } from '@sap-ux/odata-annotation-core';
import { TextEdit } from '@sap-ux/odata-annotation-core';
export declare const insert: (options: FormatterOptions) => (target: XMLElement, element: Element) => TextEdit | undefined;
export declare const insertWithOptions: (target: XMLElement, element: Element, { printWidth, tabWidth, useTabs }: FormatterOptions) => TextEdit | undefined;
//# sourceMappingURL=document-modifier.d.ts.map