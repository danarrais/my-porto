import Link from "next/link";
import Navbar from "./components/navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center gap-5 px-5 pt-[96px] text-center">
        <p className="font-mono text-sm text-muted">404</p>
        <h1 className="text-[32px] md:text-[48px] font-semibold tracking-tight text-primary">
          Page not found
        </h1>
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-background rounded-[14px] font-medium hover:-translate-y-0.5 hover:shadow-hover transition-all"
        >
          Back to Home
        </Link>
      </main>
    </>
  );
}
