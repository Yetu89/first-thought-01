// One Word, First Thought — make.fun bounty
// u-0xkianno-one-word-first-thought-106abaf8
//
// Writes exactly one word — the first that comes to mind —
// to /output/entry.txt. No topic, no explanation, no second draft.
//
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word. First thought, no second draft.
const WORD = "vellichor";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// Validation: exactly one word, 1-24 characters, no trailing newline.
if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`word must be 1-24 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("word must be a single word with no whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, WORD, "utf8");
