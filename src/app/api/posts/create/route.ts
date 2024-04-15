import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log(body);

    const posts = await db.post.create({
      data: {
        name: body.name,
        content: body.content,
        tagId: body.tagId,
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "could not create Posts" },
      { status: 500 }
    );
  }
}
