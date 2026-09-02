# AI Landing Page Generator

An interactive Next.js prototype that turns a product idea into a structured landing page experience.

Users can describe their product or business, generate tailored landing-page content, view the result in a responsive preview, and manage the generated project from a simple dashboard.

## Live Demo

https://ai-landing-page-generator-rho.vercel.app/

## GitHub Repository

https://github.com/WajeehaAhsan46/ai-landing-page-generator

## Features

- AI-style landing page generation from a product description
- Context-aware content for different product categories
- Dynamic hero title, badge, CTA, and feature sections
- Interactive Generate button with loading, success, and error states
- Generated content saved with localStorage
- Project dashboard with saved landing-page information
- Full landing-page preview
- Interactive 3D web experience
- Responsive design for desktop and mobile
- Health-check API endpoint
- Production deployment with Vercel

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page and introduction |
| `/generate` | Describe a product and generate landing-page content |
| `/preview` | View the generated landing page and 3D experience |
| `/dashboard` | View the generated project |
| `/templates` | Explore landing-page templates |
| `/settings` | Application settings |
| `/health` | Application health status |
| `/api/health` | Health-check API endpoint |

## How It Works

1. The user enters a product or business description.
2. The application analyzes the description and selects suitable landing-page content.
3. A landing page is generated with a title, badge, CTA, and feature sections.
4. The generated result is stored locally in the browser.
5. The user can open the Preview page to view the complete result.
6. The Dashboard displays the saved generated project.

## AI-Assisted Development

AI tools were used as development assistants throughout the project.

AI assistance was used for:

- Planning the application structure
- Generating and refining React/Next.js components
- Debugging TypeScript and build errors
- Improving UI and responsive styling
- Designing interaction states
- Implementing the 3D experience
- Reviewing accessibility and performance considerations

The final implementation was reviewed, tested, modified, and deployed by the developer.

## Button Motion & Interaction

The Generate Landing Page button uses short transitions to communicate state changes clearly.

- **Idle:** Ready to generate a landing page.
- **Loading:** Displays a spinner and prevents repeated clicks.
- **Success:** Displays a completion state before returning to idle.
- **Error:** Displays an error state and allows the user to retry.
- **Accessibility:** Includes keyboard focus styling and reduced-motion support.
- **Animation:** Uses short transform/opacity transitions to avoid unnecessary layout changes.

## 3D Experience

The Preview page includes an interactive 3D experience built with React Three Fiber and Three.js.

The experience includes:

- Procedural lightweight geometry
- Interactive material/color changes
- Camera/orbit interaction
- Lazy loading with a loading fallback
- Responsive rendering
- Reduced-motion consideration
- Device pixel ratio capped between 1 and 1.5 to reduce GPU workload

The scene intentionally uses simple geometry and a small number of lights instead of large external 3D assets.

## Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Three.js
- React Three Fiber
- React Three Drei
- Vercel
- GitHub

## Local Development

Clone the repository and install dependencies:

```bash
npm install