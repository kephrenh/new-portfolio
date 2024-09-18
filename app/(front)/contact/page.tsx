/* eslint-disable @next/next/no-img-element */
"use client";

import { AtSign } from "lucide-react";
import SocialIcons from "@/components/front/social-icons";
import { useContactForm } from "@/hooks/use-contact-form";

const ContactPage = () => {
  const { data, setData, btnClass, enabled, form, sendEmail } = useContactForm();

  return (
    <section id="contact" className="w-full px-4 py-16 h-full">
      <div className="max-w-[1240px] m-auto py-16 w-full">
        <h1 className="tracking-widest uppercase text-[#5651e5]">Contact</h1>
        <h2 className="py-4">Contactez-moi</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <img
                  className="duration-300 ease-in rounded-xl hover:scale-105 "
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
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="py-2 text-sm uppercase">
                      Nom
                    </label>
                    <input
                      name="from_name"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      id="name"
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="py-2 text-sm uppercase">
                      Numéro
                    </label>
                    <input
                      name="phone"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                      id="phone"
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="py-2 text-sm uppercase">
                    Email
                  </label>
                  <input
                    name="from_email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    id="email"
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="py-2 text-sm uppercase">
                    Objet
                  </label>
                  <input
                    name="subject"
                    value={data.subject}
                    onChange={(e) => setData({ ...data, subject: e.target.value })}
                    id="subject"
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="py-2 text-sm uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    required
                    minLength={80}
                    id="message"
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    rows={10}></textarea>
                </div>
                <button
                  // onClick={formValidation}
                  disabled={!enabled}
                  id="sendButton"
                  className={`w-full p-4 mt-4 text-gray-100 uppercase duration-300 shadow-xl shadow-gray-400 rounded-xl ${btnClass}`}>
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
