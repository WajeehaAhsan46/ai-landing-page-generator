# AI Landing Page Generator

An AI-powered Next.js application that transforms a product or business idea into structured landing-page content.

Users can describe their product or business, generate tailored landing-page copy using Google Gemini, preview the result in a responsive interface with an interactive 3D experience, and view their generated project from a dashboard.

## Live Demo

https://ai-landing-page-generator-rho.vercel.app/

## GitHub Repository

https://github.com/WajeehaAhsan46/ai-landing-page-generator

## Project Brief

The AI Landing Page Generator helps founders, students, developers, and small businesses quickly turn a product idea into a starting landing-page concept. Instead of writing landing-page copy from scratch, users provide a short product description and the application uses Google Gemini to generate structured content including a headline, badge, description, call-to-action, and three feature sections. The goal is to reduce the time required to create an initial landing-page concept while keeping the experience simple, responsive, and interactive.

## Features

- Real AI-powered landing-page content generation using Google Gemini
- Context-aware content based on the user's product or business description
- AI-generated headline, badge, description, CTA, and feature sections
- Structured JSON response from the AI model
- Validation of AI-generated content before displaying it
- Input validation and character limits
- Friendly handling of AI service errors
- Rate-limit handling for Gemini free-tier limits
- Retry handling for temporary AI service failures
- Interactive Generate button with loading, success, and error states
- Generated content saved with localStorage
- Project dashboard with saved landing-page information
- Full responsive landing-page preview
- Interactive 3D web experience
- Responsive desktop and mobile design
- Health-check API endpoint
- Production deployment with Vercel

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page and application introduction |
| `/generate` | Describe a product and generate AI landing-page content |
| `/preview` | View the generated landing page and interactive 3D experience |
| `/dashboard` | View the saved generated project |
| `/templates` | Explore predefined landing-page templates |
| `/settings` | Application settings |
| `/health` | Application health status |
| `/api/health` | Health-check API endpoint |
| `/api/generate` | Server-side Gemini AI generation endpoint |

## How It Works

1. The user enters a product or business description.
2. The application validates the input.
3. The description is sent to the server-side generation endpoint.
4. Google Gemini processes the description using a structured prompt.
5. Gemini returns landing-page content in JSON format.
6. The server validates the returned structure before sending it to the frontend.
7. The generated result is displayed on the Generate page.
8. The generated landing page is saved locally in the browser.
9. The user can open the Preview page to view the complete landing page and 3D experience.
10. The Dashboard displays the saved generated project.

## AI Integration

Google Gemini is the core AI feature of the application.

The generation flow uses the Google Gemini API through the `@google/genai` SDK.

The application sends the user's product description together with a structured prompt that instructs the model to return:

- A compelling landing-page title
- A short badge
- A supporting description
- A call-to-action
- Exactly three feature sections

The model is requested to return JSON instead of free-form text. The server then parses and validates the response before returning it to the frontend.

### Why AI is Used

AI is meaningfully integrated into the core user workflow rather than being used only as a decorative feature.

The main value of the application is that users do not have to manually write their initial landing-page copy. Gemini generates content based on the specific product description provided by the user.

### AI Prompting Approach

The generation prompt gives Gemini:

- The role of an expert landing-page copywriter and product designer
- The required JSON structure
- Content quality requirements
- A requirement to create exactly three features
- Instructions to focus on user benefits
- Instructions to avoid unrealistic claims
- The user's product description

This makes the AI output predictable enough for the frontend to consume safely.

## AI Error Handling and Resilience

The application includes several safeguards around AI generation.

### Input Validation

- Empty descriptions are rejected.
- Descriptions longer than 1000 characters are rejected.
- Invalid requests return appropriate HTTP error responses.

### Structured Output Validation

The server verifies that the AI response contains:

- `title`
- `badge`
- `description`
- `cta`
- Exactly three `features`
- A title and description for each feature

Invalid AI responses are rejected instead of being rendered directly.

### Temporary AI Failures

Temporary Gemini failures are retried with a short delay.

### Rate Limiting

Gemini free-tier requests can be rate-limited. When a `429` quota/rate-limit response occurs, the application returns a clear message asking the user to wait before trying again.

### Safe Failure States

The API handles cases such as:

- Missing API configuration
- Invalid user input
- Rate limits
- Temporary service failures
- Empty AI responses
- Invalid JSON responses
- Incomplete AI-generated content
- Unexpected server errors

## Button Motion & Interaction

The Generate Landing Page button uses short transitions to communicate state changes clearly.

- **Idle:** Ready to generate a landing page.
- **Loading:** Displays a spinner and prevents repeated clicks.
- **Success:** Displays a completion state before returning to idle.
- **Error:** Displays an error state and allows the user to retry.
- **Accessibility:** Includes keyboard focus styling and reduced-motion support.
- **Animation:** Uses short transform and opacity transitions to avoid unnecessary layout changes.

## 3D Experience

The Preview page includes an interactive 3D experience built with React Three Fiber and Three.js.

The experience includes:

- Lightweight procedural geometry
- Interactive material/color changes
- Camera/orbit interaction
- Lazy loading with a loading fallback
- Responsive rendering
- Reduced-motion consideration
- Device pixel ratio capped between 1 and 1.5 to reduce GPU workload

The scene intentionally uses simple geometry and a small number of lights instead of large external 3D assets.

## Accessibility & Performance

Accessibility and performance were considered during development.

The application includes:

- Keyboard-focusable interactive controls
- Visible focus states
- Reduced-motion support for animated interactions
- Responsive layouts for different screen sizes
- Loading fallbacks for the 3D experience
- Lightweight procedural 3D geometry
- Capped device pixel ratio for reduced GPU workload
- Server-side API handling for the Gemini key

A formal Lighthouse/WCAG audit should be performed before a final production release to measure the application against the target accessibility and performance thresholds.

## Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Google Gemini API
- `@google/genai`
- Three.js
- React Three Fiber
- React Three Drei
- Vercel
- GitHub

## Architecture

```text
User
  ↓
Next.js Frontend
  ↓
/api/generate
  ↓
Google Gemini API
  ↓
Structured JSON
  ↓
Validation
  ↓
Generated Landing Page
  ↓
Preview / Dashboard