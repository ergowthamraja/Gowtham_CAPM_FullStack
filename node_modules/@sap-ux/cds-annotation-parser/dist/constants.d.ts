export declare enum ReservedProperties {
    Type = "$Type",
    Value = "$value",
    EdmJson = "$edmJson"
}
/**
 * Checks if provided property name belongs to one of the reserved property names ({@link ReservedProperties}).
 *
 * @param name - Name of the property.
 * @returns True if property name matches one of the CDS reserved property names.
 */
export declare function isReservedProperty(name: string): boolean;
//# sourceMappingURL=constants.d.ts.map