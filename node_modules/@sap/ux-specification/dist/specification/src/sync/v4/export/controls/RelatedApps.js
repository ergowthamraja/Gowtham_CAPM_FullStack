"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedApps = exports.AdditionalSemanticObject = void 0;
const decorators_1 = require("../../../common/decoration/decorators");
const application_1 = require("../../application");
class AdditionalSemanticObject {
}
exports.AdditionalSemanticObject = AdditionalSemanticObject;
__decorate([
    (0, decorators_1.syncRule)({
        manifest: {
            path: application_1.getAdditionalSemanticObjectPath
        }
    }),
    (0, decorators_1.descriptionSrcURL)('https://ui5.sap.com/sdk/#/topic/8dcfe2e4555f49db8859cb6eb838692e'),
    (0, decorators_1.validity)({
        since: '1.108.0'
    })
], AdditionalSemanticObject.prototype, "allowedActions", void 0);
__decorate([
    (0, decorators_1.syncRule)({
        manifest: {
            path: application_1.getAdditionalSemanticObjectPath
        }
    }),
    (0, decorators_1.descriptionSrcURL)('https://ui5.sap.com/sdk/#/topic/8dcfe2e4555f49db8859cb6eb838692e'),
    (0, decorators_1.validity)({
        since: '1.96.0'
    })
], AdditionalSemanticObject.prototype, "unavailableActions", void 0);
__decorate([
    (0, decorators_1.syncRule)({
        manifest: {
            path: application_1.getAdditionalSemanticObjectPath
        }
    }),
    (0, decorators_1.descriptionSrcURL)('https://ui5.sap.com/sdk/#/topic/8dcfe2e4555f49db8859cb6eb838692e'),
    (0, decorators_1.validity)({
        since: '1.96.0'
    })
], AdditionalSemanticObject.prototype, "mapping", void 0);
class RelatedApps {
}
exports.RelatedApps = RelatedApps;
__decorate([
    (0, decorators_1.syncRule)({
        manifest: {
            path: (pageName) => (0, application_1.getSettingsPathForPage)(pageName)
        }
    }),
    (0, decorators_1.validity)({
        since: '1.84.0'
    })
], RelatedApps.prototype, "showRelatedApps", void 0);
__decorate([
    (0, decorators_1.syncRule)({
        manifest: {
            path: application_1.getSettingsPathForPage
        }
    })
], RelatedApps.prototype, "additionalSemanticObjects", void 0);
//# sourceMappingURL=RelatedApps.js.map