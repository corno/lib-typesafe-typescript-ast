#!/usr/bin/env node

import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pe from "pareto-core-exe"
import * as pm from "pareto-core-state"


import * as gta from "exe-generate-typesafe-ast"
import * as fs from "api-pareto-filesystem"
import * as pf from "res-pareto-filesystem"

import * as tsg from "../data/typescriptGrammar"

function genImp(
    $: {
        path: gta.Path,
        interfaceReference: string,
        grammar: gta.TGrammar,
    },
    $i: {
        onError: fs.OnFSError<fs.TWriteFileError>
    },
    $d: {
        startAsync: ($: pt.AsyncNonValue) => void
    }
) {
    const rootPath = $.path

    gta.generateImplementation(
        {
            fpSettings: {
                newline: "\n",
                indentation: "    ",
            },
            generation: {
                grammar: $.grammar,
                pathToInterface: $.interfaceReference,
            }
        },
        {
            orderStrings: (a, b) => a > b,
            createWriteStream: (
                $,
                $c,
            ) => {
                $d.startAsync(
                    pf.createWriteStream(
                        {
                            path: [rootPath, $.path],
                            createContainingDirectories: true,
                        },
                        {
                            onError: $i.onError
                        },
                        ($c2) => {
                            $c($c2)
                        }
                    )
                )
            }
        }
    )
}


pe.runProgram(
    ($, $i, $d) => {

        const argStack = pm.createStack($.arguments)

        argStack.pop(
            (first) => {

                argStack.pop(
                    (second) => {
                        genImp(
                            {
                                path: first,
                                interfaceReference: second,
                                grammar: tsg._typeScriptGrammar,
                            },
                            {
                                onError: ($) => {
                                    pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
                                }

                            },
                            {
                                startAsync: $d.startAsync,
                            }
                        )
                    },
                    () => {
                        pl.panic("args")

                    }
                )
            },
            () => {
                pl.panic("args")
            }
        )

    }
)
