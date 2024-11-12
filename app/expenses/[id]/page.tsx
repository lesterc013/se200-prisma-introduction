// Extract the id from the route
// Use that to find the specific row
// Render that
import { db } from "../../../db";

export default async function Page({ params }) {
    const id: number = parseInt((await params).id);

    const expenseItem = await db.expenseItem.findUnique({
        where: {
            id: id,
        },
    });

    console.log("expense item " + expenseItem);

    return (
        <>
            <div>
                <h1>{expenseItem.item}</h1>
                <p>{expenseItem.description}</p>
            </div>
        </>
    );
}
