// import * as tast from "../../../../pub/dist/generated/typescriptAST"
// import { createFoo } from "./foo";

// export function testTypedProjectLoading(
//     tsconfigPath: string
// ) {
//     function getLineInfo(
//         $: tsmorph.Node,
//     ) {
//         const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
//         return `[${lp.line}, ${lp.column}]`
//     }

//     const project = new tsmorph.Project({})
//     project.addSourceFilesFromTsConfig(tsconfigPath)
//     project.getSourceFiles().forEach(($) => {
//         const filePath = $.getFilePath()
//         function wrapNode($: tsmorph.Node): tast.TUntypedNode<tsmorph.Node> {
//             class WrappedNode implements tast.TUntypedNode<tsmorph.Node> {
//                 get kindName() {
//                     return $.getKindName()
//                 }
//                 get value() {
//                     return $.getText()
//                 }
//                 get children() {
//                     return {
//                         forEach: (callback: ($: tast.TUntypedNode<tsmorph.Node>) => void) => {
//                             $.forEachChild((x) => {
//                                 callback(wrapNode(x))
//                             })
//                         }
//                     }
//                 }
//                 get annotation() {
//                     return $
//                 }
//             }
//             return new WrappedNode()
//         }
//         tast.parse<tsmorph.Node>(
//             wrapNode($),
//             {
//                 callback: ($) => {
//                     console.log(filePath)
//                     tast.visit(
//                         $,
//                         createFoo(
//                             (str) => {
//                                 console.log(`    ${str}`)
//                             }
//                         ),
//                     )
//                 },
//                 reportUnexpectedRoot: ($) => {
//                     console.error(`>unexpected root '${$.root.annotation.getKindName()}' @ ${filePath}${getLineInfo($.root.annotation)}`)
//                 },
//                 reportUnexpectedChild: ($) => {
//                     console.error(`>'${$.path}': unexpected child '${$.child.kindName}', expected ${$.expected === null ? "nothing" : $.expected.map(($) => `'${$}'`).join(" or ")}} @ ${filePath}${getLineInfo($.child.annotation)}`)
//                 },
//                 reportMissingToken: ($) => {
//                     console.error(`>'${$.path}': missing symbol (options: ${$.kindNameOptions.map(($) => `'${$}'`).join(", ")}) @ ${filePath}${$.parentAnnotation === null ? "" : getLineInfo($.parentAnnotation)}`)
//                 }
//             }
//         )
//     })
// }