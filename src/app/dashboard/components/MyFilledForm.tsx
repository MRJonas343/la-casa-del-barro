"use client";

import { FilledFormsColumns } from "@/constants";
import type { FilledForm } from "@/interfaces";
import {
	getKeyValue,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const MyFilledForm = ({
	filledForms,
}: { filledForms: FilledForm[] }) => {
	const [isLoading, setIsLoading] = useState(true);

	const router = useRouter();

	const { data: session } = useSession();

	const list = useAsyncList({
		async load() {
			setIsLoading(false);
			return {
				items: filledForms,
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

	const gotoForm = (formId: number) => {
		if (!formId || !session?.user) return;
		router.push(`/filled-form/${formId}/${session.user.id}`);
	};

	return (
		<>
			<section className="w-full flex justify-center mt-3">
				<Table
					aria-label="Admin Table"
					//@ts-ignore
					onSelectionChange={(keys) => gotoForm([...keys][0])}
					radius="md"
					color="primary"
					selectionMode="single"
					className="w-[95%] max-w-[1280px]"
					sortDescriptor={list.sortDescriptor}
					onSortChange={list.sort}
				>
					<TableHeader columns={FilledFormsColumns}>
						<TableColumn allowsSorting key="formName" className="lg:text-lg">
							Form Name
						</TableColumn>
						<TableColumn allowsSorting key="topic" className="lg:text-lg">
							Topic
						</TableColumn>
						<TableColumn allowsSorting key="filledAt" className="lg:text-lg">
							Filled At
						</TableColumn>
					</TableHeader>
					<TableBody
						items={list.items}
						isLoading={isLoading}
						loadingContent={<Spinner size="lg" label="Loading..." />}
					>
						{(item) => (
							<TableRow key={item.formId} className="cursor-pointer">
								{(columnKey) => (
									<TableCell>{getKeyValue(item, columnKey)}</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			</section>
		</>
	);
};
