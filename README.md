# vinext-starter

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## HengQingKeJi on Cloudflare Pages

The `hqkj` branch exports the portal as a static website. Use these Pages build
settings:

| Setting | Value |
| --- | --- |
| Production branch | `hqkj` |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist/client` |
| Root directory | Repository root (leave blank) |
| Environment variable | `NODE_VERSION=22` |

`next.config.ts` enables `output: "export"` and disables server-side image
optimization. The build generates `index.html`, `privacy.html`, `404.html`, and
the RSC files used for client navigation inside `dist/client`. A final check
fails the build if these files are missing or empty. No Worker or database
binding is required to serve this portal on Pages.

`public/_redirects` maps the home navigation request `/.rsc` to the exported
`/index.rsc` file. Keep this Pages rewrite while using vinext 0.0.50 so navigation
back from the privacy page and link prefetches do not request a missing file.

If the Pages root URL returns 404, check the deployed commit and confirm the
build log includes `Pre-rendering all routes` and `Pages output verified`.
The original `4841d82` build only produced server bundles and browser assets;
publishing its `dist/client` directory does not provide an HTML homepage.
Deploy a commit with this static export configuration instead of retrying that
old commit. Pages automatically rebuilds on new pushes to `hqkj`.

The original site uses the separate `xtkj` Worker connected to `main`. Keep
non-production branch builds disabled on that Worker so `hqkj` pushes only
publish this Pages project. A non-production version command of
`npx wrangler deploy` would also promote the `hqkj` build to the original
Worker's production domain even though the Git `main` branch is unchanged.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
