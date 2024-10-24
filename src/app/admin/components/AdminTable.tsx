"use client";

import {
	Button,
	getKeyValue,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import { columns } from "../constants/TableColumns";
import { type Key, useRef, useState } from "react";
import type { Users } from "@/interfaces";
import { FaUnlock, FaLock } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
	handleBlockUser,
	handleDeleteUser,
	handleSwitchUserRole,
	handleUnlockUser,
} from "../utils";

export const AdminTable = ({ data }: { data: Users[] }) => {
	const selectedIdsRef = useRef<Set<Key> | "all">(new Set<Key>());
	const [users, setUsers] = useState<Users[]>(data);

	const handleSelectionChange = (keys: "all" | Set<Key>) => {
		selectedIdsRef.current = keys === "all" || keys.size > 0 ? keys : new Set();
	};

	return (
		<>
			<h1 className="text-center mt-6 text-xl sm:text-2xl md:text-3xl font-semibold">
				Admin Table 🚀
			</h1>
			<div className="w-[95%] flex justify-end gap-2 mt-3 mx-auto max-w-[1280px]">
				<Button
					radius="sm"
					onClick={() =>
						handleSwitchUserRole(selectedIdsRef.current, data, setUsers)
					}
					color="primary"
					variant="flat"
					className="font-semibold"
				>
					Switch Role
				</Button>
				<Button
					radius="sm"
					//onClick={}
					color="primary"
					variant="flat"
					className="font-semibold"
				>
					Forms
				</Button>

				<Button
					color="primary"
					variant="flat"
					radius="sm"
					onClick={() =>
						handleBlockUser(selectedIdsRef.current, data, setUsers)
					}
					isIconOnly
				>
					<FaLock size={16} />
				</Button>
				<Button
					color="primary"
					variant="flat"
					radius="sm"
					onClick={() =>
						handleUnlockUser(selectedIdsRef.current, data, setUsers)
					}
					isIconOnly
				>
					<FaUnlock size={16} />
				</Button>

				<Button
					radius="sm"
					onClick={() =>
						handleDeleteUser(selectedIdsRef.current, data, setUsers)
					}
					color="danger"
					variant="flat"
					isIconOnly
				>
					<MdDelete size={20} />
				</Button>
			</div>
			<div className="w-full flex justify-center mt-5">
				<Table
					className="w-[95%] max-w-[1280px]"
					aria-label="Admin Table"
					onSelectionChange={handleSelectionChange}
					radius="lg"
					color="primary"
					selectionMode="multiple"
				>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key}>{column.label}</TableColumn>
						)}
					</TableHeader>
					<TableBody emptyContent="No users to display." items={users}>
						{(row) => (
							<TableRow key={row.id}>
								{(columnKey) => (
									<TableCell>{getKeyValue(row, columnKey)}</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</>
	);
};
