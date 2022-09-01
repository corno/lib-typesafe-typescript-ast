import * as ts from "res-dynamic-typescript-parser"
import * as uglyStuff from "res-pareto-ugly-stuff"

export const dependencies = {
    parse: ts.parse,
    lookAhead: uglyStuff.lookAhead,
    doUntil: uglyStuff.doUntil,
}