"use client";

import {
	TableHeader,
	TableColumn,
	TableRow,
	Spinner,
	Button,
	Link,
	useDisclosure,
} from "@nextui-org/react";
import { Table, TableBody, TableCell, getKeyValue } from "@nextui-org/react";
import type { MyFormsTableProps } from "@/interfaces";
import { MyFormsColumns } from "@/constants";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTranslations } from "next-intl";
import { useRef, type FC } from "react";
import { ModalWithFillForms } from "./ModalWithFillForms";
import { useRouter } from "next/navigation";
import { useSortableList, type GenericItem } from "@/hooks/useSortableList";

export const MyFormsTable: FC<MyFormsTableProps> = ({ forms }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const { isLoading, list } = useSortableList({
		items: forms as unknown as GenericItem[],
	});

	const formIdRef = useRef(0);
	const router = useRouter();

	const t = useTranslations("myFormsTable");

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
				<Button
					variant="bordered"
					radius="sm"
					color="primary"
					onClick={() =>
						formIdRef.current !== 0 && formIdRef.current && onOpen()
					}
				>
					{t("seeAnswers")}
				</Button>
				<Button
					variant="bordered"
					color="primary"
					radius="sm"
					isIconOnly
					onClick={() => {
						formIdRef.current !== 0 &&
							formIdRef.current &&
							router.push(`dashboard/edit-form/${formIdRef.current}`);
					}}
				>
					<MdEdit size={20} />
				</Button>
				<Button variant="bordered" color="danger" radius="sm" isIconOnly>
					<MdDelete size={20} />
				</Button>
			</div>
			<div className="w-full flex justify-center mt-5">
				<Table
					aria-label="Admin Table"
					onSelectionChange={(keys) => {
						//@ts-ignore
						formIdRef.current = [...keys][0];
					}}
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
							<TableRow key={item.formId as React.Key}>
								{(columnKey) => (
									<TableCell className="lg:text-lg">
										{columnKey === "questions" ? (
											<ul className="list-disc list-inside">
												{/* @ts-ignore */}
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
			<ModalWithFillForms
				formId={formIdRef.current}
				isOpen={isOpen}
				onOpen={onOpen}
				onOpenChange={onOpenChange}
			/>
		</>
	);
};
