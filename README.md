This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
## Button Motion & Interaction Notes

The Generate Landing Page button uses intentional, short transitions to communicate state changes without abrupt visual swaps.

- **Duration:** 300ms for hover, focus, and visual state transitions.
- **Easing:** `ease-out` is used so interactions begin responsively and settle smoothly.
- **Loading:** A spinner communicates that generation is in progress.
- **Success:** A checkmark and success label provide clear completion feedback before returning to the idle state.
- **Error:** An error icon and "Try Again" label clearly communicate failure and allow the user to retry.
- **Accessibility:** The button has a visible keyboard focus state, prevents repeated clicks while loading, and supports `prefers-reduced-motion`.
- **Motion properties:** Animations use transform, opacity, and other compositor-friendly properties rather than layout-changing animations.
## 3D Experience Performance Note

The 3D experience uses lightweight procedural geometry instead of a large external model, keeping the scene simple and avoiding unnecessary asset downloads. The 3D component is lazy-loaded with a loading fallback, and rendering is capped with a device pixel ratio range of 1–1.5 to reduce GPU workload on high-density screens.

The scene uses a small number of lights and a single low-complexity mesh, which keeps the animation lightweight. Users who prefer reduced motion do not receive the continuous rotation, while the 3D scene and click interaction remain available.

With more time, I would measure the production build with browser performance tools on both desktop and mobile devices and add a static image fallback for especially low-power devices.