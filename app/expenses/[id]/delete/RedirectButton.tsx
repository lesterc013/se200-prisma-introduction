"use client";

import redirectFunction from "./redirectFunction";
import { redirect } from "next/navigation";

const RedirectButton = ({ buttonName }: { buttonName: string }) => {
    return <button onClick={async () => redirect("/")}>{buttonName}</button>;
};

export default RedirectButton;
