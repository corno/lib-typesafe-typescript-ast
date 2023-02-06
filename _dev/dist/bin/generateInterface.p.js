#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const pl = __importStar(require("pareto-core-lib"));
const pe = __importStar(require("pareto-core-exe"));
const pm = __importStar(require("pareto-core-state"));
const gta = __importStar(require("lib-generate-typesafe-ast"));
const filesystem = __importStar(require("res-pareto-filesystem"));
const collation = __importStar(require("res-pareto-collation"));
const tsg = __importStar(require("../data/typescriptGrammar"));
pe.runProgram(($, $i, $d) => {
    const argStack = pm.createStack($.arguments);
    argStack.pop((first) => {
        gta.generateInterface({
            grammar: tsg._typeScriptGrammar,
            rootPath: first,
        }, {
            isYinBeforeYang: collation.localeIsYinBeforeYang,
            createWriteStream: filesystem.createWriteStream,
            startAsync: $d.startAsync,
        });
    }, () => {
        pl.panic("args");
    });
});
