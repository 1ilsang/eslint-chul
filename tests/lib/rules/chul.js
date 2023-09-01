/**
 * @fileoverview my plugin settings
 * @author 1ilsang
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/chul"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("chul", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "var data = getData();",
  ],

  invalid: [
    {
      code: "var data = getData123();",
      errors: [
        {
          message: "[getData123()] 함수에 숫자..?",
          type: "CallExpression",
        },
      ],
    },
  ],
});
