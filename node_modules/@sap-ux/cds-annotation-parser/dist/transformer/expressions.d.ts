import type { Position, Range } from '@sap-ux/text-document-utils';
import type { AnnotationValue, Expression, Operator, CorrectExpression } from './annotation-ast-nodes';
import { OPERATOR_TYPE } from './annotation-ast-nodes';
export declare const OPERATOR_NAME_NOT_EQUAL = "not-equal";
export declare const OPERATOR_NAME_EQUAL = "equal";
export declare const OPERATOR_NAME_GREATER_THEN = "greater-then";
export declare const OPERATOR_NAME_GREATER_OR_EQUAL = "greater-or-equal";
export declare const OPERATOR_NAME_LESS_THEN = "less-then";
export declare const OPERATOR_NAME_LESS_OR_EQUAL = "less-or-equal";
export declare const OPERATOR_NAME_TERNARY = "ternary";
export declare const OPERATOR_NAME_CONCAT = "concat";
export declare const OPERATOR_NAME_PLUS = "plus";
export declare const OPERATOR_NAME_MINUS = "minus";
export declare const OPERATOR_NAME_MULTIPLY = "multiply";
export declare const OPERATOR_NAME_DIVIDE = "divide";
export declare const OPERATOR_NAME_UNARY_MINUS = "unary-minus";
export declare const OPERATOR_NAME_NOT = "not";
export declare const OPERATOR_NAME_AND = "and";
export declare const OPERATOR_NAME_OR = "or";
export declare const OPERATOR_NAME_IS_NULL = "is-null";
export declare const OPERATOR_NAME_IS_NOT_NULL = "is-not-null";
export declare const OPERATOR_NAME_LIKE = "like";
export declare const OPERATOR_NAME_NOT_LIKE = "not-like";
export declare const OPERATOR_NAME_BETWEEN = "between";
export declare const OPERATOR_NAME_NOT_BETWEEN = "not-between";
export type OPERATOR_NAME = typeof OPERATOR_NAME_NOT_EQUAL | typeof OPERATOR_NAME_EQUAL | typeof OPERATOR_NAME_GREATER_THEN | typeof OPERATOR_NAME_GREATER_OR_EQUAL | typeof OPERATOR_NAME_LESS_THEN | typeof OPERATOR_NAME_LESS_OR_EQUAL | typeof OPERATOR_NAME_TERNARY | typeof OPERATOR_NAME_CONCAT | typeof OPERATOR_NAME_PLUS | typeof OPERATOR_NAME_MINUS | typeof OPERATOR_NAME_MULTIPLY | typeof OPERATOR_NAME_DIVIDE | typeof OPERATOR_NAME_UNARY_MINUS | typeof OPERATOR_NAME_NOT | typeof OPERATOR_NAME_AND | typeof OPERATOR_NAME_OR | typeof OPERATOR_NAME_IS_NULL | typeof OPERATOR_NAME_IS_NOT_NULL | typeof OPERATOR_NAME_LIKE | typeof OPERATOR_NAME_NOT_LIKE | typeof OPERATOR_NAME_BETWEEN | typeof OPERATOR_NAME_NOT_BETWEEN;
export declare const operatorImageMap: {
    [image: string]: OPERATOR_NAME[];
};
declare const UNARY_OPERATOR_KIND_PREFIX = "prefix";
declare const UNARY_OPERATOR_KIND_SUFFIX = "suffix";
declare const OPERATOR_TYPE_UNARY = "unary-operator";
declare const OPERATOR_TYPE_BINARY = "binary-operator";
declare const OPERATOR_TYPE_TERNARY = "ternary-operator";
type OPERATOR_TYPE = typeof OPERATOR_TYPE_UNARY | typeof OPERATOR_TYPE_BINARY | typeof OPERATOR_TYPE_TERNARY;
interface OperatorDefinition {
    name: OPERATOR_NAME;
    type: OPERATOR_TYPE;
    kind?: typeof UNARY_OPERATOR_KIND_PREFIX | typeof UNARY_OPERATOR_KIND_SUFFIX;
    secondaryOperatorImage?: string;
    precedence: number;
    edmName?: string;
    edmNot?: boolean;
}
export declare const operatorMap: {
    [name: string]: OperatorDefinition;
};
/**
 * @returns Edm operators map
 */
export declare function getEdmOperatorMap(): Map<string, string[]>;
type ProtoExpression = {
    operators: Operator[];
    operands: AnnotationValue[];
    range: Range;
};
/**
 *  Builds expression.
 *
 * @param protoExpression Expression prototype
 * @returns Correct expression ast node
 */
export declare function buildExpression(protoExpression: ProtoExpression): CorrectExpression;
/**
 * Rebuilds number signes in the given exprssion.
 *
 * @param protoExpression Expression to process
 * @returns Updated expression
 */
export declare function rebuildNumberSigns(protoExpression: ProtoExpression): ProtoExpression;
/**
 * Checks if the given position is in the given expression white space.
 *
 * @param expression Expression node
 * @param position Position to check
 * @returns True if position is not occupied by some operand or operator, i.e. is in white space
 */
export declare function positionIsInExpressionWhiteSpace(expression: Expression, position: Position): boolean;
/**
 * Recursively checks if expression contains some incorrect nested expressions.
 *
 * @param expression Expression node to check
 * @returns True if incorrect expression found
 */
export declare function containsIncorrectExpressions(expression: Expression): boolean;
export {};
//# sourceMappingURL=expressions.d.ts.map