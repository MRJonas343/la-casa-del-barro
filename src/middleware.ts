import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest) {
	const session = await auth();
	console.log(session);

	if (session?.user.status === "blocked") {
		return NextResponse.redirect(new URL("/blocked", request.url));
	}

	return NextResponse.redirect(new URL("/home", request.url));
}
