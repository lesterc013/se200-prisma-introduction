/// Update functionality

// Extract this id's data first
// Use the same form structure in "new" path
// Populate the values in "item" and "description" with what we extracted
// Change submit button to be update
// Create a server action that updates that row instead of creating
// Redirect back to home page once done

import { redirect } from "next/navigation";
import { db } from "../../../../db";

export default async function Page({ params }) {
    const id: number = parseInt((await params).id);

    const currentItem = await db.expenseItem.findUnique({
        where: {
            id: id,
        },
    });

    const updateExpenseItem = async (formData: FormData) => {
        "use server";
        const item = formData.get("item") as string;
        const description = formData.get("description") as string;

        const updatedItem = await db.expenseItem.update({
            where: {
                id: id,
            },
            data: {
                item,
                description,
            },
        });

        console.log("Updated item: " + updatedItem);

        redirect("/");
    };

    return (
        <>
            <form action={updateExpenseItem}>
                <h1>Create an Expense Item</h1>

                <label>Item: </label>
                <input id="item" name="item" defaultValue={currentItem.item} />
                <br />

                <label>Description: </label>
                <input
                    id="description"
                    name="description"
                    defaultValue={currentItem.description}
                />
                <br />

                <button type="submit">Update Expense Item</button>
            </form>
        </>
    );
}
