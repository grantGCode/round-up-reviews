import { NextResponse } from "next/server";
import db from "../../../db/db";

export async function GET() {
    const productDetails = await new Promise((resolve, reject) => {
        const sql = `SELECT 
                product.id, product.product_name, vender.vender_name, image_path
                FROM product
                INNER JOIN vender
                ON product.vender_id = vender.id;`
        db.query(sql, (err: unknown, productDetails: []) => {
            if (err) {
                reject(err);
            } else {
                resolve(productDetails);
            }
        });
    });
    return NextResponse.json(productDetails)

};