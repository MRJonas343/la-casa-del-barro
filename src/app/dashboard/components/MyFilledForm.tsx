"use client";

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
import { FilledFormsColumns } from "@/constants";
import type { FilledForm } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSortableList, type GenericItem } from "@/hooks/useSortableList";

export const MyFilledForm = ({
	filledForms,
}: { filledForms: FilledForm[] }) => {
	const { isLoading, list } = useSortableList({
		items: filledForms as unknown as GenericItem[],
	});

	const router = useRouter();

	const { data: session } = useSession();

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
							<TableRow
								key={item.formId as React.Key}
								className="cursor-pointer"
							>
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
