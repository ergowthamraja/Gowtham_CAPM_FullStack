"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = exports.ApiErrorCode = void 0;
var ApiErrorCode;
(function (ApiErrorCode) {
    ApiErrorCode[ApiErrorCode["General"] = 1] = "General";
    ApiErrorCode[ApiErrorCode["CompileError"] = 2] = "CompileError";
    ApiErrorCode[ApiErrorCode["ComplexityViolation"] = 3] = "ComplexityViolation";
    ApiErrorCode[ApiErrorCode["LocalAnnotationFileNotFound"] = 4] = "LocalAnnotationFileNotFound";
})(ApiErrorCode || (exports.ApiErrorCode = ApiErrorCode = {}));
/**
 *
 */
class ApiError extends Error {
    errorCode;
    messageMap;
    /**
     *
     * @param message - Error message text.
     * @param errorCode - Error Code.
     * @param messageMap - Detailed message map.
     */
    constructor(message, errorCode, messageMap) {
        super(message);
        this.messageMap = messageMap ?? new Map();
        this.errorCode = errorCode ?? ApiErrorCode.General;
    }
    /**
     * Converts the error object to its string representation.
     *
     * @param extendedInfo - Flag indicating that additional error information should be added.
     * @returns A string representing the specified `Error` object.
     */
    toString(extendedInfo = false) {
        const baseMessage = super.toString();
        if (extendedInfo) {
            const otherMessageText = this.messageMap.size > 0 ? this.convertMessages() : '';
            return [baseMessage, `Error code: ${this.errorCode}`, otherMessageText].join('. ');
        }
        return baseMessage;
    }
    /**
     * Returns detailed error message.
     *
     * @returns A detailed error message.
     */
    getExtendedMessage() {
        const baseMessage = this.message;
        if (this.messageMap.size > 0) {
            return [baseMessage, this.convertMessages()].join('. ');
        }
        return baseMessage;
    }
    convertMessages() {
        let text = 'Other messages:';
        for (const [key, messages] of this.messageMap.entries()) {
            text += `\n[${key}]:`;
            for (const message of messages) {
                text += `\n- ${message}`;
            }
        }
        return text;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=error.js.map