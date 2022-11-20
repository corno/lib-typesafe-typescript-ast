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
exports.f_parse = void 0;
const x = __importStar(require("../modules/generated"));
const f_parse = ($, $i, $d) => {
    return $d.parseDynamic({
        tsconfigPath: $.tsConfigPath
    }, {
        onError: $i.onError,
        onFile: ($$) => {
            const $ = $$.data;
            const key = $$.path;
            x.parse($.root, {
                reportMissingToken: ($) => {
                    $i.reportMissingToken({
                        parentDetails: $.parentDetails,
                        path: $.path,
                        kindNameOptions: $.kindNameOptions
                    });
                },
                reportUnexpectedToken: ($) => {
                    $i.reportUnexpectedToken({
                        path: $.path,
                        token: $.token.details,
                        expected: $.expected,
                    });
                },
                callback: ($) => {
                    $i.onFile({
                        path: key,
                        data: $,
                    });
                },
            }, {
                doUntil: $d.doUntil,
                lookAhead: $d.lookAhead,
                stringsAreEqual: $d.stringsAreEqual,
            });
        },
        onEnd: () => {
        },
    });
};
exports.f_parse = f_parse;
