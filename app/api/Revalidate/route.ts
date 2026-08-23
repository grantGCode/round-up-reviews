import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
    const secret = req.nextUrl.searchParams.get("secret");

    if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    revalidateTag("Products");
    revalidateTag("Reviews");
    revalidatePath("/");

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
