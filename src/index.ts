/**
 * @fileoverview This contains formatting rules for jest in jest
 * @author Dan
 */

import {
  Config,
  createRule,
  PaddingType,
  StatementType,
} from './rules/padding';

const paddingConfigs: { [name: string]: Config[] } = {
  afterAll: [
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.AfterAllToken,
    },
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.AfterAllToken,
      nextStatementType: StatementType.Any,
    },
  ],
  afterEach: [
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.AfterEachToken,
    },
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.AfterEachToken,
      nextStatementType: StatementType.Any,
    },
  ],
  beforeAll: [
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.BeforeAllToken,
    },
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.BeforeAllToken,
      nextStatementType: StatementType.Any,
    },
  ],
  beforeEach: [
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.BeforeEachToken,
    },
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.BeforeEachToken,
      nextStatementType: StatementType.Any,
    },
  ],
  describe: [
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: [
        StatementType.DescribeToken,
        StatementType.FdescribeToken,
        StatementType.XdescribeToken,
      ],
    },
    {
      paddingType: PaddingType.Always,
      prevStatementType: [
        StatementType.DescribeToken,
        StatementType.FdescribeToken,
        StatementType.XdescribeToken,
      ],
      nextStatementType: StatementType.Any,
    },
  ],
  expect: [
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.ExpectToken,
    },
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.ExpectToken,
      nextStatementType: StatementType.Any,
    },
    {
      paddingType: PaddingType.Any,
      prevStatementType: StatementType.ExpectToken,
      nextStatementType: StatementType.ExpectToken,
    },
  ],
  test: [
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: [
        StatementType.TestToken,
        StatementType.ItToken,
        StatementType.FitToken,
        StatementType.XitToken,
        StatementType.XtestToken,
      ],
    },
    {
      paddingType: PaddingType.Always,
      prevStatementType: [
        StatementType.TestToken,
        StatementType.ItToken,
        StatementType.FitToken,
        StatementType.XitToken,
        StatementType.XtestToken,
      ],
      nextStatementType: StatementType.Any,
    },
  ],
};

export const rules = {
  'padding-around-after-all-blocks': createRule(paddingConfigs.afterAll),
  'padding-around-after-each-blocks': createRule(paddingConfigs.afterEach),
  'padding-around-before-all-blocks': createRule(paddingConfigs.beforeAll),
  'padding-around-before-each-blocks': createRule(paddingConfigs.beforeEach),
  'padding-around-describe-blocks': createRule(paddingConfigs.describe),
  'padding-around-expect-groups': createRule(paddingConfigs.expect),
  'padding-around-test-blocks': createRule(paddingConfigs.test),
  'padding-around-all': createRule(
    [].concat(...Object.keys(paddingConfigs).map(k => paddingConfigs[k])),
  ),
  // ===========================================================================
  // DEPRECATED
  'padding-before-after-all-blocks': createRule([
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.AfterAllToken,
    },
  ]),
  // DEPRECATED
  'padding-before-after-each-blocks': createRule([
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.AfterEachToken,
    },
  ]),
  // DEPRECATED
  'padding-before-before-all-blocks': createRule([
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.BeforeAllToken,
    },
  ]),
  // DEPRECATED
  'padding-before-before-each-blocks': createRule([
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.BeforeEachToken,
    },
  ]),
  // DEPRECATED
  'padding-before-describe-blocks': createRule([
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.DescribeToken,
    },
  ]),
  // DEPRECATED
  'padding-before-expect-statements': createRule([
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: StatementType.ExpectToken,
    },
    {
      paddingType: PaddingType.Any,
      prevStatementType: StatementType.ExpectToken,
      nextStatementType: StatementType.ExpectToken,
    },
  ]),
  // DEPRECATED
  'padding-before-test-blocks': createRule([
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: [StatementType.TestToken, StatementType.ItToken],
    },
  ]),
  // DEPRECATED
  'padding-before-all': createRule([
    {
      paddingType: PaddingType.Always,
      prevStatementType: StatementType.Any,
      nextStatementType: [
        StatementType.AfterAllToken,
        StatementType.AfterEachToken,
        StatementType.BeforeAllToken,
        StatementType.BeforeEachToken,
        StatementType.DescribeToken,
        StatementType.ExpectToken,
        StatementType.ItToken,
        StatementType.TestToken,
      ],
    },
    {
      paddingType: PaddingType.Any,
      prevStatementType: StatementType.ExpectToken,
      nextStatementType: StatementType.ExpectToken,
    },
  ]),
};

export const configs = {
  recommended: {
    plugins: ['jest-formatting'],
    overrides: {
      files: [
        '**/*.test.*',
        '**/*_test.*',
        '**/*Test.*',
        '**/*.spec.*',
        '**/*_spec.*',
        '**/*Spec.*',
        '**/__tests__/*',
      ],
      rules: {
        'jest-formatting/padding-around-after-all-blocks': 2,
        'jest-formatting/padding-around-after-each-blocks': 2,
        'jest-formatting/padding-around-before-all-blocks': 2,
        'jest-formatting/padding-around-before-each-blocks': 2,
        'jest-formatting/padding-around-describe-blocks': 2,
        'jest-formatting/padding-around-test-blocks': 2,
      },
    },
  },
  strict: {
    plugins: ['jest-formatting'],
    overrides: {
      files: [
        '**/*.test.*',
        '**/*_test.*',
        '**/*Test.*',
        '**/*.spec.*',
        '**/*_spec.*',
        '**/*Spec.*',
        '**/__tests__/*',
      ],
      rules: {
        'jest-formatting/padding-around-all': 2,
      },
    },
  },
};
