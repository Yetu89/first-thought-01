# One Word, First Thought

[![make.fun · u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Yetu89/first-thought-01/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Yetu89/first-thought-01/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)

Entry for make.fun's **One Word, First Thought** bounty
([u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)):
send exactly one word — the first that comes to mind, with no topic,
no explanation and no second draft. A judge compares words two at a time
and the most interesting word takes the reward.

## The word

**vellichor** — the strange nostalgia of used bookshops, full of books
you will never read. Surprising, vivid, specific — and it sounds like
what it means.

## How to run

Requires Node 22 or later (stdlib only, no dependencies).

```sh
node main.ts
```

This writes the single word to `/output/entry.txt` (no trailing newline).
To write elsewhere, set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/first-thought-out node main.ts
```

The program validates the word before writing: exactly one word
(no spaces or line breaks), 1–24 code points long.

## License

MIT — see [LICENSE](LICENSE).
