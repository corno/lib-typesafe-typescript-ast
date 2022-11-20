
export type DDependencies = {

    readonly parse: ts.Parse
    readonly lookAhead: uglyStuff.LookAhead
    readonly doUntil: uglyStuff.DoUntil
    readonly stringsAreEqual: FStringsAreEqual
}