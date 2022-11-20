"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.f_createGetTestset = void 0;
const pa = __importStar(require("pareto-core-async"));
const pm = __importStar(require("pareto-core-state"));
const pl = __importStar(require("pareto-core-lib"));
const pub = __importStar(require("../../../../pub"));
const f_createGetTestset = ($d) => {
    const deps = $d;
    return ($, $d) => {
        const builder = pm.createUnsafeDictionaryBuilder();
        function createTest(name, actual, expected) {
            builder.add(name, {
                type: ["test", {
                        type: ["simple string", {
                                actual: actual,
                                expected: expected
                            }]
                    }]
            });
        }
        $d.startAsync(pub.parse({
            tsConfigPath: [$.testDirectory, "..", "tsconfig.json"]
        }, {
            reportMissingToken: () => {
                pl.logDebugMessage(`missing token`);
            },
            reportUnexpectedToken: () => {
                pl.logDebugMessage(`unexpected token`);
            },
            onError: () => {
                pl.logDebugMessage(`parser error`);
            },
            onFile: ($) => {
                pub.visit($.data, {
                    visitor: pub.createDefaultVisistor({
                        log: ($) => {
                            pl.logDebugMessage($);
                        }
                    })
                });
                pl.logDebugMessage($.path);
            },
            onEnd: () => {
                pl.logDebugMessage("DONE");
            }
        }, {
            parseDynamic: deps.parse,
            lookAhead: deps.lookAhead,
            doUntil: deps.doUntil,
            stringsAreEqual: deps.stringsAreEqual
        }));
        return pa.value({
            elements: builder.getDictionary()
        });
    };
};
exports.f_createGetTestset = f_createGetTestset;
