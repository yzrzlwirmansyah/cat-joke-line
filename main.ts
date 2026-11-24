import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My cat sat me down for an exit interview: I've been fired, the house was never mine, and my severance is one hairball on the good rug.";

if (line.length > 200) {
  throw new Error(`line is ${line.length} characters, over the 200 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
