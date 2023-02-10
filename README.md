# Name

Overview

## Description

## Demo

## Features

- feature:1
- feature:2

## Requirement

## Usage

### 0.

```shell
npm init --yes
```

Add `"type": "module",`

```json
  "main": "index.js",
  "type": "module",
```

```shell
npm install --save-dev typescript @types/node
```

```
lib-cov
*.seed
*.log
*.csv
*.dat
*.out
*.pid
*.gz
*.swp

pids
logs
results
tmp

# Build
public/css/main.css

# Coverage reports
coverage

# API keys and secrets
.env

# Dependency directory
node_modules
bower_components

# Editors
.idea
*.iml

# OS metadata
.DS_Store
Thumbs.db

# Ignore built ts files
dist/**/*

# ignore yarn.lock
yarn.lock
```

```
.
├── node_modules
│  ├── @types
│  └── typescript
├── package-lock.json
└── package.json
```

```shell
npx tsc --init
```

```text
     /* Language and Environment */
-    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
+    "target": "es2020",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
```

```text
    /* Modules */
-   "module": "commonjs",                                /* Specify what module code is generated. */
+   "module": "ESNext",                                  /* Specify what module code is generated. */
```

```text
-    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
+    "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
```

```text
-    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
+    "outDir": "./",                                   /* Specify an output folder for all emitted files. */
```

## Installation

## References

## Licence

Released under the [MIT license](https://gist.githubusercontent.com/shinyay/56e54ee4c0e22db8211e05e70a63247e/raw/34c6fdd50d54aa8e23560c296424aeb61599aa71/LICENSE)

## Author

[shinyay](https://github.com/shinyay)
- twitter: https://twitter.com/yanashin18618
