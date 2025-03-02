import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  console.log("🔥 API Route Hit: /api/auth/signup")
  try {
    const body = await req.json();
    console.log("Received Data:", body); // Debugging incoming request

    //Test: Check if Prisma is working
    try {
      const testUser = await prisma.user.findFirst()
      console.log("Prisma Test User: ", testUser)
    } catch (prismaError) {
      console.error("Prisma Connection Error: ", prismaError)
    }

    const { email, password } = body;

    console.log("Checking if user exists...");
    const existingUser = await prisma.user.findUnique({ where: { email } });
    
    if (existingUser) {
      console.log("User already exists!");
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword)

    try {
      const user = await prisma.user.create({
        data: { 
          email, 
          password: hashedPassword },
      });
      console.log("User created: ", user)
      return NextResponse.json({ message: "User created successfully, user"})
    } catch (prismaCreateError) {
      console.log("Error Creating User in Prisma: ", prismaCreateError)
      return NextResponse.json({ error: "Database error", details: prismaCreateError}, {status: 500})
    }

  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
