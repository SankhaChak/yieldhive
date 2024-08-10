import { NextResponse } from "next/server";
import { ENV } from "../../../../utils/config/env";

export async function POST(
  req: Request,
  { params }: { params: { routes: string[] } }
) {
  const apiUrl = "https://api.g.alchemy.com";
  const apiKey = ENV.NEXT_PUBLIC_ALCHEMY_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "ALCHEMY_API_KEY is not set" },
      { status: 500 }
    );
  }

  const body = await req.json();

  const res = await fetch(apiUrl + `/${params.routes.join("/")}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json(await res.json().catch(() => ({})), {
      status: res.status,
    });
  }

  return NextResponse.json(await res.json());
}
