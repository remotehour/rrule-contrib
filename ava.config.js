export default {
  extensions: ['ts', 'tsx'],
  require: ['ts-node/register/transpile-only'],
  environmentVariables: {
    TS_NODE_COMPILER_OPTIONS: '{"module":"commonjs"}',
  },
}
