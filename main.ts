import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Meeting That Should Have Been an Email — make.fun bounty
// u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9
// The program writes exactly one funny line to /output/entry.txt.
// Deterministic: the same fixed line on every run. No randomness, no
// network, no environment reads, so the two grading runs are byte-identical.

// The line: the meeting's whole job was reading the email out loud — and
// its only output was emailing everyone the notes. The thing the meeting
// should have been is what it produced. Two beats, the turn lands on the
// last word ("notes"), and anyone who has sat through that meeting nods.
// It dodges the obvious complaint ("this could have been an email") and
// jokes about the meeting itself instead.
const ENTRY =
  "We held a meeting to read the email out loud, then emailed everyone the notes.";

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of writing junk.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry is ${line.length} characters, must be 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt differs from ENTRY");
  }
  console.log(`Wrote ${ENTRY.length} characters to ${target}`);
  console.log(ENTRY);
}

main();
