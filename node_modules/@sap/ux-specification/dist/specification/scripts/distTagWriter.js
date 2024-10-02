"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
async function actualizeDistTags() {
    let distTagsFromNpm = {};
    const accessToken = process.env.GITHUB_TOKEN;
    const specNpmPath = `https://github.wdf.sap.corp/raw/NPMJS/FIORI_ELEMENT_SPECIFICATION-1.0.0/master/dist_tag.json?token=${accessToken}`;
    try {
        const agent = new https_1.default.Agent({
            rejectUnauthorized: false
        });
        const response = await axios_1.default.get(specNpmPath, { httpsAgent: agent });
        if (response.status === 200) {
            distTagsFromNpm = response.data;
        }
    }
    catch (error) {
        console.log(`API request "${specNpmPath}" failed with error "${error}"`);
        distTagsFromNpm = undefined;
    }
    if (distTagsFromNpm) {
        //Post-processing
        for (const tag of distTagsFromNpm['distTags']) {
            tag.version = tag.version.substring(0, tag.version.lastIndexOf('.'));
        }
        //Write to file
        //specification/packages/specification/src/sync/common/dist_tag.json
        const filePath = (0, path_1.join)(__dirname, '..', '..', 'src', 'sync', 'common', 'dist_tag.json');
        fs_1.default.writeFile(filePath, JSON.stringify(distTagsFromNpm, null, 2), function (error) {
            const message = error ? `Save failed with error "${error.message}"` : `dist_tag.json updated successfully`;
            console.log(message);
        });
    }
}
//Main
actualizeDistTags();
//# sourceMappingURL=distTagWriter.js.map