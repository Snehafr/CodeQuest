# CodeQuest full rough multi-page website

Open `index.html`.

Every main navigation item is a separate HTML page:
- index.html — dashboard
- roadmap.html — phases
- phase.html?p=0 or p=1 — phase detail
- week.html?p=0&w=0 — week detail
- tasks.html — all tasks
- paths.html — Phase 3 choices
- settings.html — reset local data

Progress is stored in browser localStorage.

Edit roadmap content in `app.js`, and visual styling in `styles.css`.


## Responsive support

CodeQuest v6 is responsive across:
- Desktop browsers
- iPad / iPadOS
- Android tablets
- iPhone
- Android phones
- Portrait and landscape orientations

The layout automatically changes from the fixed desktop sidebar to a touch-friendly,
horizontally scrollable navigation bar on tablets and phones. Touch targets are enlarged,
content avoids horizontal page overflow, tables can scroll horizontally, iOS input zoom is
avoided, safe-area insets are respected, and hover-only interactions are disabled on
touch devices.

Progress is still stored in browser `localStorage`. This means progress persists on the
same browser/device, but it is not automatically synchronized between different devices.
A future account/backend system would be needed for cross-device progress syncing.

## v7 learning resources

Every roadmap quest now has a **Learn ↗** button. Opening it gives:
- what the step is about
- why it matters
- a short, step-by-step learning sequence
- a practice mission
- a definition of done
- an estimated study time
- curated external resources

The resource system is built into `app.js` so each task can be expanded or customized later without changing the page structure.
