import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-brand-teal mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-brand-teal/80 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-brand-teal text-brand-cream rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Back to Homepage
          </Link>
          <Link
            href="/blueprint"
            className="inline-block px-6 py-3 bg-brand-lime text-brand-teal rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get Your Free AI Blueprint
          </Link>
        </div>
      </div>
    </div>
  );
}
