#!/usr/bin/env node

import * as pl from "pareto-core-lib"
import * as pe from "pareto-core-exe"
import * as pm from "pareto-core-state"


import * as gta from "exe-generate-typesafe-ast"
import * as filesystem from "res-pareto-filesystem"
import * as collation from "res-pareto-collation"

import * as tsg from "../data/typescriptGrammar"

pe.runProgram(
    ($, $i, $d) => {

        const argStack = pm.createStack($.arguments)

        argStack.pop(
            (first) => {
                gta.generateInterface(
                    {
                        grammar: tsg._typeScriptGrammar,
                        rootPath: first,

                    },
                    {
                        isYinBeforeYang: collation.localeIsYinBeforeYang,
                        createWriteStream: filesystem.createWriteStream,
                        startAsync: $d.startAsync,
                    }
                )
            },
            () => {
                pl.panic("args")
            }
        )

    }
)
