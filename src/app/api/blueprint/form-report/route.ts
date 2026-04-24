import { NextResponse } from "next/server";

const PIPELINE_IQ_API = "https://www.pipelineiq.app/api/n8n/form-report";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const upstream = await fetch(PIPELINE_IQ_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await upstream.text();
    let payload: unknown = null;
    try {
      payload = text ? JSON.parse(text) : null;
    } catch {
      payload = text || null;
    }

    return NextResponse.json(payload ?? {}, { status: upstream.status });
  } catch (err) {
    console.error("[blueprint/form-report] Proxy error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
