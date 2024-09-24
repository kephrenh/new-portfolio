"use client";

import { ensureError } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/app/actions/email";
import { contactFormSchema } from "@/lib/zod-schema";

export const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("message", values.message);
      formData.append("subject", values.subject);

      await sendEmail(formData);

      await fetch("https://getform.io/f/pbnvlwwb", {
        method: "POST",
        body: formData,
      });

      form.reset();
      toast.success(`Bonjour ${values.name}, message envoyé avec succès.`, {
        description: "Cette notification sera affichée une fois le message est envoyé.",
      });
    } catch (error) {
      const err = ensureError(error);
      console.error("Failed to send email", err);
      toast.error(err);
    }
  }

  const { isSubmitting, isValid } = form.formState;
  return (
    <>
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid w-full gap-4 py-2 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Nom</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type="text"
                      className="flex p-3 border-2 border-gray-300 bg-white rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Téléphone</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type="text"
                      className="flex p-3 border-2 border-gray-300 bg-white rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    type="email"
                    className="flex p-3 border-2 border-gray-300 bg-white rounded-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Sujet</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    type="text"
                    className="flex p-3 border-2 border-gray-300 bg-white rounded-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isSubmitting}
                    className="flex p-3 border-2 border-gray-300 bg-white rounded-lg"
                    rows={10}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={!isValid || isSubmitting} type="submit">
            Envoyer
          </Button>{" "}
        </form>
      </Form>
    </>
  );
};

