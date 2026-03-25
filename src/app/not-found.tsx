import Link from "next/link";
import { RouteNames } from "@/constants";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-24 tablet:px-6">
      <h1 className="text-4xl font-semibold">Page Not Found</h1>
      <p className="mt-4 text-brand-body">The page you requested does not exist.</p>
      <Link
        href={RouteNames.Home}
        className="mt-8 inline-flex rounded-[10px] bg-brand-lime px-6 py-3 font-bold text-brand-black"
      >
        Back to Home
      </Link>
    </main>
  );
}
