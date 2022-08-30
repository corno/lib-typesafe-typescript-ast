
import * as api from "../interface"

import * as x from "./generated"

export const parse: api.Parse = ($, $i, $d) => {
    return $d.parseDynamic(
        {
            tsconfigPath: $.tsConfigPath
        },
        {
            callback: ($) => {
                $.files.forEach((a, b) => a > b, ($, key) => {
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
                })
            }

        }
    )
}