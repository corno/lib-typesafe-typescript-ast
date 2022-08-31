
import * as api from "../interface"

import * as x from "./generated"

export const parse: api.Parse = ($, $i, $d) => {
    return $d.parseDynamic(
        {
            tsconfigPath: $.tsConfigPath
        },
        {
            onFile: ($$) => {
                const $ = $$.data
                const key = $$.path

                x.parse(
                    $.root,
                    {
                        reportMissingToken: ($) => {
                            $i.reportMissingToken(
                                {
                                    parentAnnotation: $.parentAnnotation,
                                    path: $.path,
                                    kindNameOptions: $.kindNameOptions
                                }
                            )

                        },
                        reportUnexpectedToken: ($) => {
                            $i.reportUnexpectedToken(
                                {
                                    path: $.path,
                                    token: $.token.implementationDetails,
                                    expected: $.expected,
                                }
                            )

                        },
                        callback: ($) => {
                            $i.onFile({
                                path: key,
                                data: $,
                            })
                        },
                    },
                    {
                        doUntil: $d.doUntil,
                        lookAhead: $d.lookAhead,
                    }
                )
            },
            onEnd: () => {

            },

        }
    )
}