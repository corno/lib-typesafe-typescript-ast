import * as pt from "pareto-core-types"


import * as ts from "api-dynamic-typescript-parser"
import * as uast from "api-untyped-ast"
import * as uglyStuff from "api-pareto-ugly-stuff"

import * as x from "../interface"



export type Parse = (
    $: {
        tsConfigPath: ts.Path,
    },
    $i: {
        reportUnexpectedToken: ($: { path: string, token: uast.TDetails, expected: null | string }) => void,
        reportMissingToken: ($: { parentDetails: uast.TDetails, path: string, kindNameOptions: string, }) => void,
        onError: ($: ts.TypeScriptParserError) => void
        onFile: ($: {
            path: string,
            data: x.TRoot
        }) => void
        onEnd: () => void
    },
    $d: {
        parseDynamic: ts.Parse
        doUntil: uglyStuff.DoUntil,
        lookAhead: uglyStuff.LookAhead,
        stringsNotEqual: (a: string, b: string) => boolean
    }
) => pt.AsyncNonValue