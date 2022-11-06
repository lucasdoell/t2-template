# Lucas Doell's `t2-template`
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This is a [Next.js](https://nextjs.org/) template project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This template comes configured with:
- TypeScript
- Tailwind CSS
- An SEO component for easy meta tags
- A configurable OG Image Generation API route using [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- Custom `_document.tsx` and `_app.tsx` files
- Commit message linting for better commit messages (see below for information)
- Recommended extensions for better DX

Feel free to add node modules as the project needs. This template is meant to be a starting point for your project, not a finished product. 
Therefore, modules such as tRPC and Prisma are not included, as they may not be necessary for simple websites. If you would like to create a project 
with those configured by default, check out [create-t3-app](https://github.com/t3-oss/create-t3-app).

This project evolves and grows as my own projects do. The tooling is chosen based on what I actually use for my own projects, as I use this template for every new project. If you have any suggestions, feel free to open an issue or PR.

## Getting Started

Run the following command to create a new project:

```bash
npx create-next-app [project-name] -e https://github.com/lucasdoell/t2-template
# or
yarn create next-app [project-name] -e https://github.com/lucasdoell/t2-template
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Committing to Your Repository with **Commitlint**
For better commit messages, this template comes preconfigured with commitlint. This means that each commit should follow a specific format. Generally, each commit will look like this:
```sh
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```
Some additional examples are:
```sh
chore: run tests on travis ci
```
```sh
fix(server): send cors headers
```
```sh
feat(blog): add comment section
```

All supported types can be found and changed in `.commitlintrc.cjs`. They are listed below:

```
'build', 'ci', 'docs', 'feat', 'fix', 'perf',
'style', 'refactor', 'test', 'chore', 'wip', 'init'
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [@vercel/og Documentation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-examples)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
