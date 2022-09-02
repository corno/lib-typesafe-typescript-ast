import * as ts from "res-dynamic-typescript-parser"
import * as diff from "res-pareto-diff"
import * as uglyStuff from "res-pareto-ugly-stuff"
import { Dependencies } from "../imp/createGetTestSet"

export const dependencies: Dependencies = {
    parse: ts.parse,
    lookAhead: uglyStuff.lookAhead,
    doUntil: uglyStuff.doUntil,
    stringsAreEqual: (a, b) => diff.stringsAreEqual({a: a, b: b}),
}