"use client";

import {
	TableHeader,
	TableColumn,
	TableRow,
	Spinner,
	Button,
	Link,
} from "@nextui-org/react";
import { Table, TableBody, TableCell, getKeyValue } from "@nextui-org/react";
import { MyFormsColumns, myFormsExamples } from "@/constants";
import { useAsyncList } from "@react-stately/data";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslations } from "next-intl";
import { useState, type FC } from "react";
import type { UserForms } from "@/interfaces";

interface MyFormsTableProps {
	forms: UserForms[];
}

export const MyFormsTable: FC<MyFormsTableProps> = ({ forms }) => {
	const [formsState, setFormsState] = useState<UserForms[]>(forms);
	const [isLoading, setIsLoading] = useState(true);
	const t = useTranslations("myFormsTable");

	const list = useAsyncList({
		async load() {
			setIsLoading(false);
			return {
				items: formsState,
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
		<>
			<div className="mt-4 sm:mt-0 w-full sm:w-[95%] justify-center flex max-w-[1280px] mx-auto px-5 sm:justify-end gap-2">
				<Button
					variant="shadow"
					color="primary"
					as={Link}
					href="/dashboard/new-form"
					radius="sm"
					className="font-semibold"
				>
					{t("newForm")}
				</Button>
				<Button variant="bordered" radius="sm" color="primary">
					{t("seeAnswers")}
				</Button>
				<Button variant="bordered" color="primary" radius="sm" isIconOnly>
					<MdEdit size={20} />
				</Button>
				<Button variant="bordered" color="danger" radius="sm" isIconOnly>
					<MdDelete size={20} />
				</Button>
			</div>
			<div className="w-full flex justify-center mt-5">
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
							key="title"
							align="start"
							className="lg:text-lg"
						>
							{t("name")}
						</TableColumn>
						<TableColumn
							allowsSorting
							key="likes"
							align="center"
							className="lg:text-lg"
						>
							{t("likes")}
						</TableColumn>
						<TableColumn
							allowsSorting
							key="totalAnswers"
							align="center"
							className="lg:text-lg"
						>
							{t("totalAnswers")}
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
			</div>
		</>
	);
};
