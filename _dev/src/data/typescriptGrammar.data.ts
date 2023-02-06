import * as pw from "pareto-core-raw"

import * as gr from "lib-generate-typesafe-ast"



export const _typeScriptGrammar: gr.TGrammar = {
    'globalValueTypes': pw.wrapRawDictionary({
        'block': ["node", {
            'name': `Block`,
            'type': ["composite", {
                'cardinality': ["array", null],
                'type': ["reference", { 'name': `statement` }]
            }],
        }],
        'expression': ["choice", {
            'options': pw.wrapRawDictionary({
                'arrayLiteral': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ArrayLiteralExpression`,
                        'type': ["composite", {
                            'cardinality': ["array", null],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'arrowFunction': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ArrowFunction`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }]
                                        }
                                    },
                                    {
                                        'name': `returnType`,
                                        'value': {
                                            'cardinality': ["optional", null],
                                            'type': ["reference", { 'name': `type` }],
                                        }
                                    },
                                    {
                                        'name': `equalsGreaterThan`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["node", {
                                                'name': `EqualsGreaterThanToken`,
                                                'type': ["leaf", { 'hasTextContent': false }],
                                            }]
                                        }
                                    },
                                    {
                                        'name': `implementation`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    "block": {
                                                        'cardinality': ["one", null],
                                                        'type': ["reference", {
                                                            'name': `block`,
                                                        }]
                                                    },
                                                    "expression": {
                                                        'cardinality': ["one", null],
                                                        'type': ["reference", { 'name': `expression` }],
                                                    },
                                                })
                                            }]
                                        }
                                    },
                                ])
                            }],
                        }]
                    }]
                },
                'binary': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `BinaryExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `leftHandSide`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `operator`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    'ampersandAmpersand': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `AmpersandAmpersandToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'barBar': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `BarBarToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'equals': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `EqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'equalsEqualsEquals': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `EqualsEqualsEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'exclamationEqualsEquals': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `ExclamationEqualsEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'greaterThan': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `GreaterThanToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }],
                                                        }]
                                                    },
                                                    'lessThan': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `LessThanToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }],
                                                        }]
                                                    },
                                                    'minus': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `MinusToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }],
                                                        }]
                                                    },
                                                    'minusEquals': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `MinusEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'plus': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `PlusToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'plusEquals': {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `PlusEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    }
                                                })
                                            }],
                                        }
                                    },
                                    {
                                        'name': `rightHandSide`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'call': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `CallExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `function`,
                                        'value': {
                                            "cardinality": ["one", null],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `typeParameters`,
                                        'value': {
                                            "cardinality": ["array", null],
                                            'type': ["reference", { 'name': `type` }],
                                        }
                                    },
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            "cardinality": ["array", null],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'conditional': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ConditionalExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `test`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `questionToken`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["node", {
                                                'name': `QuestionToken`,
                                                'type': ["leaf", { 'hasTextContent': false }]
                                            }],
                                        }
                                    },
                                    {
                                        'name': `ifExpression`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `colonToken`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["node", {
                                                'name': `ColonToken`,
                                                'type': ["leaf", { 'hasTextContent': false }],
                                            }],
                                        }
                                    },
                                    {
                                        'name': `elseExpression`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'elementAccess': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ElementAccessExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `array`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `element`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    }
                                ])
                            }],
                        }]
                    }]
                },
                'false': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `FalseKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'identifier': {
                    'cardinality': ["one", null],
                    'type': ["reference", {
                        'name': `identifier`
                    }],
                },
                'new': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `NewExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `class`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `expression`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'noSubstitutionTemplateLiteral': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `NoSubstitutionTemplateLiteral`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'numericLiteral': {
                    'cardinality': ["one", null],
                    'type': ["reference", {
                        'name': `numericLiteral`,
                    }],
                },
                'nullKeyword': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `NullKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'objectLiteral': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ObjectLiteralExpression`,
                        'type': ["composite", {
                            'cardinality': ["array", null],

                            'type': ["choice", {
                                'options': pw.wrapRawDictionary({
                                    "getAccessor": {
                                        'cardinality': ["one", null],
                                        'type': ["reference", {
                                            'name': `getAccessor`
                                        }]
                                    },
                                    "propertyAssignment": {
                                        'cardinality': ["one", null],

                                        'type': ["node", {
                                            'name': `PropertyAssignment`,
                                            'type': ["composite", {
                                                'cardinality': ["one", null],
                                                'type': ["sequence", {
                                                    'elements': pw.wrapRawArray([
                                                        {
                                                            'name': `name`,
                                                            'value': {
                                                                'cardinality': ["one", null],
                                                                'type': ["choice", {
                                                                    'options': pw.wrapRawDictionary({
                                                                        'identifier': {
                                                                            'cardinality': ["one", null],
                                                                            'type': ["reference", {
                                                                                'name': `identifier`
                                                                            }],
                                                                        },
                                                                        'numericLiteral': {
                                                                            'cardinality': ["one", null],
                                                                            'type': ["reference", {
                                                                                'name': `numericLiteral`,
                                                                            }],
                                                                        },
                                                                        'stringLiteral': {
                                                                            'cardinality': ["one", null],
                                                                            'type': ["reference", {
                                                                                'name': `stringLiteral`
                                                                            }]
                                                                        },
                                                                    })
                                                                }]
                                                            }
                                                        },
                                                        {
                                                            'name': `expression`,
                                                            'value': {
                                                                'cardinality': ["one", null],
                                                                'type': ["reference", { 'name': `expression` }],
                                                            }
                                                        },
                                                    ])
                                                }]
                                            }]
                                        }]
                                    }
                                })
                            }]
                        }],
                    }]
                },
                'parenthesizedExpression': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ParenthesizedExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'postfixUnary': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `PostfixUnaryExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'prefixUnary': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `PrefixUnaryExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'propertyAccess': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `PropertyAccessExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `object`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `property`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                ])
                            }]
                        }],
                    }]
                },
                'stringLiteral': {
                    'cardinality': ["one", null],
                    'type': ["reference", {
                        'name': `stringLiteral`
                    }]
                },
                'template': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `TemplateExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `head`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["node", {
                                                'name': `TemplateHead`,
                                                'type': ["leaf", { 'hasTextContent': true }],
                                            }]
                                        }
                                    },
                                    {
                                        'name': `spans`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["node", {
                                                'name': `TemplateSpan`,
                                                'type': ["composite", {
                                                    'cardinality': ["one", null],
                                                    'type': ["sequence", {
                                                        'elements': pw.wrapRawArray([
                                                            {
                                                                'name': `expression`,
                                                                'value': {
                                                                    'cardinality': ["one", null],
                                                                    'type': ["reference", { 'name': `expression` }],
                                                                }
                                                            },
                                                            {
                                                                'name': `x`,
                                                                'value': {
                                                                    'cardinality': ["one", null],
                                                                    'type': ["choice", {
                                                                        'options': pw.wrapRawDictionary({
                                                                            'middle': {
                                                                                'cardinality': ["one", null],
                                                                                'type': ["node", {
                                                                                    'name': `TemplateMiddle`,
                                                                                    'type': ["leaf", { 'hasTextContent': true }],
                                                                                }],
                                                                            },
                                                                            'tail': {
                                                                                'cardinality': ["one", null],
                                                                                'type': ["node", {
                                                                                    'name': `TemplateTail`,
                                                                                    'type': ["leaf", { 'hasTextContent': true }]
                                                                                }],
                                                                            }
                                                                        })
                                                                    }],
                                                                }
                                                            },
                                                        ])
                                                    }]
                                                }]
                                            }]
                                        }
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'true': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `TrueKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
            })
        }],
        'functionDefinition': ["sequence", {
            'elements': pw.wrapRawArray([
                {
                    'name': `typeParameters`,
                    'value': {
                        'cardinality': ["array", null],
                        'type': ["reference", {
                            'name': `typeParameter`
                        }]
                    },
                },
                {
                    'name': `parameters`,
                    'value': {
                        'cardinality': ["array", null],
                        'type': ["reference", {
                            'name': `parameter`
                        }]
                    },
                },
                {
                    'name': `returnType`,
                    'value': {
                        'cardinality': ["optional", null],
                        'type': ["reference", { 'name': `type` }],
                    },
                },
            ])
        }],
        'getAccessor': ["node", {
            'name': `GetAccessor`,
            'type': ["composite", {
                'cardinality': ["one", null],
                'type': ["sequence", {
                    'elements': pw.wrapRawArray([
                        {
                            'name': `name`,
                            'value': {
                                'cardinality': ["one", null],
                                'type': ["reference", {
                                    'name': `identifier`,
                                }]
                            }
                        },
                        {
                            'name': `block`,
                            'value': {
                                'cardinality': ["one", null],
                                'type': ["reference", {
                                    'name': `block`,
                                }]
                            }
                        }
                    ])
                }]
            }]
        }],
        'identifier': ["node", {
            'name': `Identifier`,
            'type': ["leaf", { 'hasTextContent': true }]
        }],
        'identifierOrStringLiteral': ["choice", {
            'options': pw.wrapRawDictionary({
                'identifier': {
                    'cardinality': ["one", null],
                    'type': ["reference", {
                        'name': `identifier`
                    }],
                },
                'stringLiteral': {
                    'cardinality': ["one", null],
                    'type': ["reference", {
                        'name': `stringLiteral`
                    }]
                },
            })
        }],
        'modifier': ["choice", {
            //AbstractKeyword | AsyncKeyword | ConstKeyword | DeclareKeyword | DefaultKeyword | ExportKeyword | PrivateKeyword | ProtectedKeyword | PublicKeyword | OverrideKeyword | ReadonlyKeyword | StaticKeyword;
            'options': pw.wrapRawDictionary({
                'declare': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `DeclareKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'export': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ExportKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'readonly': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ReadonlyKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
            })
        }],
        'numericLiteral': ["node", {
            'name': `NumericLiteral`,
            'type': ["leaf", { 'hasTextContent': true }],
        }],
        'parameter': ["node", {
            'name': `Parameter`,
            'type': ["composite", {
                'cardinality': ["one", null],
                'type': ["sequence", {
                    'elements': pw.wrapRawArray([
                        {
                            'name': `name`,
                            'value': {
                                'cardinality': ["one", null],
                                'type': ["reference", {
                                    'name': `identifier`
                                }],
                            }
                        },
                        {
                            'name': `questionToken`,
                            'value': {
                                'cardinality': ["optional", null],
                                'type': ["node", {
                                    'name': `QuestionToken`,
                                    'type': ["leaf", { 'hasTextContent': false }],
                                }]
                            }
                        },
                        {
                            'name': `type`,
                            'value': {
                                'cardinality': ["optional", null],
                                'type': ["reference", { 'name': `type` }],
                            }
                        }
                    ])
                }]
            }]
        }],
        'statement': ["choice", {
            'options': pw.wrapRawDictionary({
                'block': {
                    'cardinality': ["one", null],
                    'type': ["reference", {
                        'name': `block`
                    }]
                },
                'break': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `BreakStatement`,
                        'type': ["composite", {
                            'cardinality': ["optional", null],
                            'type': ["reference", {
                                'name': `identifier`
                            }],
                        }],
                    }]
                },
                'class': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ClassDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `heritageClause`,
                                        'value': {
                                            'cardinality': ["optional", null],
                                            'type': ["node", {
                                                'name': `HeritageClause`,
                                                'type': ["composite", {
                                                    'cardinality': ["array", null],
                                                    'type': ["node", {
                                                        'name': `ExpressionWithTypeArguments`,
                                                        'type': ["composite", {
                                                            'cardinality': ["one", null],
                                                            'type': ["sequence", {
                                                                'elements': pw.wrapRawArray([
                                                                    {
                                                                        'name': `expression`,
                                                                        'value': {
                                                                            'cardinality': ["one", null],
                                                                            'type': ["reference", {
                                                                                'name': `expression`
                                                                            }]

                                                                        }
                                                                    },
                                                                    {
                                                                        'name': `typeArguments`,
                                                                        'value': {
                                                                            'cardinality': ["array", null],
                                                                            'type': ["reference", {
                                                                                'name': `type`
                                                                            }]

                                                                        }
                                                                    }
                                                                ])
                                                            }]
                                                        }]
                                                    }]
                                                }]
                                            }]
                                        }
                                    },
                                    {
                                        'name': `members`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    "getAccessor": {
                                                        'cardinality': ["one", null],
                                                        'type': ["reference", { 'name': `getAccessor` }]
                                                    }
                                                })
                                            }]
                                        }
                                    },
                                ])
                            }],
                        }],
                    }]
                },
                'export': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ExportDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["reference", {
                                'name': `stringLiteral`
                            }],
                        }]
                    }]
                },
                'expression': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ExpressionStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["reference", { 'name': `expression` }]
                        }],
                    }]
                },
                'for': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ForStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `initializer`,
                                        'value': {
                                            "cardinality": ["one", null],
                                            'type': ["reference", {
                                                'name': `variableDeclarationList`
                                            }]
                                        }
                                    },
                                    {
                                        'name': `condition`,
                                        'value': {
                                            "cardinality": ["one", null],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `incrementer`,
                                        'value': {
                                            "cardinality": ["one", null],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `block`,
                                        'value': {
                                            "cardinality": ["one", null],
                                            'type': ["reference", {
                                                'name': `block`,
                                            }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'function': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `FunctionDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        },
                                    },
                                    {
                                        'name': `definition`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `functionDefinition`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `block`,
                                        'value': {
                                            'cardinality': ["optional", null],
                                            'type': ["reference", {
                                                'name': `block`
                                            }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'if': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `IfStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `expression`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        },
                                    },
                                    {
                                        'name': `thenStatement`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `statement` }],
                                        },
                                    },
                                    {
                                        'name': `elseStatement`,
                                        'value': {
                                            'cardinality': ["optional", null],
                                            'type': ["reference", { 'name': `statement` }],
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'import': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ImportDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `clause`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["node", {
                                                'name': `ImportClause`,
                                                'type': ["composite", {
                                                    'cardinality': ["one", null],
                                                    'type': ["choice", {
                                                        'options': pw.wrapRawDictionary({
                                                            'namespace': {
                                                                'cardinality': ["one", null],
                                                                'type': ["node", {
                                                                    'name': `NamespaceImport`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["one", null],
                                                                        'type': ["reference", {
                                                                            'name': `identifier`
                                                                        }],
                                                                    }],
                                                                }]
                                                            },
                                                            'named': {
                                                                'cardinality': ["one", null],
                                                                'type': ["node", {
                                                                    'name': `NamedImports`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["array", null],
                                                                        'type': ["node", {
                                                                            'name': `ImportSpecifier`,
                                                                            'type': ["composite", {
                                                                                'cardinality': ["one", null],
                                                                                'type': ["sequence", {
                                                                                    'elements': pw.wrapRawArray([
                                                                                        {
                                                                                            'name': `name`,
                                                                                            'value': {
                                                                                                'cardinality': ["one", null],
                                                                                                'type': ["reference", {
                                                                                                    'name': `identifier`
                                                                                                }],
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            'name': `as`,
                                                                                            'value': {
                                                                                                'cardinality': ["optional", null],
                                                                                                'type': ["reference", {
                                                                                                    'name': `identifier`
                                                                                                }],
                                                                                            }
                                                                                        },
                                                                                    ])
                                                                                }]
                                                                            }]
                                                                        }]
                                                                    }]
                                                                }]
                                                            }
                                                        })
                                                    }]
                                                }]
                                            }]
                                        }
                                    },
                                    {
                                        'name': `file`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `stringLiteral`
                                            }],
                                        }
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'interface': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `InterfaceDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `typeParameters`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", {
                                                'name': `typeParameter`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `signature`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", { 'name': `typeSignature` }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'labeled': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `LabeledStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `label`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `statement`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `statement` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'return': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ReturnStatement`,
                        'type': ["composite", {
                            'cardinality': ["optional", null],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'switch': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `SwitchStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `expression`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `caseBlock`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["node", {
                                                'name': `CaseBlock`,
                                                'type': ["composite", {
                                                    'cardinality': ["array", null],
                                                    'type': ["choice", {
                                                        'options': pw.wrapRawDictionary({
                                                            "case": {
                                                                'cardinality': ["one", null],
                                                                'type': ["node", {
                                                                    'name': `CaseClause`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["one", null],
                                                                        'type': ["sequence", {
                                                                            'elements': pw.wrapRawArray([
                                                                                {
                                                                                    'name': `case`,
                                                                                    'value': {
                                                                                        'cardinality': ["one", null],
                                                                                        'type': ["reference", { 'name': `expression` }]
                                                                                    }
                                                                                },
                                                                                {
                                                                                    'name': `statements`,
                                                                                    'value': {
                                                                                        'cardinality': ["array", null],
                                                                                        'type': ["reference", { 'name': `statement` }]
                                                                                    },
                                                                                }
                                                                            ])
                                                                        }]
                                                                    }]
                                                                }]
                                                            },
                                                            "default": {
                                                                'cardinality': ["one", null],
                                                                'type': ["node", {
                                                                    'name': `DefaultClause`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["array", null],
                                                                        'type': ["reference", { 'name': `statement` }]
                                                                    }]
                                                                }]
                                                            },
                                                        })
                                                    }]
                                                }]
                                            }]
                                        }
                                    },
                                ])
                            }],
                        }]
                    }]
                },
                'throw': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ThrowStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["reference", { 'name': `expression` }],
                        }]
                    }]
                },
                'try': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `TryStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `block`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `block`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `catchClause`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["node", {
                                                'name': `CatchClause`,
                                                'type': ["composite", {
                                                    'cardinality': ["one", null],
                                                    'type': ["sequence", {
                                                        'elements': pw.wrapRawArray([
                                                            {
                                                                'name': `variable`,
                                                                'value': {
                                                                    'cardinality': ["one", null],
                                                                    'type': ["reference", {
                                                                        'name': `variableDeclaration`
                                                                    }]
                                                                }
                                                            },
                                                            {
                                                                'name': `block`,
                                                                'value': {
                                                                    'cardinality': ["one", null],
                                                                    'type': ["reference", {
                                                                        'name': `block`
                                                                    }]
                                                                }
                                                            },
                                                        ])
                                                    }]
                                                }]
                                            }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'typeAlias': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `TypeAliasDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `typeParameters`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", {
                                                'name': `typeParameter`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `type`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'variable': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `VariableStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `variableDeclarationList`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `variableDeclarationList`
                                            }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'while': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `WhileStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `condition`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `expression` }],
                                        },
                                    },
                                    {
                                        'name': `block`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `block`
                                            }],
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
            })
        }],
        'stringLiteral': ["node", {
            'name': `StringLiteral`,
            'type': ["leaf", { 'hasTextContent': true }]
        }],
        'type': ["choice", {
            'options': pw.wrapRawDictionary({
                'any': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `AnyKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'array': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ArrayType`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["reference", { 'name': `type` }],
                        }]
                    }]
                },
                'boolean': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `BooleanKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'function': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `FunctionType`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `returnType`,
                                        'value': {
                                            'cardinality': ["optional", null],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'literal': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `LiteralType`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["choice", {
                                'options': pw.wrapRawDictionary({
                                    'null': {
                                        'cardinality': ["one", null],
                                        'type': ["node", {
                                            'name': `NullKeyword`,
                                            'type': ["leaf", { 'hasTextContent': false }],
                                        }]
                                    },
                                    'string': {
                                        'cardinality': ["one", null],
                                        'type': ["reference", {
                                            'name': `stringLiteral`
                                        }],
                                    },
                                })
                            }]
                        }]
                    }]
                },
                'parenthesized': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ParenthesizedType`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'never': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `NeverKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'number': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `NumberKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'optional': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `OptionalType`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'tuple': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `TupleType`,
                        'type': ["composite", {
                            'cardinality': ["array", null],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'typeLiteral': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `TypeLiteral`,
                        'type': ["composite", {
                            'cardinality': ["array", null],
                            'type': ["reference", { 'name': `typeSignature` }],
                        }],
                    }]
                },
                'string': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `StringKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'typeReference': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `TypeReference`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `x`,
                                        'value': {
                                            "cardinality": ["one", null],
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    "identifier": {
                                                        'cardinality': ["one", null],
                                                        'type': ["reference", {
                                                            'name': `identifier`
                                                        }],
                                                    },
                                                    "qualifiedName": {
                                                        'cardinality': ["one", null],
                                                        'type': ["node", {
                                                            'name': `QualifiedName`,
                                                            'type': ["composite", {
                                                                'cardinality': ["one", null],
                                                                'type': ["sequence", {
                                                                    'elements': pw.wrapRawArray([
                                                                        {
                                                                            'name': `context`,
                                                                            'value': {
                                                                                'cardinality': ["one", null],
                                                                                'type': ["reference", {
                                                                                    'name': `identifier`
                                                                                }],
                                                                            }
                                                                        },
                                                                        {
                                                                            'name': `type`,
                                                                            'value': {
                                                                                'cardinality': ["one", null],
                                                                                'type': ["reference", {
                                                                                    'name': `identifier`
                                                                                }],
                                                                            }
                                                                        },
                                                                    ])
                                                                }],
                                                            }]
                                                        }]
                                                    }
                                                })
                                            }]
                                        }
                                    },
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            "cardinality": ["array", null],
                                            'type': ["reference", { 'name': `type` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'undefined': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `UndefinedKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'union': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `UnionType`,
                        'type': ["composite", {
                            'cardinality': ["array", null],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'void': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `VoidKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
            })
        }],
        'typeParameter': ["node", {
            'name': `TypeParameter`,
            'type': ["composite", {
                'cardinality': ["one", null],
                'type': ["reference", {
                    'name': `identifier`
                }],
            }]
        }],
        'typeSignature': ["choice", {
            'options': pw.wrapRawDictionary({
                'construct': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `ConstructSignature`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }]
                                        }
                                    },
                                    {
                                        'name': `returnType`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `type`
                                            }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'index': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `IndexSignature`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `parameter`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `type`,
                                        'value': {
                                            'cardinality': ["optional", null],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'method': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `MethodSignature`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `definition`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `functionDefinition`
                                            }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'property': {
                    'cardinality': ["one", null],
                    'type': ["node", {
                        'name': `PropertySignature`,
                        'type': ["composite", {
                            'cardinality': ["one", null],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", null],
                                            'type': ["reference", { 'name': `modifier` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", null],
                                            'type': ["reference", { 'name': `identifierOrStringLiteral` }],
                                        }
                                    },
                                    {
                                        'name': `quesionToken`,
                                        'value': {
                                            'cardinality': ["optional", null],
                                            'type': ["node", {
                                                'name': `QuestionToken`,
                                                'type': ["leaf", { 'hasTextContent': false }],
                                            }],
                                        }
                                    },
                                    {
                                        'name': `type`,
                                        'value': {
                                            'cardinality': ["optional", null],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    }
                                ])
                            }]
                        }]
                    }]
                },
            })
        }],
        'variableDeclaration': ["node", {
            'name': `VariableDeclaration`,
            'type': ["composite", {
                'cardinality': ["one", null],
                'type': ["sequence", {
                    'elements': pw.wrapRawArray([
                        {
                            'name': `nameOrArrayBinding`,
                            'value': {
                                'cardinality': ["one", null],
                                'type': ["choice", {
                                    'options': pw.wrapRawDictionary({
                                        "identifier": {
                                            'cardinality': ["one", null],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        },
                                        "arrayBindingPattern": {
                                            'cardinality': ["one", null],
                                            'type': ["node", {
                                                'name': `ArrayBindingPattern`,
                                                'type': ["composite", {
                                                    'cardinality': ["array", null],
                                                    'type': ["choice", {
                                                        'options': pw.wrapRawDictionary({
                                                            "omitted": {
                                                                'cardinality': ["one", null],
                                                                'type': ["node", {
                                                                    'name': `OmittedExpression`,
                                                                    'type': ["leaf", { 'hasTextContent': false }]
                                                                }]
                                                            },
                                                            "bindingElement": {
                                                                'cardinality': ["one", null],
                                                                'type': ["node", {
                                                                    'name': `BindingElement`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["one", null],
                                                                        'type': ["reference", {
                                                                            'name': `identifier`
                                                                        }]
                                                                    }]
                                                                }]
                                                            }
                                                        })
                                                    }]
                                                }]
                                            }],
                                        }
                                    })
                                }]
                            },
                        },
                        {
                            'name': `type`,
                            'value': {
                                'cardinality': ["optional", null],
                                'type': ["reference", { 'name': `type` }],
                            },
                        },
                        {
                            'name': `expression`,
                            'value': {
                                'cardinality': ["optional", null],
                                'type': ["reference", { 'name': `expression` }],
                            },
                        },
                    ])
                }]
            }]
        }],
        'variableDeclarationList': ["node", {
            'name': `VariableDeclarationList`,
            'type': ["composite", {
                'cardinality': ["array", null],
                'type': ["reference", {
                    'name': `variableDeclaration`
                }]
            }],
        }]
    }),
    'root': {
        'name': `SourceFile`,
        'type': ["composite", {
            'cardinality': ["one", null],
            'type': ["sequence", {
                'elements': pw.wrapRawArray([
                    {
                        'name': `statements`,
                        'value': {
                            'cardinality': ["array", null],
                            'type': ["reference", { 'name': `statement` }]
                        },
                    },
                    {
                        'name': `endOfFile`,
                        'value': {
                            'cardinality': ["one", null],
                            'type': ["node", {
                                'name': `EndOfFileToken`,
                                'type': ["leaf", { 'hasTextContent': false }]
                            }]
                        }
                    }
                ])
            }]
        }]
    }
}