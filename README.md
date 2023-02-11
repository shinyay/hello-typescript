# Hello TypeScript

This is the getting started with TypeScript.
Here we will create an environment for TypeScript and a simple hello world.

## Description

## Demo

## Features

- feature:1
- feature:2

## Requirement

## Usage

### 1. Create a Node project

The first step is to create a Node project.

```shell
npm init --yes
```

Then add 'module' as 'type'.

```json
  "main": "index.js",
  "type": "module",
```

Install the packages related to TypeScript.

```shell
npm install --save-dev typescript @types/node
```

Now, to commit this project to Git, create an ignore definition (.gitignore) as follows.

<details>
<summary>.gitignore</summary>

```text
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

</details>

So far, the directory hierarchy looks like this.

```text
.
├── node_modules
│  ├── @types
│  └── typescript
├── package-lock.json
└── package.json
```

### 2. Initialize the project as TypeScript

```shell
npx tsc --init
```

```diff
     /* Language and Environment */
-    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
+    "target": "es2020",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
```

```diff
    /* Modules */
-   "module": "commonjs",                                /* Specify what module code is generated. */
+   "module": "ESNext",                                  /* Specify what module code is generated. */
```

```diff
-    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
+    "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
```

```diff
-    "outDir": "./",                                   /* Specify an output folder for all emitted files. */
+    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
```

```diff
-  }
+  },
+  "include": ["./src/**/*.ts"]
```

```shell
.
├── node_modules
│   ├── @types
│   └── typescript
├── package-lock.json
├── package.json
├── src
│   └── index.ts
└── tsconfig.json
```

## Installation

## References

## Licence

Released under the [MIT license](https://gist.githubusercontent.com/shinyay/56e54ee4c0e22db8211e05e70a63247e/raw/34c6fdd50d54aa8e23560c296424aeb61599aa71/LICENSE)

## Author

[shinyay](https://github.com/shinyay)
- twitter: https://twitter.com/yanashin18618
