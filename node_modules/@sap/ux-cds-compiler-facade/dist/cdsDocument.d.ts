import type { XsnCompileModel } from '@sap/cds-compiler-types';
import type { Annotation, Assignment, Node, Path, StringLiteral, Token } from '@sap-ux/cds-annotation-parser';
import type { Namespace } from '@sap-ux/odata-annotation-core-types';
export interface AnnotateDirective extends Node {
    type: 'annotate-directive';
    carrier: Path;
    annotations: AnchoredAnnotation[];
    elements?: ElementsBlock;
    actions?: ActionsBlock;
}
export interface ActionsBlock extends Node {
    type: 'actions-block';
    actions: Token;
    name?: Token;
    open: Token;
    close: Token;
}
export interface ElementsBlock extends Node {
    type: 'elements-block';
    elements: Token;
    open: Token;
    close: Token;
}
export interface AnchoredAnnotation extends Annotation {
    kind: 'before' | 'inner' | 'after';
}
export interface SingularAssignment extends Node {
    type: 'singular-assignment';
    prefix: Token;
    annotation: Assignment;
}
export interface MultipleAssignment extends Node {
    type: 'multiple-assignment';
    prefix: Token;
    opening: Token;
    closing: Token;
    commas: Token;
    annotations: Assignment[];
}
export interface CdsDocument extends Node {
    type: 'cds-document';
    namespace?: Namespace;
    dependencies: Dependency[];
    annotateDirectives: AnnotateDirective[];
}
export interface Dependency extends Node {
    type: 'dependency';
    using: Token;
    names?: NamedUsing | NamedUsings;
    from: Token;
    module: StringLiteral;
}
export interface NamedUsing extends Node {
    type: 'named-using';
    importedName?: Token;
    as?: Token;
    localName: Token;
}
export interface NamedUsings extends Node {
    type: 'named-usings';
    names: NamedUsing[];
    commas: Token[];
    open?: Token;
    close?: Token;
}
export declare function getCdsDocument(uri: string, compileModel: XsnCompileModel): CdsDocument | undefined;
//# sourceMappingURL=cdsDocument.d.ts.map