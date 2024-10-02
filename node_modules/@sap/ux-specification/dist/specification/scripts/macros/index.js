"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd_1 = require("./cmd");
/**
 * Usage through command line
 */
(0, cmd_1.run)(process.argv).catch((e) => console.error(e.message));
//# sourceMappingURL=index.js.map