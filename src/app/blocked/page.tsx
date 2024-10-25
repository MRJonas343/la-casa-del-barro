import { ForceLogOut } from "@/components/ForceLogOut";

export default function page() {
	return (
		<div className="flex w-full mt-10 justify-center text-center text-3xl font-semibold">
			Sorry bro you are blocked 😭<ForceLogOut />
		</div>
	);
}
