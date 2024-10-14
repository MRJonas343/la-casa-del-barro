"use client";

import { useInView } from "react-intersection-observer";
import type { FormCardProps } from "@/interfaces";
import { FormCard } from ".";
import { useRef, useState } from "react";
import { getLatestForms } from "@/services/forms/getLatestForms";
import { Spinner } from "@nextui-org/react";

export interface CardsGridProps {
	cardsData: FormCardProps[];
}

export const CardsGrid = ({ cardsData }: CardsGridProps) => {
	const [cards, setCards] = useState<FormCardProps[]>(cardsData);
	const [loading, setLoading] = useState(false);
	const pageRef = useRef(1);

	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	const loadMore = async () => {
		if (loading) return;
		setLoading(true);
		pageRef.current += 1;
		const newForms = await getLatestForms(pageRef.current, 10);
		setCards((prev) => [...prev, ...newForms]);
		setLoading(false);
	};

	if (inView) {
		loadMore();
	}

	return (
		<div className="w-full flex flex-col items-center">
			<section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center w-full lg:w-[90%] max-w-[1300px]">
				{cards.map((card) => (
					<FormCard
						key={card.id}
						id={card.id}
						title={card.title}
						author={card.author}
						likes={card.likes}
						imageUrl={card.imageUrl}
					/>
				))}
				<div ref={ref} className="h-10" />
			</section>
			{loading && <Spinner size="lg" />}
		</div>
	);
};
