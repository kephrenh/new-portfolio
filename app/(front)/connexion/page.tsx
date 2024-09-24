import { LoginForm } from "@/components/login-form";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="w-[90vw] py-16 min-h-[70vh] flex justify-center items-center ">
      <div className="flex flex-col gap-8 items-center justify-center rounded-xl shadow-md shadow-gray-400 py-16 px-4 sm:px-8">
        <div className="w-full text-center">
          <h1 className="text-xl">Connexion</h1>
          <p className="text-gray-600 text-sm">Vous avez déjà un compte? Connectez-vous!</p>
        </div>

        <div>
          <LoginForm />
          <div>
            <p className="text-gray-600 text-sm">
              Pas encore de compte?{" "}
              <Link className="text-blue-500 underline underline-offset-2" href="/creer-un-compte">
                Créer votre compte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
