import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { email, username, password, nome } = body;

    //check if email already exist
    const existingUserByEmail = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "Ja existe um usuario com esse email",
        },
        {
          status: 409,
        }
      );
    }

    //check if username already exist
    const existingUserByUsername = await db.user.findUnique({
      where: {
        username: username,
      },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "Já existe um usuário com esse nome de usuário",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        passwordHash: hashedPassword,
        nome,
      },
    });

    const { passwordHash: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "Usuário criado com sucesso" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error, "erro ao criar usuario");
  }
}
