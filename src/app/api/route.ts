import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET ok" });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: "POST ok", data: body });
}

export async function PUT(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: "PUT ok", data: body });
}

export async function DELETE() {
  return NextResponse.json({ message: "DELETE ok" });
}
