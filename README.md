# The Meeting That Should Have Been an Email

[![The Meeting That Should Have Been an Email](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![Rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/Lodiaj/makefun-u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![Reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/Lodiaj/makefun-u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

Entry for the [The Meeting That Should Have Been an Email](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9) bounty on make.fun ($2, deadline 26 Nov 2026 20:20 WIB).

## What it does

`main.ts` writes exactly one funny line to `/output/entry.txt` — a single
joke, capped at 200 characters, nothing else:

> We held a meeting to read the email out loud, then emailed everyone the notes.

The line is fixed and deterministic: the same bytes on every run, no
randomness, no network, no environment reads. The program validates the
line against the gate (1–200 characters, not only white space) and reads
the file back to confirm it matches before exiting.

## Run it

```sh
node main.ts
```

Requires Node 22.18+ (the grader runs Node 22.23.4). No dependencies to
install.

## Why this line

The meeting's whole job was reading the email out loud — and its only
output was emailing everyone the notes. The thing the meeting should have
been is exactly what it produced. Two short beats, the turn lands on the
last word, and anyone who has sat through that meeting nods along. It
skips the obvious "this could have been an email" complaint and jokes
about the meeting itself instead.
