import { redirect } from "next/navigation";
import { db } from "../../../db";

export default function Page() {
    // Create server action to post the form contents to the db
    // vs usual react client function that will slow things down with JS on the client, then need to contact the db, then make the request, then bounce back to the client
    const createExpenseItem = async (formData: FormData) => {
        "use server";
        // Takes a type FormData as param

        const item = formData.get("item") as string; // FormData.get returns a FormDataEntryValue that is either type File or string. We can then make the compiler confirm that what we get is string cos we know we only accept string in our form
        const description = formData.get("description") as string;

        const expenseItem = await db.expenseItem.create({
            data: {
                item,
                description,
            },
        });

        console.log("Created: " + expenseItem);

        redirect("/");
    };

    return (
        <>
            <form action={createExpenseItem}>
                <h1>Create an Expense Item</h1>

                <label>Item: </label>
                <input id="item" name="item" />
                <br />

                <label>Description: </label>
                <input id="description" name="description" />
                <br />

                <button type="submit">Create Expense Item</button>
            </form>
        </>
    );
}
