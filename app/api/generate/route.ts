import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

type LandingPage = {
  title: string;
  badge: string;
  description: string;
  cta: string;
  features: {
    title: string;
    description: string;
  }[];
};

function isValidLandingPage(value: unknown): value is LandingPage {
  if (!value || typeof value !== "object") return false;

  const page = value as Record<string, unknown>;

  if (
    typeof page.title !== "string" ||
    typeof page.badge !== "string" ||
    typeof page.description !== "string" ||
    typeof page.cta !== "string" ||
    !Array.isArray(page.features) ||
    page.features.length !== 3
  ) {
    return false;
  }

  return page.features.every((feature) => {
    if (!feature || typeof feature !== "object") return false;

    const item = feature as Record<string, unknown>;

    return (
      typeof item.title === "string" &&
      typeof item.description === "string"
    );
  });
}

export async function POST(request: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        {
          error: "AI service is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const description =
      typeof body.description === "string"
        ? body.description.trim()
        : "";

    if (!description) {
      return NextResponse.json(
        {
          error: "Please provide a product or business description.",
        },
        { status: 400 }
      );
    }

    if (description.length > 1000) {
      return NextResponse.json(
        {
          error: "Description must be 1000 characters or less.",
        },
        { status: 400 }
      );
    }

    const prompt = `
You are an expert landing-page copywriter and product designer.

Transform the user's product or business description into high-quality
landing-page content.

Return ONLY valid JSON.
Do not use markdown.
Do not use code fences.
Do not add explanations outside the JSON.

The JSON must have exactly this structure:

{
  "title": "A compelling landing page headline",
  "badge": "A short category or value label",
  "description": "A concise supporting description",
  "cta": "A short call-to-action",
  "features": [
    {
      "title": "Feature 1",
      "description": "Short benefit-focused description"
    },
    {
      "title": "Feature 2",
      "description": "Short benefit-focused description"
    },
    {
      "title": "Feature 3",
      "description": "Short benefit-focused description"
    }
  ]
}

Requirements:
- Make the content specific to the user's product.
- Keep the title concise and compelling.
- Keep the badge short.
- Keep the CTA short.
- Create exactly 3 features.
- Focus on user benefits.
- Do not invent unrealistic claims.
- Do not include HTML.

User's product or business description:

${description}
`;

    let response:
      | Awaited<ReturnType<typeof ai.models.generateContent>>
      | null = null;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          },
        });

        break;
      } catch (error) {
        console.error(
          `Gemini attempt ${attempt} failed:`,
          error
        );

        const errorMessage =
          error instanceof Error
            ? error.message
            : String(error);

        if (
          errorMessage.includes("429") ||
          errorMessage.includes("RESOURCE_EXHAUSTED") ||
          errorMessage.includes("quota")
        ) {
          return NextResponse.json(
            {
              error:
                "AI generation is temporarily rate-limited. Please wait about 30 seconds and try again.",
            },
            { status: 429 }
          );
        }

        if (attempt === 3) {
          throw error;
        }

        await new Promise((resolve) =>
          setTimeout(resolve, attempt * 2000)
        );
      }
    }

    if (!response) {
      return NextResponse.json(
        {
          error: "AI service did not return a response.",
        },
        { status: 502 }
      );
    }

    const text = response.text;

    if (!text) {
      return NextResponse.json(
        {
          error: "AI returned an empty response.",
        },
        { status: 502 }
      );
    }

    let parsed: unknown;

    try {
      parsed = JSON.parse(text);
    } catch {
      return NextResponse.json(
        {
          error: "AI returned invalid structured content.",
        },
        { status: 502 }
      );
    }

    if (!isValidLandingPage(parsed)) {
      return NextResponse.json(
        {
          error: "AI returned incomplete landing-page content.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      landingPage: parsed,
    });
  } catch (error) {
    console.error("AI generation error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to generate the landing page right now. Please try again.",
      },
      { status: 500 }
    );
  }
}