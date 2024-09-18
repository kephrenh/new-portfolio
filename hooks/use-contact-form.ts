"use client";
import * as React from "react";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function useContactForm() {
  const { toast } = useToast();

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const enabled =
    data.email.length > 0 &&
    data.name.length > 0 &&
    data.message.length >= 50 &&
    data.phone.length >= 10 &&
    data.subject.length > 0;

  const btnBgColor = enabled ? "#5651e5 " : "#9ca3af";

  const form = React.useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dzulzup", "template_lioodfu", form.current!, {
        publicKey: "bvHkCEc2AKvRxYvhk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast({ variant: "success", description: "Votre message a bien été envoyé!" });
          setData({ name: "", phone: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return { data, setData, btnBgColor, form, enabled, sendEmail };
}
