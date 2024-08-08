# RNTemplate


## Prerequisites
- [Node.js > 20](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [nextJS Version = 14] 

## Base dependencies
    "@redux-devtools/extension": "^3.3.0",
    "@reduxjs/toolkit": "^2.2.2",
    "@stripe/stripe-js": "^3.3.0",
    "axios": "^1.7.2",
    "framer-motion": "^11.2.6",
    "next": "14.1.0",
    "react": "^18",
    "react-dom": "^18",
    "react-modal": "^3.16.1",
    "react-redux": "^9.1.0",
    "react-scroll": "^1.9.0",
    "redux": "^5.0.1",
    "redux-thunk": "^3.1.0",
    "sharp": "^0.33.4",
    "stripe": "^15.4.0"

## Folder structure
This project follows a straightforward project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `action`: This folder contains all actions that can be dispatched to redux.
  - `Components`: Folder to store any common component that you use through your app (such as a generic button)
  - `context`: Context to store all global rappers.
  - `helpers`: Helpers to store Axios.
  - `hooks`: Hooks to store redux hook.
  - `Layout`: Layout to store any kind of UI layout like header or any UI rapper.
  - `pages`: The main component that starts your whole app.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`.
  - `store`: Folder to put all redux middlewares and the store.
  - `styles`: Folder that contains global css.
  - `UI`: Folder that contains all your application screens/features.
  - `validity`: Folder that contains all your input validation.

## Setup environments
Modify the environment variables files in root folder (`.env`)


## Developer

[Taraqul Islam Rony](https://github.com/TIRony)
[Shams Shahriar](https://github.com/Shams000)


## NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
