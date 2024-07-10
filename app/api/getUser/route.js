import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOption } from "@/lib/authOption";

export async function GET() {
  const session = await getServerSession(authOption);

  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 400 });
  }

  return NextResponse.json({ success: session }, { status: 200 });
}
