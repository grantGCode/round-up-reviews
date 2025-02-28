import { NextRequest, NextResponse } from "next/server";
import db from "../../../db/db";

export async function GET() {
    const ratings = await new Promise((resolve, reject) => {
        //Original quey
        const sql = `SELECT 
            reviews.id, product.product_name, product.id AS product_id, reviews.star_rating, vender.vender_name, reviews.written_comment
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

export async function POST(req: NextRequest) {

    const { product_id, star_rating, written_comment } = await req.json();

    if (!product_id || !star_rating || !written_comment) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const sql = `INSERT INTO reviews (product_id, star_rating, written_comment) VALUES (?, ?, ?);`;
    
    const newReview = await new Promise((resolve, reject) => {
        db.query(sql, [product_id, star_rating, written_comment], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })

    return NextResponse.json({ message: "Review added successfully", newReview}, { status: 201 });
};