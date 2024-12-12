import { NextResponse } from "next/server";
import db from "../../../db/db";

export async function GET() {
    const productDetails = await new Promise((resolve, reject) => {
        const sql = `SELECT 
                product.id, product.product_name, vender.vender_name
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

    const ratings = await new Promise((resolve, reject) => {
        //Original quey
        const sql = `SELECT 
            reviews.id, product.product_name, reviews.star_rating, vender.vender_name, reviews.written_comment
            FROM reviews 
            INNER JOIN product
            ON reviews.product_id = product.id
            INNER JOIN vender
            ON product.vender_id = vender.id;`
        db.query(sql, (err: unknown, ratingDetails: []) => {
            if (err) {
                reject(err);
            } else {
                resolve(ratingDetails);
            }
        });
    });
    return NextResponse.json(ratings)
};