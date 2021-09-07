/**
 * @fileoverview Show warning when someone uses the spread operator for function arguments.
 * @author Lukas Koebis
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-argument-spread"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 9 } });
ruleTester.run("no-argument-spread", rule, {
  valid: ["Math.max(1, 2)", "f({...x})"],

  invalid: [
    {
      code: "Math.max(...array)",
      errors: [
        { message: rule.meta.messages.spreadAsArgs, type: "CallExpression" },
      ],
    },
    {
      code: "Math.max(1, ...array)",
      errors: [
        { message: rule.meta.messages.spreadAsArgs, type: "CallExpression" },
      ],
    },
  ],
});
