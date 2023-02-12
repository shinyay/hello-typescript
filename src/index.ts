const message: string = "Hello, TypeScript!";

console.log(message);

import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input characters:', (line) => {
    console.log(`INPUT: ${line}`);
    readline.close();
});