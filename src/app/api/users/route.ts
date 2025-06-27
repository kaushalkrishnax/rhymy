import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";

import clientPromise from "@/lib/mongodb";
import { ApiResponse } from "@/utils/ApiResponse";
import { ApiError } from "@/utils/ApiError";

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("users-db");

    const { searchParams } = new URL(request.url);
    const id: string | null = searchParams.get("_id");

    if (!id) {
      const users = await db
        .collection("users")
        .find({})
        .project({ _id: 1, name: 1, username: 1 })
        .toArray();
      return ApiResponse(200, "Users fetched successfully", users);
    }

    const user = await db.collection("users").findOne({
      _id: new ObjectId(id),
    });

    return ApiResponse(200, "User fetched successfully", user);
  } catch (error) {
    return ApiError(error, "Failed to fetch users", {
      path: "/api/users",
      method: "GET",
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("users-db");

    const result = await db.collection("users").updateOne(
      {
        _id: new ObjectId(body?.id),
      },
      {
        $set: {
          name: body?.name,
          username: body?.username,
          email: body?.email,
        },
      }
    );

    return ApiResponse(200, "User updated successfully", result);
  } catch (error: any) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern || {})[0] || "field";
      return ApiResponse(409, `Duplicate ${field}`, null);
    }

    return ApiError(error, "Failed to update user", {
      path: "/api/users",
      method: "PUT",
    });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id")!;

    const client = await clientPromise;
    const db = client.db("users-db");

    const result = await db.collection("users").deleteOne({
      _id: new ObjectId(userId),
    });

    return ApiResponse(200, "User deleted successfully", result, [
      {
        name: "accessToken",
        value: "",
      },
      {
        name: "refreshToken",
        value: "",
      },
    ]);
  } catch (error) {
    return ApiError(error, "Failed to delete user", {
      path: "/api/users",
      method: "DELETE",
    });
  }
}
