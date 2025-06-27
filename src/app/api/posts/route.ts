import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("posts-db");
  const posts = await db.collection("posts").find({}).toArray();

  return NextResponse.json(posts);
}
