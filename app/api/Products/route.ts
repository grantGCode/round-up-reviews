import { NextResponse } from "next/server";
import db from "../../../db/db";

export async function GET() {
    const productDetails = await new Promise((resolve, reject) => {
        const sql = `SELECT 
                product.id, product.product_name, vendor.vendor_name, image_path, product.price
                FROM product
                INNER JOIN vendor
                ON product.vendor_id = vendor.id;`
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
