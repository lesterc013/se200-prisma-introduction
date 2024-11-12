// Read db data to extract the rows
import { db } from "../db";

export default async function Page() {
    const expenseItems = await db.expenseItem.findMany();

    return (
        <>
            <div>
                {expenseItems.map((expenseItem) => (
                    <div id={`${expenseItem.id}`}>{expenseItem.item}</div>
                ))}
            </div>
        </>
    );
}
