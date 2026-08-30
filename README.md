# 🩹 Supply Shelf

A simple, free inventory tracker built to help small clinics, school nurse offices, or community health stations keep track of medical supplies — gloves, bandages, wipes, and more — so nothing runs out unnoticed.

Built as a student community-service project by **Mohammad Basil**.

## What it does

- Workers sign in with their own email/password account
- Everyone who enters the same **clinic code** shares one live supply list — changes sync instantly across every signed-in device
- Add supply items with a category, quantity, and a "low stock" threshold
- See each item's stock level at a glance with a fill-bar visual
- Get an automatic **low stock** or **out of stock** badge
- Search, filter by category, and sort (most urgent, name, quantity, or last restocked)
- Add a short note to any item (e.g. "ask Dr. Lee before reordering")
- Track when each item was **last restocked and by whom**, updated automatically when someone adds stock
- **Export a shopping list as a CSV** of everything currently low or out of stock
- Undo an accidental delete within a few seconds
- Toggle **dark mode**
- No patient data is ever collected — only supply names and counts

## Why I built this

I'm in 7th grade and I want to go into the medical field someday. I wanted to find a way to give back to my community now, even before I'm old enough to volunteer at a hospital, so I built a tool that could actually save clinic staff time and help make sure supplies like gloves and bandages never run out without anyone noticing.

## Pages

- `login.html` — sign in or create an account, and enter your clinic's shared code
- `index.html` — the live tracker (redirects here to `login.html` if you're not signed in)
- `firebase-init.js` — shared Firebase project setup used by both pages

## Try it

Open `login.html` in a browser (not `index.html` directly — you'll get bounced back to sign in). Create an account, pick a clinic code, and share that code with teammates so you all see the same list.

If this repo is hosted with GitHub Pages, it's live at:
`https://thebravebasil.github.io/med-stock-check/login.html`

## Built with

- HTML, CSS, and JavaScript (no frameworks)
- [Firebase](https://firebase.google.com/) Authentication (accounts) and Firestore (shared, real-time database)
- Dark mode preference is saved locally per device (`localStorage`)

## A note on security

This project currently runs Firestore in **test mode**, which means data isn't locked down beyond requiring a valid account. Before using this with a real clinic's real supply data, tighten the Firestore Rules (Firebase Console → Firestore → Rules) to at least require `request.auth != null` for all reads and writes.

## Ideas for what's next

- [ ] Tighten Firestore security rules before real-world use
- [ ] Barcode scanning to add/update items instantly
- [ ] Let a clinic admin approve new workers before they can join a clinic code

## License

[Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) — free to use, copy, and adapt, as long as you:

- **Give credit** to the original author (name a link back to this repo)
- **State any changes you made**, if you modify the code
- **Let me know you're using it** — a quick message or GitHub issue is enough (see contact info below)

See the full license text at the link above for details. The notification rule above is an extra condition added on top of CC BY for this project, not part of the standard license.
