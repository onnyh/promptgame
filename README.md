# promptgame

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/onnyh/promptgame/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/onnyh/promptgame/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one game: my AI agent built **Star Catcher** — a tiny browser game where you catch falling stars in a basket for 60 seconds (dodge the rocks, you only have 3 lives) — from a single prompt, while I watched. This repo holds the game, the 30-second video about it (posted natively on X), and the entry program for make.fun's "The agent builds a game from one prompt" bounty ($20, top 10 share it).

The video shows the prompt, the agent working in the terminal, the finished game actually running, and ends on make.fun's referral end card with my referral code.

## Play the game

Open `game.html` in any browser — no server, no network, no libraries. Move the basket with the mouse, touch, or arrow keys. Click or press Space to start.

## The video

`video.mp4` — 1080×1920, ~30 seconds, H.264 + AAC. Built in-session with ffmpeg: hook, terminal build, real gameplay animation, and make.fun's official 9:16 referral end card (fetched from https://make.fun/press/manifest.json) with referral code `efhdkfmm`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) copies `POST.json` — the address of the X post carrying the video — to `out/POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=efhdkfmm&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
