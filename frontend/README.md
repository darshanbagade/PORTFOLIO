# Devid_Deshmukh — Personal Portfolio

Professional, responsive portfolio built with React and Vite showcasing projects, skills, and contact information.

Key pages and components:

- `Home`, `About`, `Projects`, `Skills`, `Contact`, `Achievments` (pages)
- `Navbar`, `Footer`, `LogoLoop`, `VisitorCount` (components)

Tech stack

- React (functional components + hooks)
- Vite (dev server and build)
- CSS modules / plain CSS for styling

Getting started

1. Install dependencies:

```bash
npm install
```

2. Run dev server (hot reload):

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

Local development (clone & run locally)

1. Prerequisites

- Install Node.js (recommended: 16 or later). Verify with `node -v` and `npm -v`.
- (Optional) Install Git if you need to clone the repo.

2. Clone the repository (one-liner):

```bash
git clone https://github.com/devid-deshmukh/Devid_Deshmukh.git
cd Devid_Deshmukh
```

3. Open in your editor

- To open in Visual Studio Code:

```bash
code .
```

4. Install dependencies

```bash
npm install
```

5. Run the development server

```bash
npm run dev
```

- The Vite dev server typically runs at http://localhost:5173 — open that URL in your browser.

6. Build and preview production locally

```bash
npm run build
npm run preview
```

Troubleshooting

- If the browser is blank, open the browser console (F12) to inspect errors; missing components or import errors will stop rendering.
- If ports conflict, set `PORT` before starting, e.g. `PORT=3000 npm run dev` (on Windows PowerShell use `$env:PORT=3000; npm run dev`).
- Delete `node_modules` and run `npm install` if you see dependency errors.

Quick tips for contributors

- Create a feature branch: `git checkout -b feat/your-feature`.
- Commit changes and push: `git add . && git commit -m "feat: describe" && git push --set-upstream origin feat/your-feature`.
- Open a pull request on GitHub with a short description and screenshots (if UI-related).

Project structure (key files)

- `src/main.jsx` — app entry, mounts React tree
- `src/App.jsx` — app router / page composition
- `src/pages/` — page components (Home, Projects, Skills, Contact, About)
- `src/components/` — reusable UI components (Navbar, Footer, LogoLoop, VisitorCount)
- `index.html` — Vite HTML entry

Customizing content

- Edit page content in `src/pages/` to update text and sections.
- Add project entries in `src/pages/Projects.jsx` (or the corresponding component) and place assets in `src/assets/`.
- Update styles in `src/styles/` or component CSS files.

Deployment

This project deploys well to static hosting providers such as Vercel, Netlify, or GitHub Pages. For Vercel, connect the repository and set the build command to `npm run build` and the output directory to `dist`.

Notes

- Node.js 16+ is recommended.
- ESLint and any additional tooling are configured in the repo (see `eslint.config.js`).

Contributing

If you'd like to contribute, open an issue or a pull request with a clear description and a screenshot (if UI-related).

License & Author

- Author: Devid Deshmukh
- License: MIT (or change as appropriate)

Contact

- For questions or collaboration: use the `Contact` page or open an issue on the repository.

---
