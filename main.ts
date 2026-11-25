import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Best Advice I Ever Got — one sentence, written to /output/entry.txt.
// Deterministic: every run writes byte-identical output.
const SENTENCE =
  "The night before my first job, my father said, 'Do the work nobody wants and no one can replace you,' and I have never once been without work since.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE, "utf8");
console.log(SENTENCE);
console.log(`Characters: ${SENTENCE.length}`);
