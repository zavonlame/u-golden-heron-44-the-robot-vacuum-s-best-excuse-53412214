// The Robot Vacuum's Best Excuse — one line, 140 chars or fewer.
// Node 22 stdlib only. Reads nothing, writes only $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I mapped that corner as a wall. It has been a wall for three weeks. I do not argue with the map.';

function outDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
}

function deliver(): void {
  // The kit's gate: 1 to 140 characters, not only white space.
  if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
    throw new Error(`entry is ${LINE.length} chars, gate is 1-140`);
  }
  const dir = outDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'entry.txt'), LINE, 'utf8');
}

deliver();
