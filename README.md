# Monorepo React Template

A Turborepo + Bun monorepo template with React 19, TanStack Router, Tailwind CSS v4, and a Bun HTTP server.

## Getting Started

1. Rename the root `package.json` `name` field
2. Update `.github/renovate.json` assignees if desired
3. Replace route components in `apps/web/src/routes/`
4. Add your own Zod schemas in `packages/shared/src/schemas/`
5. Add your own API routes in `apps/server/src/index.ts`
