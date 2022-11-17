
import * as uast from "api-untyped-ast"
import { DDependencies } from "../dependencies/dependencies"

import { TRoot } from "../types/ts_api"

export type PParse = (
    $: uast.TUntypedNode,
    $i: {
        readonly "callback": ($: TRoot) => void,
        readonly "reportUnexpectedToken": ($: {
            readonly "path": string
            readonly "token": uast.TUntypedNode
            readonly "expected": null | string
        }) => void,
        readonly "reportMissingToken": ($: {
            readonly "parentDetails": uast.TDetails
            readonly "path": string
            readonly "kindNameOptions": string
        }) => void,
    },
    $d: DDependencies,
) => void 