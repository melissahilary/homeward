import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Log in",
  description: "Sign in with a link or a six-digit code. No passwords.",
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-measure">
          <h1 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
            Log in
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            The product happens in your texts and your calendar, not here. This
            is for setup, your history, and your account.
          </p>
        </div>
        <div className="mt-8 max-w-measure">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
