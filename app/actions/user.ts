"use server";
import { dataFormData } from "@/lib/data-formData";
import { dbConnect } from "@/lib/mongodb";
import { getErrorMessage, reportError } from "@/lib/utils";
import { User } from "@/models/user.model";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export const createUser = async (formData: FormData) => {
  try {
    const { firstName, lastName, email, password } = dataFormData(formData);

    if (!firstName || !lastName || !email || !password) {
      throw new Error("Missing required fields");
    }

    await dbConnect();
    const filter = { email: email };

    const foundUser = await User.findOne(filter);

    if (foundUser) {
      throw new Error("Un compte avec cet email existe déjà");
    }

    const hashedPwd = await bcrypt.hash(password, 10);
    const userPayload = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPwd,
    };

    await User.create(userPayload);

    revalidatePath("/");
  } catch (error) {
    reportError({ message: getErrorMessage(error) });
  }
};
