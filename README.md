# Next.js Boilerplate

> Easy to use front-end boilerplate to start developing your Next.js 13.1 app right away 💯

[**Learn More**](#learn-more)

---

## Highlights

- Features all the benefits of Next.js 13.1.6 with the new app directory
- Uses Styled Components for CSS-in-JS
- Typescript
- Lint your code with `lint-staged`
- Normalizes default browser styles with `normalize.css`
- Automatically formats your code by using `Prettier`
- Friendly errors & warnings
- Includes Twitter's famous Bootstrap grid to quickly build your app
- Automatically optimizes all your SVGs
- Uses new NextJS built in SEO. You can use Next-SEO as an option if you prefer.

```bash
├── app                         # App Folder
│   └── page.tsx                  # Home page
│   └── page.module.css           # Original CSS for main page
│   └── styles.ts                 # Styled-Components version of page.module.css being used in page.tsx (example of co-locating files)
│   └── layout.tsx                # Root layout
│   └── (page)                    # (page) represents the grouping of page URIs Note: this does not effect URI
│       └── <page>                  # <page> folder for page URI for each site page
│           └── page.tsx            # URI site page
│           └── head.tsx            # page header (if needed)
│           └── layout.tsx          # page nested layout
├── docs                        # Documentation
├── pages                       # Pages folder
│   └── api                       # api routes
│   └── <api>.tsx                 # <api> represents a static page URI for each site page that is not in app folder
├── public                      # Folder for static assets
│   ├── favicon                   # Favicon - https://realfavicongenerator.net/
├── src                         # Folder for jsx, tsx, ts, js, css source code
│   └── lib                       # library folder
│   └── data                      # JSON data folder
│   └── ui                        # UI shared component folder
│   └── styles                    # Style folder
│       └── global.ts               # Global styling
│       └── themes.ts               # Themes
│   └── types                     # Types folder
│       └── index.d.ts              # Your default project Typescript declaration file
│       └── <type>.ts               # Typescript declaration <type> = component folder or specific component
│       └── styled.d.ts             # Styled Components Typescript declaration file
├──  next-env.d.ts              # Next.js Typescript declaration file (leave unchanged)
├──  tsconfig.json              # Typescript config
├── .eslintrc.json              # Eslint config
├── .priettierc                 # Prettier config
├── .stylelintrc                # Stylelint config
└── next-seo.config.ts          # Next SEO Default settings
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## NOTES:

- Due to styled-components there are two options to enable SSR support.
  - 1. is by using 'use client' in the <style>.ts file that contains all the styled-compenents
  - 2. in a component using 'use client' and import the component into the page.
- You have options of placing components and styles.ts co-located with the page.tsx; NextJS will not render them as a route.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn Next-SEO](https://github.com/garmeeh/next-seo/blob/master/APP_DIRECTORY.md) (optional) - learn how to setup default SEO and override defaults
- [Learn Styled-Components](https://styled-components.com/docs) - learn how to create custom styled components

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
