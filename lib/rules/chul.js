/**
 * @fileoverview my plugin settings
 * @author 1ilsang
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "my plugin settings",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: true, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      CallExpression(node) {
        const { callee } = node;

        if (/[0-9]/.test(callee.name)) {
          context.report({
            node,
            data: { wrongFunc: callee.name },
            message: `[{{wrongFunc}}()] 함수에 숫자..?`,
            fix: (fixer) =>
              fixer.replaceText(callee, callee.name.replaceAll(/[0-9]/g, "")),
          });
        }
      },
    };
  },
};
