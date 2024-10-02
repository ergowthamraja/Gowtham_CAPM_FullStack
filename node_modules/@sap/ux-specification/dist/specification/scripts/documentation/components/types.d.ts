import type { HierarchyPointNode } from 'd3';
export interface TreeData {
    name: string;
    description: string;
    type: string;
    children: TreeData[];
    artifact?: string;
    control?: string;
}
export interface TreeNode extends TreeData {
    id?: number;
    _children?: HierarchyPointNode<TreeNode>[];
    bbox?: DOMRect;
    x0?: number;
    y0?: number;
}
export type Messages = ZoomUpdateMessage;
export declare const CONFIG_DOC_ZOOM_UPDATE = "ZOOM_UPDATE";
export interface ZoomUpdateMessage {
    type: typeof CONFIG_DOC_ZOOM_UPDATE;
    level: number;
}
export interface NavigationResult {
    focus?: HierarchyPointNode<TreeNode>;
    toggle?: HierarchyPointNode<TreeNode>;
}
export interface TooltipCoordinates {
    x: number;
    y: number;
}
//# sourceMappingURL=types.d.ts.map