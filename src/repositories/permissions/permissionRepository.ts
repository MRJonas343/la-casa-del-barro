import { db } from "@/db";
import { formPermissions, users } from "@/db/schemas";
import { and, eq, inArray } from "drizzle-orm";

type Permission = {
	form_id: number;
	user_id: number;
};

const createPermissions = async (permissions: Permission[]) => {
	for (const permission of permissions) {
		const exists = await db
			.select()
			.from(formPermissions)
			.where(
				and(
					eq(formPermissions.form_id, permission.form_id),
					eq(formPermissions.user_id, permission.user_id),
				),
			)
			.limit(1);
		if (exists.length === 0) {
			await db.insert(formPermissions).values(permission);
		}
	}
};

const getPermission = async (formId: number, userId: number) => {
	const result = await db.query.formPermissions.findFirst({
		where: and(
			eq(formPermissions.form_id, formId),
			eq(formPermissions.user_id, userId),
		),
	});

	return result;
};

const getUsersWithPermissions = async (formId: number) => {
	const result = await db
		.select({
			id: users.id,
			name: users.name,
			email: users.email,
		})
		.from(users)
		.innerJoin(formPermissions, eq(formPermissions.user_id, users.id))
		.where(eq(formPermissions.form_id, formId));

	return result;
};

const deletePermissionsByFormId = async (
	formId: number,
	usersIds: number[],
) => {
	const result = await db
		.delete(formPermissions)
		.where(
			and(
				eq(formPermissions.form_id, formId),
				inArray(formPermissions.user_id, usersIds),
			),
		);

	return result;
};

export const permissionRepository = {
	getUsersWithPermissions,
	getPermission,
	createPermissions,
	deletePermissionsByFormId,
};
