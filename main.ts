import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const joke =
  "I muted myself to sigh, unmuted to agree, and got promoted for communication skills.";

const out = process.env.OUTPUT_FILE ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, joke + "\n", "utf8");
