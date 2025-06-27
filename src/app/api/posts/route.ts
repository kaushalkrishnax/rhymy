import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";

import clientPromise from "@/lib/mongodb";
import { ApiResponse } from "@/utils/ApiResponse";
import { ApiError } from "@/utils/ApiError";

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("posts-db");

    const { searchParams } = new URL(request.url);
    const id: string | null = searchParams.get("_id");

    if (!id) {
      const data = await db.collection("posts").find({}).toArray();

      return ApiResponse(200, "Posts fetched successfully", data);
    }

    const data = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });

    return ApiResponse(200, "Post fetched successfully", data);
  } catch (error) {
    return ApiError(error, "Failed to fetch posts", {
      path: "/api/posts",
      method: "GET",
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("posts-db");
    const data = await db.collection("posts").insertOne({
      title: body?.title,
      content: body?.content,
    });

    return ApiResponse(201, "Post created successfully", data);
  } catch (error) {
    return ApiError(error, "Failed to create post", {
      path: "/api/posts",
      method: "POST",
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("posts-db");

    const result = await db.collection("posts").updateOne(
      {
        _id: new ObjectId(body?.id),
      },
      {
        $set: {
          title: body?.title,
          content: body?.content,
        },
      }
    );

    return ApiResponse(200, "Post updated successfully", result);
  } catch (error) {
    return ApiError(error, "Failed to update post", {
      path: "/api/posts",
      method: "PUT",
    });
  }
}
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("posts-db");

    const result = await db.collection("posts").deleteOne({
      _id: new ObjectId(body?.id),
    });

    return ApiResponse(200, "Post deleted successfully", result);
  } catch (error) {
    return ApiError(error, "Failed to delete post", {
      path: "/api/posts",
      method: "DELETE",
    });
  }
}
