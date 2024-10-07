"use client";

import { TableHeader, TableColumn, TableRow, Spinner } from "@nextui-org/react";
import { Table, TableBody, TableCell, getKeyValue } from "@nextui-org/react";
import { MyFormsColumns, myFormsExamples } from "@/constants";
import { useAsyncList } from "@react-stately/data";
import { useState } from "react";

export const MyFormsTable = () => {
	const [isLoading, setIsLoading] = useState(true);

	const list = useAsyncList({
		async load() {
			//*TODO USE THE DATA COMING FROM THE PARENT COMPONENT
			setIsLoading(false);
			return {
				items: myFormsExamples,
			};
		},
		async sort({ items, sortDescriptor }) {
			const columnKey = sortDescriptor.column as keyof (typeof items)[0];

			return {
				items: items.sort((a, b) => {
					const first = a[columnKey];
					const second = b[columnKey];

					const cmp =
						(Number.parseInt(first as string) || first) <
						(Number.parseInt(second as string) || second)
							? -1
							: 1;

					return sortDescriptor.direction === "descending" ? -cmp : cmp;
				}),
			};
		},
	});

	return (
		<Table
			aria-label="Admin Table"
			onSelectionChange={() => {}}
			radius="md"
			color="primary"
			selectionMode="single"
			className="w-[95%] max-w-[1280px]"
			sortDescriptor={list.sortDescriptor}
			onSortChange={list.sort}
		>
			<TableHeader columns={MyFormsColumns}>
				<TableColumn
					allowsSorting
					key="name"
					align="start"
					className="lg:text-lg"
				>
					Name
				</TableColumn>
				<TableColumn
					allowsSorting
					key="likes"
					align="center"
					className="lg:text-lg"
				>
					Likes
				</TableColumn>
				<TableColumn
					allowsSorting
					key="totalAnswers"
					align="center"
					className="lg:text-lg"
				>
					Total Answers
				</TableColumn>
			</TableHeader>
			<TableBody
				items={list.items}
				isLoading={isLoading}
				loadingContent={<Spinner size="lg" label="Loading..." />}
			>
				{(item) => (
					<TableRow key={item.id}>
						{(columnKey) => (
							<TableCell className="lg:text-lg">
								{getKeyValue(item, columnKey)}
							</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};
