import * as pl from "pareto-core-lib"
import * as api from "../../interface/generated"

export function visit<Annotation>(
    $: api.TNroot<Annotation>,
    $i: {
        visitor: api.IVisitor<Annotation>,
    }
): void {
    function X_block(
        $: api.TGblock<Annotation>,
    ) {
        ((
            $: api.TNGblock$<Annotation>,
        ) => {
            if ($i.visitor["$block/*Block"] !== undefined) { $i.visitor["$block/*Block"].begin($) }
            pl.cc($.content, ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            if ($i.visitor["$block/*Block"] !== undefined) { $i.visitor["$block/*Block"].end($) }
        })($)
    }
    function X_expression(
        $: api.TGexpression<Annotation>,
    ) {
        switch ($[0]) {
            case "true": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_true$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?true/*TrueKeyword"] !== undefined) { $i.visitor["$expression/?true/*TrueKeyword"]($) }
                    })($)
                })
                break
            }
            case "template": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_template$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?template/*TemplateExpression"] !== undefined) { $i.visitor["$expression/?template/*TemplateExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["head"], ($) => {
                                ((
                                    $: api.TNGexpression_template$_head$<Annotation>,
                                ) => {
                                    if ($i.visitor["$expression/?template/*TemplateExpression/.head/*TemplateHead"] !== undefined) { $i.visitor["$expression/?template/*TemplateExpression/.head/*TemplateHead"]($) }
                                })($)
                            })
                            pl.cc($["spans"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNGexpression_template$_spans$<Annotation>,
                                    ) => {
                                        if ($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"] !== undefined) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].begin($) }
                                        pl.cc($.content, ($) => {
                                            pl.cc($["expression"], ($) => {
                                                X_expression($)
                                            })
                                            pl.cc($["x"], ($) => {
                                                switch ($[0]) {
                                                    case "tail": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_tail$<Annotation>,
                                                            ) => {
                                                                if ($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"] !== undefined) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "middle": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_middle$<Annotation>,
                                                            ) => {
                                                                if ($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"] !== undefined) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pl.au($[0])
                                                }
                                            })
                                        })
                                        if ($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"] !== undefined) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].end($) }
                                    })($)
                                })
                            })
                        })
                        if ($i.visitor["$expression/?template/*TemplateExpression"] !== undefined) { $i.visitor["$expression/?template/*TemplateExpression"].end($) }
                    })($)
                })
                break
            }
            case "stringLiteral": {
                pl.cc($[1], ($) => {
                    X_stringLiteral($)
                })
                break
            }
            case "propertyAccess": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_propertyAccess$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"] !== undefined) { $i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["object"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["property"], ($) => {
                                X_expression($)
                            })
                        })
                        if ($i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"] !== undefined) { $i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"].end($) }
                    })($)
                })
                break
            }
            case "prefixUnary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_prefixUnary$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"] !== undefined) { $i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if ($i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"] !== undefined) { $i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "postfixUnary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_postfixUnary$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"] !== undefined) { $i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if ($i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"] !== undefined) { $i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "parenthesizedExpression": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_parenthesizedExpression$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"] !== undefined) { $i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if ($i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"] !== undefined) { $i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"].end($) }
                    })($)
                })
                break
            }
            case "objectLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_objectLiteral$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                switch ($[0]) {
                                    case "propertyAssignment": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_objectLiteral$_propertyAssignment$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/?propertyAssignment/*PropertyAssignment"] !== undefined) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/?propertyAssignment/*PropertyAssignment"].begin($) }
                                                pl.cc($.content, ($) => {
                                                    pl.cc($["name"], ($) => {
                                                        switch ($[0]) {
                                                            case "stringLiteral": {
                                                                pl.cc($[1], ($) => {
                                                                    X_stringLiteral($)
                                                                })
                                                                break
                                                            }
                                                            case "numericLiteral": {
                                                                pl.cc($[1], ($) => {
                                                                    X_numericLiteral($)
                                                                })
                                                                break
                                                            }
                                                            case "identifier": {
                                                                pl.cc($[1], ($) => {
                                                                    X_identifier($)
                                                                })
                                                                break
                                                            }
                                                            default: pl.au($[0])
                                                        }
                                                    })
                                                    pl.cc($["expression"], ($) => {
                                                        X_expression($)
                                                    })
                                                })
                                                if ($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/?propertyAssignment/*PropertyAssignment"] !== undefined) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/?propertyAssignment/*PropertyAssignment"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "getAccessor": {
                                        pl.cc($[1], ($) => {
                                            X_getAccessor($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                        })
                        if ($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "nullKeyword": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_nullKeyword$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?nullKeyword/*NullKeyword"] !== undefined) { $i.visitor["$expression/?nullKeyword/*NullKeyword"]($) }
                    })($)
                })
                break
            }
            case "numericLiteral": {
                pl.cc($[1], ($) => {
                    X_numericLiteral($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"] !== undefined) { $i.visitor["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"]($) }
                    })($)
                })
                break
            }
            case "new": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_new$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?new/*NewExpression"] !== undefined) { $i.visitor["$expression/?new/*NewExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["class"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_expression($)
                                })
                            })
                        })
                        if ($i.visitor["$expression/?new/*NewExpression"] !== undefined) { $i.visitor["$expression/?new/*NewExpression"].end($) }
                    })($)
                })
                break
            }
            case "identifier": {
                pl.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            case "false": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_false$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?false/*FalseKeyword"] !== undefined) { $i.visitor["$expression/?false/*FalseKeyword"]($) }
                    })($)
                })
                break
            }
            case "elementAccess": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_elementAccess$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?elementAccess/*ElementAccessExpression"] !== undefined) { $i.visitor["$expression/?elementAccess/*ElementAccessExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["array"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["element"], ($) => {
                                X_expression($)
                            })
                        })
                        if ($i.visitor["$expression/?elementAccess/*ElementAccessExpression"] !== undefined) { $i.visitor["$expression/?elementAccess/*ElementAccessExpression"].end($) }
                    })($)
                })
                break
            }
            case "conditional": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_conditional$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?conditional/*ConditionalExpression"] !== undefined) { $i.visitor["$expression/?conditional/*ConditionalExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["test"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["questionToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_questionToken$<Annotation>,
                                ) => {
                                    if ($i.visitor["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"] !== undefined) { $i.visitor["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"]($) }
                                })($)
                            })
                            pl.cc($["ifExpression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["colonToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_colonToken$<Annotation>,
                                ) => {
                                    if ($i.visitor["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"] !== undefined) { $i.visitor["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"]($) }
                                })($)
                            })
                            pl.cc($["elseExpression"], ($) => {
                                X_expression($)
                            })
                        })
                        if ($i.visitor["$expression/?conditional/*ConditionalExpression"] !== undefined) { $i.visitor["$expression/?conditional/*ConditionalExpression"].end($) }
                    })($)
                })
                break
            }
            case "call": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_call$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?call/*CallExpression"] !== undefined) { $i.visitor["$expression/?call/*CallExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["function"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_type($)
                                })
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_expression($)
                                })
                            })
                        })
                        if ($i.visitor["$expression/?call/*CallExpression"] !== undefined) { $i.visitor["$expression/?call/*CallExpression"].end($) }
                    })($)
                })
                break
            }
            case "binary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_binary$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?binary/*BinaryExpression"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["leftHandSide"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "plusEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plusEquals$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plus": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plus$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minusEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minusEquals$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minus": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minus$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "lessThan": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_lessThan$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "greaterThan": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_greaterThan$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "exclamationEqualsEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equalsEqualsEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equals$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "barBar": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_barBar$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "ampersandAmpersand": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                            pl.cc($["rightHandSide"], ($) => {
                                X_expression($)
                            })
                        })
                        if ($i.visitor["$expression/?binary/*BinaryExpression"] !== undefined) { $i.visitor["$expression/?binary/*BinaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "arrowFunction": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrowFunction$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?arrowFunction/*ArrowFunction"] !== undefined) { $i.visitor["$expression/?arrowFunction/*ArrowFunction"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_type($)
                                }
                            })
                            pl.cc($["equalsGreaterThan"], ($) => {
                                ((
                                    $: api.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>,
                                ) => {
                                    if ($i.visitor["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"] !== undefined) { $i.visitor["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"]($) }
                                })($)
                            })
                            pl.cc($["implementation"], ($) => {
                                switch ($[0]) {
                                    case "expression": {
                                        pl.cc($[1], ($) => {
                                            X_expression($)
                                        })
                                        break
                                    }
                                    case "block": {
                                        pl.cc($[1], ($) => {
                                            X_block($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                        })
                        if ($i.visitor["$expression/?arrowFunction/*ArrowFunction"] !== undefined) { $i.visitor["$expression/?arrowFunction/*ArrowFunction"].end($) }
                    })($)
                })
                break
            }
            case "arrayLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrayLiteral$<Annotation>,
                    ) => {
                        if ($i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"] !== undefined) { $i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_expression($)
                            })
                        })
                        if ($i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"] !== undefined) { $i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_functionDefinition(
        $: api.TGfunctionDefinition<Annotation>,
    ) {
        pl.cc($["typeParameters"], ($) => {
            $.forEach(($) => {
                X_typeParameter($)
            })
        })
        pl.cc($["parameters"], ($) => {
            $.forEach(($) => {
                X_parameter($)
            })
        })
        pl.cc($["returnType"], ($) => {
            if ($ === null) {
                //FIXME??
            } else {
                X_type($)
            }
        })
    }
    function X_getAccessor(
        $: api.TGgetAccessor<Annotation>,
    ) {
        ((
            $: api.TNGgetAccessor$<Annotation>,
        ) => {
            if ($i.visitor["$getAccessor/*GetAccessor"] !== undefined) { $i.visitor["$getAccessor/*GetAccessor"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["name"], ($) => {
                    X_identifier($)
                })
                pl.cc($["block"], ($) => {
                    X_block($)
                })
            })
            if ($i.visitor["$getAccessor/*GetAccessor"] !== undefined) { $i.visitor["$getAccessor/*GetAccessor"].end($) }
        })($)
    }
    function X_identifier(
        $: api.TGidentifier<Annotation>,
    ) {
        ((
            $: api.TNGidentifier$<Annotation>,
        ) => {
            if ($i.visitor["$identifier/*Identifier"] !== undefined) { $i.visitor["$identifier/*Identifier"]($) }
        })($)
    }
    function X_identifierOrStringLiteral(
        $: api.TGidentifierOrStringLiteral<Annotation>,
    ) {
        switch ($[0]) {
            case "stringLiteral": {
                pl.cc($[1], ($) => {
                    X_stringLiteral($)
                })
                break
            }
            case "identifier": {
                pl.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_modifier(
        $: api.TGmodifier<Annotation>,
    ) {
        switch ($[0]) {
            case "readonly": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_readonly$<Annotation>,
                    ) => {
                        if ($i.visitor["$modifier/?readonly/*ReadonlyKeyword"] !== undefined) { $i.visitor["$modifier/?readonly/*ReadonlyKeyword"]($) }
                    })($)
                })
                break
            }
            case "export": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_export$<Annotation>,
                    ) => {
                        if ($i.visitor["$modifier/?export/*ExportKeyword"] !== undefined) { $i.visitor["$modifier/?export/*ExportKeyword"]($) }
                    })($)
                })
                break
            }
            case "declare": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_declare$<Annotation>,
                    ) => {
                        if ($i.visitor["$modifier/?declare/*DeclareKeyword"] !== undefined) { $i.visitor["$modifier/?declare/*DeclareKeyword"]($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_numericLiteral(
        $: api.TGnumericLiteral<Annotation>,
    ) {
        ((
            $: api.TNGnumericLiteral$<Annotation>,
        ) => {
            if ($i.visitor["$numericLiteral/*NumericLiteral"] !== undefined) { $i.visitor["$numericLiteral/*NumericLiteral"]($) }
        })($)
    }
    function X_parameter(
        $: api.TGparameter<Annotation>,
    ) {
        ((
            $: api.TNGparameter$<Annotation>,
        ) => {
            if ($i.visitor["$parameter/*Parameter"] !== undefined) { $i.visitor["$parameter/*Parameter"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["name"], ($) => {
                    X_identifier($)
                })
                pl.cc($["questionToken"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        ((
                            $: api.TNGparameter$_questionToken$<Annotation>,
                        ) => {
                            if ($i.visitor["$parameter/*Parameter/.questionToken/*QuestionToken"] !== undefined) { $i.visitor["$parameter/*Parameter/.questionToken/*QuestionToken"]($) }
                        })($)
                    }
                })
                pl.cc($["type"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        X_type($)
                    }
                })
            })
            if ($i.visitor["$parameter/*Parameter"] !== undefined) { $i.visitor["$parameter/*Parameter"].end($) }
        })($)
    }
    function X_statement(
        $: api.TGstatement<Annotation>,
    ) {
        switch ($[0]) {
            case "while": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_while$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?while/*WhileStatement"] !== undefined) { $i.visitor["$statement/?while/*WhileStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if ($i.visitor["$statement/?while/*WhileStatement"] !== undefined) { $i.visitor["$statement/?while/*WhileStatement"].end($) }
                    })($)
                })
                break
            }
            case "variable": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_variable$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?variable/*VariableStatement"] !== undefined) { $i.visitor["$statement/?variable/*VariableStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["variableDeclarationList"], ($) => {
                                X_variableDeclarationList($)
                            })
                        })
                        if ($i.visitor["$statement/?variable/*VariableStatement"] !== undefined) { $i.visitor["$statement/?variable/*VariableStatement"].end($) }
                    })($)
                })
                break
            }
            case "typeAlias": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_typeAlias$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"] !== undefined) { $i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_typeParameter($)
                                })
                            })
                            pl.cc($["type"], ($) => {
                                X_type($)
                            })
                        })
                        if ($i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"] !== undefined) { $i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "try": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_try$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?try/*TryStatement"] !== undefined) { $i.visitor["$statement/?try/*TryStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                            pl.cc($["catchClause"], ($) => {
                                ((
                                    $: api.TNGstatement_try$_catchClause$<Annotation>,
                                ) => {
                                    if ($i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"] !== undefined) { $i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["variable"], ($) => {
                                            X_variableDeclaration($)
                                        })
                                        pl.cc($["block"], ($) => {
                                            X_block($)
                                        })
                                    })
                                    if ($i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"] !== undefined) { $i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"].end($) }
                                })($)
                            })
                        })
                        if ($i.visitor["$statement/?try/*TryStatement"] !== undefined) { $i.visitor["$statement/?try/*TryStatement"].end($) }
                    })($)
                })
                break
            }
            case "throw": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_throw$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?throw/*ThrowStatement"] !== undefined) { $i.visitor["$statement/?throw/*ThrowStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if ($i.visitor["$statement/?throw/*ThrowStatement"] !== undefined) { $i.visitor["$statement/?throw/*ThrowStatement"].end($) }
                    })($)
                })
                break
            }
            case "switch": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_switch$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?switch/*SwitchStatement"] !== undefined) { $i.visitor["$statement/?switch/*SwitchStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["caseBlock"], ($) => {
                                ((
                                    $: api.TNGstatement_switch$_caseBlock$<Annotation>,
                                ) => {
                                    if ($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"] !== undefined) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].begin($) }
                                    pl.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "default": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_default$<Annotation>,
                                                        ) => {
                                                            if ($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"] !== undefined) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                $.forEach(($) => {
                                                                    X_statement($)
                                                                })
                                                            })
                                                            if ($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"] !== undefined) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "case": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_case$<Annotation>,
                                                        ) => {
                                                            if ($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"] !== undefined) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                pl.cc($["case"], ($) => {
                                                                    X_expression($)
                                                                })
                                                                pl.cc($["statements"], ($) => {
                                                                    $.forEach(($) => {
                                                                        X_statement($)
                                                                    })
                                                                })
                                                            })
                                                            if ($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"] !== undefined) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pl.au($[0])
                                            }
                                        })
                                    })
                                    if ($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"] !== undefined) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].end($) }
                                })($)
                            })
                        })
                        if ($i.visitor["$statement/?switch/*SwitchStatement"] !== undefined) { $i.visitor["$statement/?switch/*SwitchStatement"].end($) }
                    })($)
                })
                break
            }
            case "return": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_return$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?return/*ReturnStatement"] !== undefined) { $i.visitor["$statement/?return/*ReturnStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_expression($)
                            }
                        })
                        if ($i.visitor["$statement/?return/*ReturnStatement"] !== undefined) { $i.visitor["$statement/?return/*ReturnStatement"].end($) }
                    })($)
                })
                break
            }
            case "labeled": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_labeled$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?labeled/*LabeledStatement"] !== undefined) { $i.visitor["$statement/?labeled/*LabeledStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["label"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["statement"], ($) => {
                                X_statement($)
                            })
                        })
                        if ($i.visitor["$statement/?labeled/*LabeledStatement"] !== undefined) { $i.visitor["$statement/?labeled/*LabeledStatement"].end($) }
                    })($)
                })
                break
            }
            case "interface": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_interface$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?interface/*InterfaceDeclaration"] !== undefined) { $i.visitor["$statement/?interface/*InterfaceDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_typeParameter($)
                                })
                            })
                            pl.cc($["signature"], ($) => {
                                $.forEach(($) => {
                                    X_typeSignature($)
                                })
                            })
                        })
                        if ($i.visitor["$statement/?interface/*InterfaceDeclaration"] !== undefined) { $i.visitor["$statement/?interface/*InterfaceDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "import": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_import$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?import/*ImportDeclaration"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["clause"], ($) => {
                                ((
                                    $: api.TNGstatement_import$_clause$<Annotation>,
                                ) => {
                                    if ($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].begin($) }
                                    pl.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "named": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if ($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNGstatement_import$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if ($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].begin($) }
                                                                    pl.cc($.content, ($) => {
                                                                        pl.cc($["name"], ($) => {
                                                                            X_identifier($)
                                                                        })
                                                                        pl.cc($["as"], ($) => {
                                                                            if ($ === null) {
                                                                                //FIXME??
                                                                            } else {
                                                                                X_identifier($)
                                                                            }
                                                                        })
                                                                    })
                                                                    if ($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if ($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "namespace": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if ($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if ($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pl.au($[0])
                                        }
                                    })
                                    if ($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].end($) }
                                })($)
                            })
                            pl.cc($["file"], ($) => {
                                X_stringLiteral($)
                            })
                        })
                        if ($i.visitor["$statement/?import/*ImportDeclaration"] !== undefined) { $i.visitor["$statement/?import/*ImportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "if": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_if$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?if/*IfStatement"] !== undefined) { $i.visitor["$statement/?if/*IfStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["thenStatement"], ($) => {
                                X_statement($)
                            })
                            pl.cc($["elseStatement"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_statement($)
                                }
                            })
                        })
                        if ($i.visitor["$statement/?if/*IfStatement"] !== undefined) { $i.visitor["$statement/?if/*IfStatement"].end($) }
                    })($)
                })
                break
            }
            case "function": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_function$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?function/*FunctionDeclaration"] !== undefined) { $i.visitor["$statement/?function/*FunctionDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                            pl.cc($["block"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_block($)
                                }
                            })
                        })
                        if ($i.visitor["$statement/?function/*FunctionDeclaration"] !== undefined) { $i.visitor["$statement/?function/*FunctionDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "for": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_for$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?for/*ForStatement"] !== undefined) { $i.visitor["$statement/?for/*ForStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["initializer"], ($) => {
                                X_variableDeclarationList($)
                            })
                            pl.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["incrementer"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if ($i.visitor["$statement/?for/*ForStatement"] !== undefined) { $i.visitor["$statement/?for/*ForStatement"].end($) }
                    })($)
                })
                break
            }
            case "expression": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_expression$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?expression/*ExpressionStatement"] !== undefined) { $i.visitor["$statement/?expression/*ExpressionStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if ($i.visitor["$statement/?expression/*ExpressionStatement"] !== undefined) { $i.visitor["$statement/?expression/*ExpressionStatement"].end($) }
                    })($)
                })
                break
            }
            case "export": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_export$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?export/*ExportDeclaration"] !== undefined) { $i.visitor["$statement/?export/*ExportDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            X_stringLiteral($)
                        })
                        if ($i.visitor["$statement/?export/*ExportDeclaration"] !== undefined) { $i.visitor["$statement/?export/*ExportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "class": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_class$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?class/*ClassDeclaration"] !== undefined) { $i.visitor["$statement/?class/*ClassDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["heritageClause"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    ((
                                        $: api.TNGstatement_class$_heritageClause$<Annotation>,
                                    ) => {
                                        if ($i.visitor["$statement/?class/*ClassDeclaration/.heritageClause/*HeritageClause"] !== undefined) { $i.visitor["$statement/?class/*ClassDeclaration/.heritageClause/*HeritageClause"].begin($) }
                                        pl.cc($.content, ($) => {
                                            $.forEach(($) => {
                                                ((
                                                    $: api.TNGstatement_class$_heritageClause$$<Annotation>,
                                                ) => {
                                                    if ($i.visitor["$statement/?class/*ClassDeclaration/.heritageClause/*HeritageClause/*ExpressionWithTypeArguments"] !== undefined) { $i.visitor["$statement/?class/*ClassDeclaration/.heritageClause/*HeritageClause/*ExpressionWithTypeArguments"].begin($) }
                                                    pl.cc($.content, ($) => {
                                                        pl.cc($["expression"], ($) => {
                                                            X_expression($)
                                                        })
                                                        pl.cc($["typeArguments"], ($) => {
                                                            $.forEach(($) => {
                                                                X_type($)
                                                            })
                                                        })
                                                    })
                                                    if ($i.visitor["$statement/?class/*ClassDeclaration/.heritageClause/*HeritageClause/*ExpressionWithTypeArguments"] !== undefined) { $i.visitor["$statement/?class/*ClassDeclaration/.heritageClause/*HeritageClause/*ExpressionWithTypeArguments"].end($) }
                                                })($)
                                            })
                                        })
                                        if ($i.visitor["$statement/?class/*ClassDeclaration/.heritageClause/*HeritageClause"] !== undefined) { $i.visitor["$statement/?class/*ClassDeclaration/.heritageClause/*HeritageClause"].end($) }
                                    })($)
                                }
                            })
                            pl.cc($["members"], ($) => {
                                $.forEach(($) => {
                                    switch ($[0]) {
                                        case "getAccessor": {
                                            pl.cc($[1], ($) => {
                                                X_getAccessor($)
                                            })
                                            break
                                        }
                                        default: pl.au($[0])
                                    }
                                })
                            })
                        })
                        if ($i.visitor["$statement/?class/*ClassDeclaration"] !== undefined) { $i.visitor["$statement/?class/*ClassDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "break": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_break$<Annotation>,
                    ) => {
                        if ($i.visitor["$statement/?break/*BreakStatement"] !== undefined) { $i.visitor["$statement/?break/*BreakStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_identifier($)
                            }
                        })
                        if ($i.visitor["$statement/?break/*BreakStatement"] !== undefined) { $i.visitor["$statement/?break/*BreakStatement"].end($) }
                    })($)
                })
                break
            }
            case "block": {
                pl.cc($[1], ($) => {
                    X_block($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_stringLiteral(
        $: api.TGstringLiteral<Annotation>,
    ) {
        ((
            $: api.TNGstringLiteral$<Annotation>,
        ) => {
            if ($i.visitor["$stringLiteral/*StringLiteral"] !== undefined) { $i.visitor["$stringLiteral/*StringLiteral"]($) }
        })($)
    }
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "void": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_void$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?void/*VoidKeyword"] !== undefined) { $i.visitor["$type/?void/*VoidKeyword"]($) }
                    })($)
                })
                break
            }
            case "union": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?union/*UnionType"] !== undefined) { $i.visitor["$type/?union/*UnionType"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if ($i.visitor["$type/?union/*UnionType"] !== undefined) { $i.visitor["$type/?union/*UnionType"].end($) }
                    })($)
                })
                break
            }
            case "undefined": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_undefined$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?undefined/*UndefinedKeyword"] !== undefined) { $i.visitor["$type/?undefined/*UndefinedKeyword"]($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?typeReference/*TypeReference"] !== undefined) { $i.visitor["$type/?typeReference/*TypeReference"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["x"], ($) => {
                                switch ($[0]) {
                                    case "qualifiedName": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>,
                                            ) => {
                                                if ($i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"] !== undefined) { $i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].begin($) }
                                                pl.cc($.content, ($) => {
                                                    pl.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pl.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if ($i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"] !== undefined) { $i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "identifier": {
                                        pl.cc($[1], ($) => {
                                            X_identifier($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_type($)
                                })
                            })
                        })
                        if ($i.visitor["$type/?typeReference/*TypeReference"] !== undefined) { $i.visitor["$type/?typeReference/*TypeReference"].end($) }
                    })($)
                })
                break
            }
            case "string": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_string$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?string/*StringKeyword"] !== undefined) { $i.visitor["$type/?string/*StringKeyword"]($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeLiteral$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?typeLiteral/*TypeLiteral"] !== undefined) { $i.visitor["$type/?typeLiteral/*TypeLiteral"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_typeSignature($)
                            })
                        })
                        if ($i.visitor["$type/?typeLiteral/*TypeLiteral"] !== undefined) { $i.visitor["$type/?typeLiteral/*TypeLiteral"].end($) }
                    })($)
                })
                break
            }
            case "tuple": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_tuple$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?tuple/*TupleType"] !== undefined) { $i.visitor["$type/?tuple/*TupleType"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if ($i.visitor["$type/?tuple/*TupleType"] !== undefined) { $i.visitor["$type/?tuple/*TupleType"].end($) }
                    })($)
                })
                break
            }
            case "optional": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_optional$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?optional/*OptionalType"] !== undefined) { $i.visitor["$type/?optional/*OptionalType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if ($i.visitor["$type/?optional/*OptionalType"] !== undefined) { $i.visitor["$type/?optional/*OptionalType"].end($) }
                    })($)
                })
                break
            }
            case "number": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?number/*NumberKeyword"] !== undefined) { $i.visitor["$type/?number/*NumberKeyword"]($) }
                    })($)
                })
                break
            }
            case "never": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_never$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?never/*NeverKeyword"] !== undefined) { $i.visitor["$type/?never/*NeverKeyword"]($) }
                    })($)
                })
                break
            }
            case "parenthesized": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_parenthesized$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?parenthesized/*ParenthesizedType"] !== undefined) { $i.visitor["$type/?parenthesized/*ParenthesizedType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if ($i.visitor["$type/?parenthesized/*ParenthesizedType"] !== undefined) { $i.visitor["$type/?parenthesized/*ParenthesizedType"].end($) }
                    })($)
                })
                break
            }
            case "literal": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_literal$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?literal/*LiteralType"] !== undefined) { $i.visitor["$type/?literal/*LiteralType"].begin($) }
                        pl.cc($.content, ($) => {
                            switch ($[0]) {
                                case "string": {
                                    pl.cc($[1], ($) => {
                                        X_stringLiteral($)
                                    })
                                    break
                                }
                                case "null": {
                                    pl.cc($[1], ($) => {
                                        ((
                                            $: api.TNGtype_literal$_null$<Annotation>,
                                        ) => {
                                            if ($i.visitor["$type/?literal/*LiteralType/?null/*NullKeyword"] !== undefined) { $i.visitor["$type/?literal/*LiteralType/?null/*NullKeyword"]($) }
                                        })($)
                                    })
                                    break
                                }
                                default: pl.au($[0])
                            }
                        })
                        if ($i.visitor["$type/?literal/*LiteralType"] !== undefined) { $i.visitor["$type/?literal/*LiteralType"].end($) }
                    })($)
                })
                break
            }
            case "function": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_function$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?function/*FunctionType"] !== undefined) { $i.visitor["$type/?function/*FunctionType"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_type($)
                                }
                            })
                        })
                        if ($i.visitor["$type/?function/*FunctionType"] !== undefined) { $i.visitor["$type/?function/*FunctionType"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_boolean$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?boolean/*BooleanKeyword"] !== undefined) { $i.visitor["$type/?boolean/*BooleanKeyword"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?array/*ArrayType"] !== undefined) { $i.visitor["$type/?array/*ArrayType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if ($i.visitor["$type/?array/*ArrayType"] !== undefined) { $i.visitor["$type/?array/*ArrayType"].end($) }
                    })($)
                })
                break
            }
            case "any": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_any$<Annotation>,
                    ) => {
                        if ($i.visitor["$type/?any/*AnyKeyword"] !== undefined) { $i.visitor["$type/?any/*AnyKeyword"]($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_typeParameter(
        $: api.TGtypeParameter<Annotation>,
    ) {
        ((
            $: api.TNGtypeParameter$<Annotation>,
        ) => {
            if ($i.visitor["$typeParameter/*TypeParameter"] !== undefined) { $i.visitor["$typeParameter/*TypeParameter"].begin($) }
            pl.cc($.content, ($) => {
                X_identifier($)
            })
            if ($i.visitor["$typeParameter/*TypeParameter"] !== undefined) { $i.visitor["$typeParameter/*TypeParameter"].end($) }
        })($)
    }
    function X_typeSignature(
        $: api.TGtypeSignature<Annotation>,
    ) {
        switch ($[0]) {
            case "property": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_property$<Annotation>,
                    ) => {
                        if ($i.visitor["$typeSignature/?property/*PropertySignature"] !== undefined) { $i.visitor["$typeSignature/?property/*PropertySignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifierOrStringLiteral($)
                            })
                            pl.cc($["quesionToken"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    ((
                                        $: api.TNGtypeSignature_property$_quesionToken$<Annotation>,
                                    ) => {
                                        if ($i.visitor["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"] !== undefined) { $i.visitor["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"]($) }
                                    })($)
                                }
                            })
                            pl.cc($["type"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_type($)
                                }
                            })
                        })
                        if ($i.visitor["$typeSignature/?property/*PropertySignature"] !== undefined) { $i.visitor["$typeSignature/?property/*PropertySignature"].end($) }
                    })($)
                })
                break
            }
            case "method": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_method$<Annotation>,
                    ) => {
                        if ($i.visitor["$typeSignature/?method/*MethodSignature"] !== undefined) { $i.visitor["$typeSignature/?method/*MethodSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                        })
                        if ($i.visitor["$typeSignature/?method/*MethodSignature"] !== undefined) { $i.visitor["$typeSignature/?method/*MethodSignature"].end($) }
                    })($)
                })
                break
            }
            case "index": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_index$<Annotation>,
                    ) => {
                        if ($i.visitor["$typeSignature/?index/*IndexSignature"] !== undefined) { $i.visitor["$typeSignature/?index/*IndexSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["parameter"], ($) => {
                                X_parameter($)
                            })
                            pl.cc($["type"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_type($)
                                }
                            })
                        })
                        if ($i.visitor["$typeSignature/?index/*IndexSignature"] !== undefined) { $i.visitor["$typeSignature/?index/*IndexSignature"].end($) }
                    })($)
                })
                break
            }
            case "construct": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_construct$<Annotation>,
                    ) => {
                        if ($i.visitor["$typeSignature/?construct/*ConstructSignature"] !== undefined) { $i.visitor["$typeSignature/?construct/*ConstructSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                X_type($)
                            })
                        })
                        if ($i.visitor["$typeSignature/?construct/*ConstructSignature"] !== undefined) { $i.visitor["$typeSignature/?construct/*ConstructSignature"].end($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_variableDeclaration(
        $: api.TGvariableDeclaration<Annotation>,
    ) {
        ((
            $: api.TNGvariableDeclaration$<Annotation>,
        ) => {
            if ($i.visitor["$variableDeclaration/*VariableDeclaration"] !== undefined) { $i.visitor["$variableDeclaration/*VariableDeclaration"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["nameOrArrayBinding"], ($) => {
                    switch ($[0]) {
                        case "arrayBindingPattern": {
                            pl.cc($[1], ($) => {
                                ((
                                    $: api.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation>,
                                ) => {
                                    if ($i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern"] !== undefined) { $i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern"].begin($) }
                                    pl.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "bindingElement": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation>,
                                                        ) => {
                                                            if ($i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern/?bindingElement/*BindingElement"] !== undefined) { $i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern/?bindingElement/*BindingElement"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                X_identifier($)
                                                            })
                                                            if ($i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern/?bindingElement/*BindingElement"] !== undefined) { $i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern/?bindingElement/*BindingElement"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "omitted": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted$<Annotation>,
                                                        ) => {
                                                            if ($i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern/?omitted/*OmittedExpression"] !== undefined) { $i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern/?omitted/*OmittedExpression"]($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pl.au($[0])
                                            }
                                        })
                                    })
                                    if ($i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern"] !== undefined) { $i.visitor["$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern"].end($) }
                                })($)
                            })
                            break
                        }
                        case "identifier": {
                            pl.cc($[1], ($) => {
                                X_identifier($)
                            })
                            break
                        }
                        default: pl.au($[0])
                    }
                })
                pl.cc($["type"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        X_type($)
                    }
                })
                pl.cc($["expression"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        X_expression($)
                    }
                })
            })
            if ($i.visitor["$variableDeclaration/*VariableDeclaration"] !== undefined) { $i.visitor["$variableDeclaration/*VariableDeclaration"].end($) }
        })($)
    }
    function X_variableDeclarationList(
        $: api.TGvariableDeclarationList<Annotation>,
    ) {
        ((
            $: api.TNGvariableDeclarationList$<Annotation>,
        ) => {
            if ($i.visitor["$variableDeclarationList/*VariableDeclarationList"] !== undefined) { $i.visitor["$variableDeclarationList/*VariableDeclarationList"].begin($) }
            pl.cc($.content, ($) => {
                $.forEach(($) => {
                    X_variableDeclaration($)
                })
            })
            if ($i.visitor["$variableDeclarationList/*VariableDeclarationList"] !== undefined) { $i.visitor["$variableDeclarationList/*VariableDeclarationList"].end($) }
        })($)
    }
    ((
        $: api.TNroot<Annotation>,
    ) => {
        if ($i.visitor[""] !== undefined) { $i.visitor[""].begin($) }
        pl.cc($.content, ($) => {
            pl.cc($["statements"], ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            pl.cc($["endOfFile"], ($) => {
                ((
                    $: api.TNroot_endOfFile$<Annotation>,
                ) => {
                    if ($i.visitor["/.endOfFile/*EndOfFileToken"] !== undefined) { $i.visitor["/.endOfFile/*EndOfFileToken"]($) }
                })($)
            })
        })
        if ($i.visitor[""] !== undefined) { $i.visitor[""].end($) }
    })($)
}