'use server'

export async function submitNewRating(formData: FormData): Promise<void> {
    
    const product_id = Number(formData.get("product_id"));
    const star_rating = formData.get("star_rating") ? Number(formData.get("star_rating")) : undefined;
    const written_comment = formData.get("written_comment") as string | null;

    try{
        const res = await fetch('http://localhost:3000/api/Reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id, star_rating, written_comment }),
        })
    
        if (!res.ok) {
            throw new Error("Failed to submit rating");
        }

        console.log("Review submitted successfully!");
        return await res.json()
    } catch (error) {
        console.error("Failed to submit review:", error);
    }
  };