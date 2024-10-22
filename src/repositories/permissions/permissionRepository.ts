import { db } from "@/db";
import { formPermissions } from "@/db/schemas";
import { and, eq } from "drizzle-orm";

type Permission = {
	form_id: number;
	user_id: number;
};

const createPermissions = async (permissions: Permission[]) => {
	const result = await db.insert(formPermissions).values(permissions);
	return result;
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

export const permissionRepository = {
	getPermission,
	createPermissions,
};
