export declare enum ApiErrorCode {
    General = 1,
    CompileError = 2,
    ComplexityViolation = 3,
    LocalAnnotationFileNotFound = 4
}
/**
 *
 */
export declare class ApiError extends Error {
    errorCode: ApiErrorCode;
    messageMap: Map<string, string[]>;
    /**
     *
     * @param message - Error message text.
     * @param errorCode - Error Code.
     * @param messageMap - Detailed message map.
     */
    constructor(message: string, errorCode?: ApiErrorCode, messageMap?: Map<string, string[]>);
    /**
     * Converts the error object to its string representation.
     *
     * @param extendedInfo - Flag indicating that additional error information should be added.
     * @returns A string representing the specified `Error` object.
     */
    toString(extendedInfo?: boolean): string;
    /**
     * Returns detailed error message.
     *
     * @returns A detailed error message.
     */
    getExtendedMessage(): string;
    private convertMessages;
}
//# sourceMappingURL=error.d.ts.map