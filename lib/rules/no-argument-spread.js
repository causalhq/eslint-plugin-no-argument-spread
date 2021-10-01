/**
 * @fileoverview Show warning when someone uses the spread operator for function arguments.
 * @author Lukas Koebis
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description:
        "Show warning when someone uses the spread operator for function arguments.",
      category: "Fill me in",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      spreadAsArgs:
        "Don't use the spread operator for arguments. It can lead to a stack overflow.",
    },
  },

  create(context) {
    // variables should be defined here
    const sourceCode = context.getSourceCode();

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      CallExpression(node) {
        if (node.arguments.some((arg) => arg.type === "SpreadElement")) {
          context.report({
            node,
            messageId: "spreadAsArgs",
          });
        }
      },
    };
  },
};
