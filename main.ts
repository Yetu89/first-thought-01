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

// Validation: exactly one word, 1-24 code points, no spaces, line
// breaks or control characters, and no trailing newline in the file.
// Length is counted in code points ([...WORD].length), not UTF-16
// code units, so astral-plane characters count as one each.
const codePoints = [...WORD];
if (codePoints.length < 1 || codePoints.length > 24) {
  throw new Error(
    `word must be 1-24 code points, got ${codePoints.length}`,
  );
}
if (/[\s\p{Cc}]/u.test(WORD)) {
  throw new Error(
    "word must be a single word with no spaces, line breaks or control characters",
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, WORD, "utf8");
