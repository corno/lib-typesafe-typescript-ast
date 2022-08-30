#!/usr/bin/env node
import * as pe from "pareto-core-exe"
import * as pl from "pareto-core-lib"

import * as dp from "res-dynamic-typescript-parser"
import * as uglyStuff from "res-pareto-ugly-stuff"
import * as exeLib from "lib-pareto-exe"

import * as pub from "../../../pub"

//import { testTypedProjectLoading } from "../implementation/testTypedProjectLoading";


pe.runProgram(
    ($, $i, $d) => {

        exeLib.getSingleArgument(
            $.arguments,
            {
                callback: ($) => {

                    $d.startAsync(
                        pub.parse(
                            {
                                tsConfigPath: [ $, "..", "tsconfig.json"]
                            },
                            {
                                reportMissingToken: () => {
                                    pl.logDebugMessage(`missing token`)
                                },
                                reportUnexpectedToken: () => {
                                    pl.logDebugMessage(`unexpected token`)
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
                                parseDynamic: dp.parse,
                                lookAhead: uglyStuff.lookAhead,
                                doUntil: uglyStuff.doUntil,
                            }
                        )
                    )
                },
                error: () => {
                    pl.panic("arg")
                }
            }
        )
        // const dataDir = $.argument

        // function x() {


        //     if (dataDir === undefined) {
        //         throw new Error("missing dataDir path")
        //     }

        //     //a bit ugly, I want to test the pub dir
        //     const tsconfigPath = pr.join([dataDir, "../../pub/tsconfig.json"])

        //     testTypedProjectLoading(
        //         tsconfigPath
        //     )
        // }

        // x()
    }
)
