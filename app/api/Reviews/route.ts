import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from 'next/cache';
import db from "../../../db/db";

export async function GET() {
    const ratings = await new Promise((resolve, reject) => {
        const sql = `SELECT 
            reviews.id, product.product_name, product.id AS product_id, reviews.star_rating, vendor.vendor_name, reviews.written_comment
            FROM reviews 
            INNER JOIN product
            ON reviews.product_id = product.id
            INNER JOIN vendor
            ON product.vendor_id = vendor.id;`
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

    if (!product_id || !star_rating ) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const sql = `INSERT INTO reviews (product_id, star_rating, written_comment) VALUES (?, ?, ?);`;
    
    const newReview = await new Promise((resolve, reject) => {
        db.query(sql, [product_id, star_rating, written_comment], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })

    revalidatePath('/api/Reviews');
    revalidatePath('/api/Products');

    return NextResponse.json({ message: "Review added successfully", newReview}, { status: 201 });
};