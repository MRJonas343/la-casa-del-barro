"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Guard({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const { data: session } = useSession();

	useEffect(() => {
		if (session?.user?.status === "blocked") {
			router.push("/blocked");
		}
	}, [session, router]);

	return <>{children}</>;
}
