"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermApplicability = exports.CDS_VOCABULARY_ALIAS = exports.CDS_VOCABULARY_NAMESPACE = exports.ENUM_VALUE_KIND = void 0;
exports.ENUM_VALUE_KIND = 'Member';
exports.CDS_VOCABULARY_NAMESPACE = 'com.sap.vocabularies.CDS.v1';
exports.CDS_VOCABULARY_ALIAS = 'CDS';
/**
 * possible results for checking applicability of term
 */
var TermApplicability;
(function (TermApplicability) {
    TermApplicability[TermApplicability["Applicable"] = 0] = "Applicable";
    TermApplicability[TermApplicability["TermNotApplicable"] = 1] = "TermNotApplicable";
    TermApplicability[TermApplicability["TypeNotApplicable"] = 2] = "TypeNotApplicable";
    TermApplicability[TermApplicability["UnknownTerm"] = 3] = "UnknownTerm";
    TermApplicability[TermApplicability["UnknownVocabulary"] = 4] = "UnknownVocabulary";
    TermApplicability[TermApplicability["UnSupportedVocabulary"] = 5] = "UnSupportedVocabulary";
    TermApplicability[TermApplicability["NotInApplicableTermsConstraint"] = 6] = "NotInApplicableTermsConstraint";
})(TermApplicability || (exports.TermApplicability = TermApplicability = {}));
//# sourceMappingURL=vocabulary-service.js.map