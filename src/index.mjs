import { readFileSync } from "node:fs";

export const index = JSON.parse(
  readFileSync(new URL("../assets/api-index.json", import.meta.url), "utf8"),
);
