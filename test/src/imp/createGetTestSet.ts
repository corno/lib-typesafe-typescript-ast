
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as ts from "api-dynamic-typescript-parser"
import * as tsRes from "res-dynamic-typescript-parser"
import * as uglyStuff from "api-pareto-ugly-stuff"

import * as test from "lib-pareto-test"

import * as pub from "../../../pub"

export function createGetTestSet(
    $d: {
        parse: ts.Parse
        lookAhead: uglyStuff.LookAhead
        doUntil: uglyStuff.DoUntil
    }
): test.GetTestSet {
    const deps = $d
    return ($, $d) => {

        const builder = pm.createDictionaryBuilder<test.TTestElement>(
            ["ignore", {}],
            () => {
                pl.panic("duplicate key")
            }
        )
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }


        $d.startAsync(
            pub.parse(
                {
                    tsConfigPath: [$.testDirectory, "..", "tsconfig.json"]
                },
                {
                    reportMissingToken: () => {
                        pl.logDebugMessage(`missing token`)
                    },
                    reportUnexpectedToken: () => {
                        pl.logDebugMessage(`unexpected token`)
                    },
                    onError: () => {
                        pl.logDebugMessage(`parser error`)

                    },
                    onFile: ($) => {
                        pub.visit(
                            $.data,
                            {
                                visitor: pub.createDefaultVisistor(
                                    {
                                        log: ($) => {
                                            pl.logDebugMessage($)
                                        }
                                    }
                                )
                            }
                        )

                        pl.logDebugMessage($.path)
                    },
                    onEnd: () => {
                        pl.logDebugMessage("DONE")
                    }
                },
                {
                    parseDynamic: deps.parse,
                    lookAhead: deps.lookAhead,
                    doUntil: deps.doUntil,
                    stringsNotEqual: (a, b) => a !== b
                }
            )
        )

        return pa.value({
            elements: builder.getDictionary()
        })
    }
}