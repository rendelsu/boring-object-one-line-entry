import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "My beige sock lost its partner in the wash, so now even my loneliness refuses to wear color.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
chmodSync(outFile, 0o644);
