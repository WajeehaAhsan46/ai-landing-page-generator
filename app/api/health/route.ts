export async function GET() {
  return Response.json({
    status: "healthy",
    service: "AI Landing Page Generator",
    timestamp: new Date().toISOString(),
  });
}