"use strict";
// import { Node } from "ts-morph";
// import { IVisitor } from "../../../../pub"
// export function createFoo(
//     write: (str: string) => void
// ): IVisitor<Node> {
//     return {
//         "Gblock$": {
//             begin: ($) => { write("Gblock$ begin") },
//             end: ($) => { write("Gblock$ end") },
//         },
//         "Gexpression_arrayLiteral$": {
//             begin: ($) => { write("Gexpression_arrayLiteral$ begin") },
//             end: ($) => { write("Gexpression_arrayLiteral$ end") },
//         },
//         "Gexpression_arrowFunction$_equalsGreaterThan$": ($) => { write("Gexpression_arrowFunction$_equalsGreaterThan$") },
//         "Gexpression_arrowFunction$": {
//             begin: ($) => { write("Gexpression_arrowFunction$ begin") },
//             end: ($) => { write("Gexpression_arrowFunction$ end") },
//         },
//         "Gexpression_binary$_operator_ampersandAmpersand$": ($) => { write("Gexpression_binary$_operator_ampersandAmpersand$") },
//         "Gexpression_binary$_operator_barBar$": ($) => { write("Gexpression_binary$_operator_barBar$") },
//         "Gexpression_binary$_operator_equals$": ($) => { write("Gexpression_binary$_operator_equals$") },
//         "Gexpression_binary$_operator_equalsEqualsEquals$": ($) => { write("Gexpression_binary$_operator_equalsEqualsEquals$") },
//         "Gexpression_binary$_operator_exclamationEqualsEquals$": ($) => { write("Gexpression_binary$_operator_exclamationEqualsEquals$") },
//         "Gexpression_binary$_operator_greaterThan$": ($) => { write("Gexpression_binary$_operator_greaterThan$") },
//         "Gexpression_binary$_operator_lessThan$": ($) => { write("Gexpression_binary$_operator_lessThan$") },
//         "Gexpression_binary$_operator_minus$": ($) => { write("Gexpression_binary$_operator_minus$") },
//         "Gexpression_binary$_operator_minusEquals$": ($) => { write("Gexpression_binary$_operator_minusEquals$") },
//         "Gexpression_binary$_operator_plus$": ($) => { write("Gexpression_binary$_operator_plus$") },
//         "Gexpression_binary$_operator_plusEquals$": ($) => { write("Gexpression_binary$_operator_plusEquals$") },
//         "Gexpression_binary$": {
//             begin: ($) => { write("Gexpression_binary$ begin") },
//             end: ($) => { write("Gexpression_binary$ end") },
//         },
//         "Gexpression_call$": {
//             begin: ($) => { write("Gexpression_call$ begin") },
//             end: ($) => { write("Gexpression_call$ end") },
//         },
//         "Gexpression_conditional$_questionToken$": ($) => { write("Gexpression_conditional$_questionToken$") },
//         "Gexpression_conditional$_colonToken$": ($) => { write("Gexpression_conditional$_colonToken$") },
//         "Gexpression_conditional$": {
//             begin: ($) => { write("Gexpression_conditional$ begin") },
//             end: ($) => { write("Gexpression_conditional$ end") },
//         },
//         "Gexpression_elementAccess$": {
//             begin: ($) => { write("Gexpression_elementAccess$ begin") },
//             end: ($) => { write("Gexpression_elementAccess$ end") },
//         },
//         "Gexpression_false$": ($) => { write("Gexpression_false$") },
//         "Gexpression_new$": {
//             begin: ($) => { write("Gexpression_new$ begin") },
//             end: ($) => { write("Gexpression_new$ end") },
//         },
//         "Gexpression_noSubstitutionTemplateLiteral$": ($) => { write("Gexpression_noSubstitutionTemplateLiteral$") },
//         "Gexpression_nullKeyword$": ($) => { write("Gexpression_nullKeyword$") },
//         "Gexpression_objectLiteral$_propertyAssignment$": {
//             begin: ($) => { write("Gexpression_objectLiteral$_propertyAssignment$ begin") },
//             end: ($) => { write("Gexpression_objectLiteral$_propertyAssignment$ end") },
//         },
//         "Gexpression_objectLiteral$": {
//             begin: ($) => { write("Gexpression_objectLiteral$ begin") },
//             end: ($) => { write("Gexpression_objectLiteral$ end") },
//         },
//         "Gexpression_parenthesizedExpression$": {
//             begin: ($) => { write("Gexpression_parenthesizedExpression$ begin") },
//             end: ($) => { write("Gexpression_parenthesizedExpression$ end") },
//         },
//         "Gexpression_postfixUnary$": {
//             begin: ($) => { write("Gexpression_postfixUnary$ begin") },
//             end: ($) => { write("Gexpression_postfixUnary$ end") },
//         },
//         "Gexpression_prefixUnary$": {
//             begin: ($) => { write("Gexpression_prefixUnary$ begin") },
//             end: ($) => { write("Gexpression_prefixUnary$ end") },
//         },
//         "Gexpression_propertyAccess$": {
//             begin: ($) => { write("Gexpression_propertyAccess$ begin") },
//             end: ($) => { write("Gexpression_propertyAccess$ end") },
//         },
//         "Gexpression_template$_head$": ($) => { write("Gexpression_template$_head$") },
//         "Gexpression_template$_spans$_x_middle$": ($) => { write("Gexpression_template$_spans$_x_middle$") },
//         "Gexpression_template$_spans$_x_tail$": ($) => { write("Gexpression_template$_spans$_x_tail$") },
//         "Gexpression_template$_spans$": {
//             begin: ($) => { write("Gexpression_template$_spans$ begin") },
//             end: ($) => { write("Gexpression_template$_spans$ end") },
//         },
//         "Gexpression_template$": {
//             begin: ($) => { write("Gexpression_template$ begin") },
//             end: ($) => { write("Gexpression_template$ end") },
//         },
//         "Gexpression_true$": ($) => { write("Gexpression_true$") },
//         "GgetAccessor$": {
//             begin: ($) => { write("GgetAccessor$ begin") },
//             end: ($) => { write("GgetAccessor$ end") },
//         },
//         "Gidentifier$": ($) => { write("Gidentifier$") },
//         "Gmodifier_declare$": ($) => { write("Gmodifier_declare$") },
//         "Gmodifier_export$": ($) => { write("Gmodifier_export$") },
//         "Gmodifier_readonly$": ($) => { write("Gmodifier_readonly$") },
//         "GnumericLiteral$": ($) => { write("GnumericLiteral$") },
//         "Gparameter$_questionToken$": ($) => { write("Gparameter$_questionToken$") },
//         "Gparameter$": {
//             begin: ($) => { write("Gparameter$ begin") },
//             end: ($) => { write("Gparameter$ end") },
//         },
//         "Gstatement_break$": {
//             begin: ($) => { write("Gstatement_break$ begin") },
//             end: ($) => { write("Gstatement_break$ end") },
//         },
//         "Gstatement_class$_heritageClause$$": {
//             begin: ($) => { write("Gstatement_class$_heritageClause$$ begin") },
//             end: ($) => { write("Gstatement_class$_heritageClause$$ end") },
//         },
//         "Gstatement_class$_heritageClause$": {
//             begin: ($) => { write("Gstatement_class$_heritageClause$ begin") },
//             end: ($) => { write("Gstatement_class$_heritageClause$ end") },
//         },
//         "Gstatement_class$": {
//             begin: ($) => { write("Gstatement_class$ begin") },
//             end: ($) => { write("Gstatement_class$ end") },
//         },
//         "Gstatement_export$": {
//             begin: ($) => { write("Gstatement_export$ begin") },
//             end: ($) => { write("Gstatement_export$ end") },
//         },
//         "Gstatement_expression$": {
//             begin: ($) => { write("Gstatement_expression$ begin") },
//             end: ($) => { write("Gstatement_expression$ end") },
//         },
//         "Gstatement_for$": {
//             begin: ($) => { write("Gstatement_for$ begin") },
//             end: ($) => { write("Gstatement_for$ end") },
//         },
//         "Gstatement_function$": {
//             begin: ($) => { write("Gstatement_function$ begin") },
//             end: ($) => { write("Gstatement_function$ end") },
//         },
//         "Gstatement_if$": {
//             begin: ($) => { write("Gstatement_if$ begin") },
//             end: ($) => { write("Gstatement_if$ end") },
//         },
//         "Gstatement_import$_clause$_namespace$": {
//             begin: ($) => { write("Gstatement_import$_clause$_namespace$ begin") },
//             end: ($) => { write("Gstatement_import$_clause$_namespace$ end") },
//         },
//         "Gstatement_import$_clause$_named$$": {
//             begin: ($) => { write("Gstatement_import$_clause$_named$$ begin") },
//             end: ($) => { write("Gstatement_import$_clause$_named$$ end") },
//         },
//         "Gstatement_import$_clause$_named$": {
//             begin: ($) => { write("Gstatement_import$_clause$_named$ begin") },
//             end: ($) => { write("Gstatement_import$_clause$_named$ end") },
//         },
//         "Gstatement_import$_clause$": {
//             begin: ($) => { write("Gstatement_import$_clause$ begin") },
//             end: ($) => { write("Gstatement_import$_clause$ end") },
//         },
//         "Gstatement_import$": {
//             begin: ($) => { write("Gstatement_import$ begin") },
//             end: ($) => { write("Gstatement_import$ end") },
//         },
//         "Gstatement_interface$": {
//             begin: ($) => { write("Gstatement_interface$ begin") },
//             end: ($) => { write("Gstatement_interface$ end") },
//         },
//         "Gstatement_labeled$": {
//             begin: ($) => { write("Gstatement_labeled$ begin") },
//             end: ($) => { write("Gstatement_labeled$ end") },
//         },
//         "Gstatement_return$": {
//             begin: ($) => { write("Gstatement_return$ begin") },
//             end: ($) => { write("Gstatement_return$ end") },
//         },
//         "Gstatement_switch$_caseBlock$_case$": {
//             begin: ($) => { write("Gstatement_switch$_caseBlock$_case$ begin") },
//             end: ($) => { write("Gstatement_switch$_caseBlock$_case$ end") },
//         },
//         "Gstatement_switch$_caseBlock$_default$": {
//             begin: ($) => { write("Gstatement_switch$_caseBlock$_default$ begin") },
//             end: ($) => { write("Gstatement_switch$_caseBlock$_default$ end") },
//         },
//         "Gstatement_switch$_caseBlock$": {
//             begin: ($) => { write("Gstatement_switch$_caseBlock$ begin") },
//             end: ($) => { write("Gstatement_switch$_caseBlock$ end") },
//         },
//         "Gstatement_switch$": {
//             begin: ($) => { write("Gstatement_switch$ begin") },
//             end: ($) => { write("Gstatement_switch$ end") },
//         },
//         "Gstatement_throw$": {
//             begin: ($) => { write("Gstatement_throw$ begin") },
//             end: ($) => { write("Gstatement_throw$ end") },
//         },
//         "Gstatement_try$_catchClause$": {
//             begin: ($) => { write("Gstatement_try$_catchClause$ begin") },
//             end: ($) => { write("Gstatement_try$_catchClause$ end") },
//         },
//         "Gstatement_try$": {
//             begin: ($) => { write("Gstatement_try$ begin") },
//             end: ($) => { write("Gstatement_try$ end") },
//         },
//         "Gstatement_typeAlias$": {
//             begin: ($) => { write("Gstatement_typeAlias$ begin") },
//             end: ($) => { write("Gstatement_typeAlias$ end") },
//         },
//         "Gstatement_variable$": {
//             begin: ($) => { write("Gstatement_variable$ begin") },
//             end: ($) => { write("Gstatement_variable$ end") },
//         },
//         "Gstatement_while$": {
//             begin: ($) => { write("Gstatement_while$ begin") },
//             end: ($) => { write("Gstatement_while$ end") },
//         },
//         "GstringLiteral$": ($) => { write("GstringLiteral$") },
//         "Gtype_any$": ($) => { write("Gtype_any$") },
//         "Gtype_array$": {
//             begin: ($) => { write("Gtype_array$ begin") },
//             end: ($) => { write("Gtype_array$ end") },
//         },
//         "Gtype_boolean$": ($) => { write("Gtype_boolean$") },
//         "Gtype_function$": {
//             begin: ($) => { write("Gtype_function$ begin") },
//             end: ($) => { write("Gtype_function$ end") },
//         },
//         "Gtype_literal$_null$": ($) => { write("Gtype_literal$_null$") },
//         "Gtype_literal$": {
//             begin: ($) => { write("Gtype_literal$ begin") },
//             end: ($) => { write("Gtype_literal$ end") },
//         },
//         "Gtype_parenthesized$": {
//             begin: ($) => { write("Gtype_parenthesized$ begin") },
//             end: ($) => { write("Gtype_parenthesized$ end") },
//         },
//         "Gtype_never$": ($) => { write("Gtype_never$") },
//         "Gtype_number$": ($) => { write("Gtype_number$") },
//         "Gtype_optional$": {
//             begin: ($) => { write("Gtype_optional$ begin") },
//             end: ($) => { write("Gtype_optional$ end") },
//         },
//         "Gtype_tuple$": {
//             begin: ($) => { write("Gtype_tuple$ begin") },
//             end: ($) => { write("Gtype_tuple$ end") },
//         },
//         "Gtype_typeLiteral$": {
//             begin: ($) => { write("Gtype_typeLiteral$ begin") },
//             end: ($) => { write("Gtype_typeLiteral$ end") },
//         },
//         "Gtype_string$": ($) => { write("Gtype_string$") },
//         "Gtype_typeReference$_x_qualifiedName$": {
//             begin: ($) => { write("Gtype_typeReference$_x_qualifiedName$ begin") },
//             end: ($) => { write("Gtype_typeReference$_x_qualifiedName$ end") },
//         },
//         "Gtype_typeReference$": {
//             begin: ($) => { write("Gtype_typeReference$ begin") },
//             end: ($) => { write("Gtype_typeReference$ end") },
//         },
//         "Gtype_undefined$": ($) => { write("Gtype_undefined$") },
//         "Gtype_union$": {
//             begin: ($) => { write("Gtype_union$ begin") },
//             end: ($) => { write("Gtype_union$ end") },
//         },
//         "Gtype_void$": ($) => { write("Gtype_void$") },
//         "GtypeParameter$": {
//             begin: ($) => { write("GtypeParameter$ begin") },
//             end: ($) => { write("GtypeParameter$ end") },
//         },
//         "GtypeSignature_construct$": {
//             begin: ($) => { write("GtypeSignature_construct$ begin") },
//             end: ($) => { write("GtypeSignature_construct$ end") },
//         },
//         "GtypeSignature_index$": {
//             begin: ($) => { write("GtypeSignature_index$ begin") },
//             end: ($) => { write("GtypeSignature_index$ end") },
//         },
//         "GtypeSignature_method$": {
//             begin: ($) => { write("GtypeSignature_method$ begin") },
//             end: ($) => { write("GtypeSignature_method$ end") },
//         },
//         "GtypeSignature_property$_quesionToken$": ($) => { write("GtypeSignature_property$_quesionToken$") },
//         "GtypeSignature_property$": {
//             begin: ($) => { write("GtypeSignature_property$ begin") },
//             end: ($) => { write("GtypeSignature_property$ end") },
//         },
//         "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted$": ($) => { write("GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted$") },
//         "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$": {
//             begin: ($) => { write("GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$ begin") },
//             end: ($) => { write("GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$ end") },
//         },
//         "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$": {
//             begin: ($) => { write("GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$ begin") },
//             end: ($) => { write("GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$ end") },
//         },
//         "GvariableDeclaration$": {
//             begin: ($) => { write("GvariableDeclaration$ begin") },
//             end: ($) => { write("GvariableDeclaration$ end") },
//         },
//         "GvariableDeclarationList$": {
//             begin: ($) => { write("GvariableDeclarationList$ begin") },
//             end: ($) => { write("GvariableDeclarationList$ end") },
//         },
//         "root_endOfFile$": ($) => { write("root_endOfFile$") },
//         "root": {
//             begin: ($) => { write("root begin") },
//             end: ($) => { write("root end") },
//         },
//     }
// }
