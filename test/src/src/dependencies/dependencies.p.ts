import * as ts from "res-dynamic-typescript-parser"
import * as diff from "res-pareto-diff"
import * as uglyStuff from "res-pareto-ugly-stuff"
import * as api from "../interface"

export const dependencies: api.DDependencies = {
    parse: ts.parse,
    lookAhead: uglyStuff.lookAhead,
    doUntil: uglyStuff.doUntil,
    stringsAreEqual: (a, b) => diff.stringsAreEqual({a: a, b: b}),
}