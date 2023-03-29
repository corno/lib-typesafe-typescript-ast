
import * as pa from 'pareto-core-async'
import * as pm from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as g_test from "lib-pareto-test"

import { A } from "../api.generated"


import * as pub from "../../../..//../pub"

export const $$: A.getTestSet = ($d) => {


    return ($) => {

        const builder = pm.createUnsafeDictionaryBuilder<g_test.TTestElement>()
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

        return pa.asyncValue({
            elements: builder.getDictionary()
        })
    }
}