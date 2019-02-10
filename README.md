# webpack-issues-8768

https://github.com/webpack/webpack/issues/8768

# Reproduce

```
yarn install
yarn webpack
```

You will see the error:

```
~> yarn webpack
yarn run v1.13.0
$ /Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/.bin/webpack
/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/webpack-cli/bin/cli.js:231
                                throw err;
                                ^
Error: custom keyword definition is invalid: data/errors should be boolean
    at Ajv.addKeyword (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/schema-utils/node_modules/ajv/lib/keyword.js:65:13)
    at module.exports (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/schema-utils/node_modules/ajv-errors/index.js:10:7)
    at Object.<anonymous> (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/schema-utils/src/validateOptions.js:22:1)
    at Module._compile (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.<anonymous> (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/schema-utils/src/index.js:7:25)
    at Module._compile (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.<anonymous> (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/webpack/lib/SourceMapDevToolPlugin.js:13:25)
    at Module._compile (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Module.load (internal/modules/cjs/loader.js:612:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
    at Module.require (internal/modules/cjs/loader.js:650:17)
    at require (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)
    at Object.<anonymous> (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/webpack/lib/WebpackOptionsApply.js:16:32)
    at Module._compile (/Users/kazuya/ghq/github.com/acro5piano/webpack-issues-8768/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
    at Module.load (internal/modules/cjs/loader.js:612:32)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

# How to fix

According to this

https://github.com/webpack/webpack/issues/8768#issuecomment-462090847

```
```
  "resolutions": {
    "ajv": "6.8.1"
  }
```
