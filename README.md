# Next.js / Apollo Server / Nexus Schema

A minimal repo to test out AppSignal with Next.js and Apollo.

## Required Env Vars

- `APPSIGNAL_PUSH_API_KEY`: Private, used on backend.
- `NEXT_PUBLIC_APPSIGNAL_FRONTEND_KEY`: Public, used on frontend.

## Outline

High level outline of what I hope to cover

## Backend

- Set up AppSignal instance in `appsignal.js`
- Set up custom server in Next.js in `server.js`
- Set up web vitals reporting in `pages/_app.tsx`

## Apollo

- Create `/api/graphql` endpoint with minimal apollo server setup
- Add AppSignal monitoring to apollo server
-

## Frontend

- Set up AppSignal instance in `src/appsignal.ts`
- Set up ErrorBoundary in `pages/_app.tsx`
- Show caught vs uncaught error via button click in `pages/index.tsx`
