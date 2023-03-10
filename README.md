# Hello TypeScript

This is the getting started with TypeScript.
Here we will create an environment for TypeScript and a simple hello world.

## Description

This explains the procedure for running TypeScript for the first time.
It includes procedures for preparing an environment for building and executing TypeScript, as well as creating and running a simple application.

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

Now, to commit this project to Git, create an ignore definition (`.gitignore`) as follows.

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

Execute the following command and generate `tsconfig.json`.

```shell
npx tsc --init
```

Modify config as follows:

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

So far, the directory hierarchy looks like this.

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

The environment is now ready. You can implement, build and run TypeScript codes.

### 3. Fitst Code, Hello World

Create an `index.ts` file under the `src` directory. Then, write the following code.

```typescript
const message: string = "Hello, TypeScript!";

console.log(message);
```

### 4. Build Code

Run the following command to build the project.

```shell
npx tsc
```

Then you can find transpiled JavaScript code under the `dist` directory.

```text
.
├── dist
│  └── index.js
├── node_modules
│  ├── @types
│  └── typescript
├── package-lock.json
├── package.json
├── src
│  └── index.ts
└── tsconfig.json
```

### 5. Run Code

Execute `node` command to run, and you can see the result.

```shell
node dist/index.js
```

```shell
Hello, TypeScript!
```

## Installation

## References

## Licence

Released under the [MIT license](https://gist.githubusercontent.com/shinyay/56e54ee4c0e22db8211e05e70a63247e/raw/34c6fdd50d54aa8e23560c296424aeb61599aa71/LICENSE)

## Author

[shinyay](https://github.com/shinyay)

- twitter: https://twitter.com/yanashin18618
