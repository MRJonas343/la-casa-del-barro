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
import type { MyFormsTableProps, UserForms } from "@/interfaces";
import { MyFormsColumns } from "@/constants";
import { useAsyncList } from "@react-stately/data";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslations } from "next-intl";
import { useState, type FC } from "react";

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
						<TableColumn allowsSorting key="formName" className="lg:text-lg">
							Form Name
						</TableColumn>
						<TableColumn allowsSorting key="topic" className="lg:text-lg">
							Topic
						</TableColumn>
						<TableColumn allowsSorting key="questions" className="lg:text-lg">
							Questions
						</TableColumn>
					</TableHeader>
					<TableBody
						items={list.items}
						isLoading={isLoading}
						loadingContent={<Spinner size="lg" label="Loading..." />}
					>
						{(item) => (
							<TableRow key={item.formId}>
								{(columnKey) => (
									<TableCell className="lg:text-lg">
										{columnKey === "questions" ? (
											<ul className="list-disc list-inside">
												{item.questions?.map((question) => (
													<li key={question}>
														{question || "No question available"}
													</li>
												))}
											</ul>
										) : (
											getKeyValue(item, columnKey)
										)}
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
