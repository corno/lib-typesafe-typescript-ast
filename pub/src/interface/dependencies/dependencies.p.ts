import * as pm from 'pareto-core-state'

export type DDependencies = {
    //doUntil: <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void,
    lookAhead: <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void,
    stringsAreEqual: (a: string, b: string) => boolean,
}