/* eslint-disable @next/next/no-img-element */
"use client";

import { AtSign } from "lucide-react";
import SocialIcons from "@/components/front/social-icons";
import ContactForm from "@/components/contact-form";

const ContactPage = () => {
  return (
    <section id="contact" className="w-full px-4 py-16 h-full">
      <div className="max-w-[1240px] m-auto py-16 w-full">
        <h1 className="tracking-widest uppercase text-[#5651e5]">Contact</h1>
        <h2 className="py-4">Contactez-moi</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div className="w-full">
                <img
                  className="duration-300 ease-in rounded-xl hover:scale-105 w-[85%] "
                  src="/assets/images/contact.jpg"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="py-2 text-2xl">Mohamed Amoussa</h3>
                <p>Développeur Front-End</p>
                <p className="flex items-center gap-1">
                  <AtSign size={15} /> mohamedj81@hotmail.com
                </p>
                <p className="py-4">
                  Disponible pour des offres à court ou long termes. Contactez-moi.
                </p>
              </div>
              <div>
                <p className="pt-8 text-[#5651e5] uppercase">Restons en contact</p>
                <div className="flex items-center py-4 space-x-6">
                  <SocialIcons padding="p-4" />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
