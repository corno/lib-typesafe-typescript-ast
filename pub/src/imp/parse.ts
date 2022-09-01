
import * as api from "../interface"

import * as x from "./generated"

export const parse: api.Parse = ($, $i, $d) => {
    return $d.parseDynamic(
        {
            tsconfigPath: $.tsConfigPath
        },
        {
            onError: $i.onError,
            onFile: ($$) => {
                const $ = $$.data
                const key = $$.path

                x.parse(
                    $.root,
                    {
                        reportMissingToken: ($) => {
                            $i.reportMissingToken(
                                {
                                    parentDetails: $.parentDetails,
                                    path: $.path,
                                    kindNameOptions: $.kindNameOptions
                                }
                            )

                        },
                        reportUnexpectedToken: ($) => {
                            $i.reportUnexpectedToken(
                                {
                                    path: $.path,
                                    token: $.token.details,
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
                        stringsNotEqual: $d.stringsNotEqual,
                    }
                )
            },
            onEnd: () => {

            },

        }
    )
}