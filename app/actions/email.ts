"use server";

import { dbConnect } from "@/lib/mongodb";
import { reportError, getErrorMessage } from "@/lib/utils";
import { Client } from "@/models/client.model";

import { revalidatePath } from "next/cache";
import { dataFormData } from "@/lib/data-formData";

export async function sendEmail(formData: FormData) {
  try {
    const { name, email, phone, subject, message } = dataFormData(formData);

    console.log("Form data:", {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    });

    if (!email || !name || !phone || !subject || !message) {
      throw new Error("All fields are required");
    }

    await dbConnect();
    const filter = { email: email };
    const updates = { messages: { subject: subject, body: message } };

    const client = await Client.findOne(filter);

    const newClient = new Client({
      name: name,
      email: email,
      phone: phone,
      messages: { subject: subject, body: message },
    });

    if (!client) {
      Client.create(newClient);
    } else {
      await Client.findOneAndUpdate(filter, { $addToSet: updates }, { returnOriginal: false });
    }

    revalidatePath("/");
  } catch (error) {
    reportError({ message: getErrorMessage(error) });
  }
}
