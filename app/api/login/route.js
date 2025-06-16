import { NextResponse } from "next/server";
import db from "../../../lib/db";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      return NextResponse.json({
        message: "Invalid email or password",
      }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({
        message: "Invalid email or password",
      }, { status: 401 });
    }

    // Optional: Generate JWT or session token here

    return NextResponse.json({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      message: "User logged in successfully"
    }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Server Error: something went wrong"
    }, { status: 500 });
  }
}
