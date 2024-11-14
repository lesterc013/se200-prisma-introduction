"use server";
import { redirect } from "next/navigation";
import { db } from "../../../../db";

export default async function deleteFunction(id: number) {
    const deleted = await db.expenseItem.delete({
        where: {
            id: id,
        },
    });
    console.log("deleted item: " + deleted);
    redirect("/");
}
