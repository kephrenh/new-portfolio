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
import { sendEmail } from "@/app/actions/email";
import { toast } from "sonner";
import { registerFormSchema } from "@/lib/zod-schema";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const formData = new FormData();
      formData.append("password", values.password);
      formData.append("email", values.email);

      await sendEmail(formData);
      toast.success(`Bonjour ${values.firstName}.`);
    } catch (error) {
      const err = ensureError(error);
      console.error("Une erreur est survenue", err);
      toast.error(err);
    }
  }

  const { isSubmitting, isValid } = form.formState;
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 my-4 flex flex-col items-center min-w-[300px] max-w-[640px]">
          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Email</FormLabel>
                  <FormControl>
                    <Input disabled={isSubmitting} type="email" className=" bg-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      type="password"
                      autoComplete="current-password"
                      className=" bg-white w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" disabled={!isValid || isSubmitting} type="submit">
            Connexion
          </Button>
        </form>
      </Form>
    </>
  );
};
