"use server";
import { redirect } from "next/navigation";
import { db } from "../../../../db";

export default async function redirectFunction() {
    redirect("/");
}
