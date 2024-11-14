// Extract the id from the route
// Server action to delete this id from the db - tagged to Yes button
// No button action should redirect to root
import { db } from "../../../../db";
import DeleteButton from "./DeleteButton";
import RedirectButton from "./RedirectButton";

export default async function Page({ params }) {
    const id: number = parseInt((await params).id);

    const expenseItem = await db.expenseItem.findUnique({
        where: {
            id: id,
        },
    });

    return (
        <>
            <div>
                <h1>Are you sure you want to delete {expenseItem.item}?</h1>
                <DeleteButton buttonName="yes" itemId={id} />
                <RedirectButton buttonName="no" />
            </div>
        </>
    );
}
