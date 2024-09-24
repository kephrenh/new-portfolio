import { RegisterForm } from "@/components/register-form";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <section className="w-[90vw] py-16 min-h-[70vh] flex justify-center items-center ">
      <div className="flex flex-col gap-8 items-center justify-center rounded-xl shadow-md shadow-gray-400 py-16 px-4 sm:px-8">
        <div className="w-full text-center">
          <h1 className="text-xl">Nouveau ?</h1>
          <p className="text-gray-600 text-sm">
            Vous n&apos;avez pas de compte? Créez votre compte!
          </p>
        </div>

        <div>
          <RegisterForm />
          <div>
            <p className="text-gray-600 text-sm">
              Déjà un compte?{" "}
              <Link className="text-blue-500 underline underline-offset-2" href="/creer-un-compte">
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegisterPage;
