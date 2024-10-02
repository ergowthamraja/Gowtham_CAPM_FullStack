import type { AnnotationNode } from '@sap-ux/cds-annotation-parser';
import type { NodeHandler } from '../handler';
export type NodeHandlerConfig = {
    [Node in AnnotationNode as Node['type']]?: NodeHandler<Node>;
};
export declare const nodeHandlerConfig: NodeHandlerConfig;
//# sourceMappingURL=index.d.ts.map