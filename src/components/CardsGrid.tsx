"use client";

import type { FormCardProps } from "@/interfaces";
import { FormCard } from ".";

export interface CardsGridProps {
	cardsData: FormCardProps[];
}

export const CardsGrid = ({ cardsData }: CardsGridProps) => {
	return (
		<div className="w-full flex flex-col items-center">
			<section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center w-full lg:w-[80%] max-w-[1300px]">
				{cardsData.map((card) => (
					<FormCard
						key={card.id}
						id={card.id}
						title={card.title}
						authorName={card.authorName}
						likes={card.likes}
						imageUrl={card.imageUrl}
					/>
				))}
			</section>
		</div>
	);
};
