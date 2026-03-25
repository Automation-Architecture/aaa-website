import { NextResponse } from "next/server";
import { globalConfig } from "@/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email : "";
    const password = typeof body?.password === "string" ? body.password : "";

    if (email !== globalConfig.MOCK_EMAIL || password !== globalConfig.MOCK_PASSWORD) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
      user: {
        id: "mock-user-1",
        email: globalConfig.MOCK_EMAIL,
        name: "Example User",
      },
      token: "mock-token",
    });
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }
}
