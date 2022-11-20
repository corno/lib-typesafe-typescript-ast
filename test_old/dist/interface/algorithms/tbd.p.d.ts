import * as pt from "pareto-core-types";
import * as ts from "api-dynamic-typescript-parser";
import * as uast from "api-untyped-ast";
import * as uglyStuff from "api-pareto-ugly-stuff";
import * as x from "../interface";
export declare type PParse = ($: {
    readonly "tsConfigPath": ts.Path;
}, $i: {
    readonly "reportUnexpectedToken": ($: {
        readonly "path": string;
        readonly "token": uast.TDetails;
        readonly "expected": null | string;
    }) => void;
    readonly "reportMissingToken": ($: {
        readonly "parentDetails": uast.TDetails;
        readonly "path": string;
        readonly "kindNameOptions": string;
    }) => void;
    readonly "onError": ($: ts.TypeScriptParserError) => void;
    readonly "onFile": ($: {
        readonly "path": string;
        readonly "data": x.TRoot;
    }) => void;
    readonly "onEnd": () => void;
}, $d: {
    readonly "parseDynamic": ts.Parse;
    readonly "doUntil": uglyStuff.DoUntil;
    readonly "lookAhead": uglyStuff.LookAhead;
    readonly "stringsAreEqual": (a: string, b: string) => boolean;
}, $a: pt.ProcessAsyncValue) => void;
