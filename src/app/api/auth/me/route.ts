import { NextResponse } from "next/server";
import { globalConfig } from "@/config";

export async function GET() {
  return NextResponse.json({
    user: {
      id: "mock-user-1",
      email: globalConfig.MOCK_EMAIL,
      name: "Example User",
    },
  });
}
