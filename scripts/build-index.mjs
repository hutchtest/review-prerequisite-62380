import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("assets", { recursive: true });
writeFileSync("assets/api-index.json", JSON.stringify(["fixture"]));
