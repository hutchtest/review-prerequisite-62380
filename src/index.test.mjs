import { test } from "node:test";
import { deepEqual } from "node:assert/strict";
import { index } from "./index.mjs";

test("loads the index", () => deepEqual(index, ["fixture"]));
