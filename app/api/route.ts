import { NextResponse } from "next/server";
import db from "../../db/db";

export async function GET() {
    const result = await new Promise((resolve, reject) => {
        const sql = `SELECT 
            reviews.id, product.product_name, reviews.star_rating, vender.vender_name, reviews.written_comment
            FROM reviews 
            INNER JOIN product
            ON reviews.product_id = product.id
            INNER JOIN vender
            ON product.vender_id = vender.id;`
        db.query(sql, (err: unknown, result: []) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
    return NextResponse.json(result)
};