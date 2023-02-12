
import * as pa from "pareto-core-async"
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as test from "lib-pareto-test"

import * as api from "../../interface"


import * as pub from "../../../../pub"

export const f_createGetTestset: api.FCreateGetTestset = ($d) => {

    const deps = $d
    return ($, $d) => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
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
                    stringsAreEqual: deps.stringsAreEqual
                }
            )
        )

        return pa.value({
            elements: builder.getDictionary()
        })
    }
}