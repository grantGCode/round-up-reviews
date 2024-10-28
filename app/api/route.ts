import { NextResponse } from "next/server";
import db from "../../db/db";

export async function GET() {
        const result = await new Promise((resolve, reject) => {
            const sql = "SELECT * FROM reviews"
            db.query(sql, (err: unknown, result: []) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
            );
        });
    return NextResponse.json(result)
}