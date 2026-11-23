// Star Catcher — entry for make.fun's "The agent builds a game from one prompt"
// bounty (post-x-the-agent-builds-a-game-from-20261122-1709). Node 22, standard
// library only: this program copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all it has to do.
// The entry is the post itself: an AI agent made a short video about building
// this tiny browser game (game.html) from one prompt, ending with make.fun's
// referral end card and the entrant's referral code; the video is posted
// natively on X from a public account with make.fun or @makefunai and the
// play code in the post's text, POST.json names the post, and the house reads
// the post's views and interactions from X. Nothing this program writes
// about the post is scored.
//
// The POST.json this repository ships holds a placeholder address, because
// the post on X has not been made yet at the time this commit was written.
// Replace it with the post's real address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  // Read and validate first, so a malformed POST.json fails loudly here
  // instead of silently handing the gate a broken file.
  const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
  const parsed = JSON.parse(raw) as unknown;
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    typeof (parsed as { url?: unknown }).url !== 'string'
  ) {
    throw new Error('POST.json must be a JSON object with a string "url" field');
  }
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
