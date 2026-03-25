"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS, RouteNames } from "@/constants";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  const handleSubscribe = () => {
    console.log(email);
  };

  return (
    <footer className="bg-brand-white text-brand-gray">
      <div className="mx-auto max-w-440">
        {/* Subscribe row */}
        <div className="grid grid-cols-1 border-x border-brand-gray2 border-t border-b md:grid-cols-[27.5rem_1fr_27.5rem]">
          <div className="flex items-center justify-start border-b border-brand-gray2 px-15 py-12.5 md:border-r md:border-b-0">
            <Image
              src="/images/logo-footer.png"
              alt="Automation Architecture AI"
              width={311}
              height={60}
              priority
              className="h-[3.75rem] w-auto"
            />
          </div>

          <div className="border-b border-brand-gray2 px-13.75 py-10 md:border-r md:border-b-0 md:bg-brand-offwhite">
            <p className="text-base font-bold uppercase leading-[1.1] text-brand-black">
              Subscribe to be in touch
            </p>

            <form className="mt-2.5" onSubmit={handleSubmit}>
              <div className="flex items-center border-b border-brand-divider px-2.5 py-2.5">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your E-mail"
                  className="w-full bg-transparent text-base font-normal text-brand-gray outline-none placeholder:text-brand-gray"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                />
              </div>
            </form>
          </div>

          <div className="flex items-center justify-start border-brand-gray2 px-[3.75rem] py-[3.125rem] md:border-r-0">
            <button
              type="button"
              className="w-83.75 bg-brand-teal py-3.75 text-base font-normal uppercase text-brand-white rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-bl-[0.1875rem] rounded-br-[1rem]"
              onClick={handleSubscribe}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 border-x border-brand-gray2 md:grid-cols-4">
          {FOOTER_COLUMNS.map((column, idx) => (
            <div
              key={column.title}
              className={[
                "flex flex-col px-[3.75rem] py-[3.125rem] min-h-[10.75rem] border-b border-brand-gray2",
                idx < FOOTER_COLUMNS.length - 1 ? "md:border-r" : "",
              ].join(" ")}
            >
              <h3 className="text-base font-bold uppercase text-brand-teal leading-none">
                {column.title}
              </h3>

              <ul className="mt-[1.25rem] flex flex-col gap-[0.625rem]">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-normal text-brand-gray hover:text-brand-teal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-x border-b border-brand-gray2 px-15 py-10">
          <div className="flex items-center gap-2.75">
            <Link
              href={RouteNames.Privacy}
              className="text-base text-brand-gray font-normal"
            >
              Privacy Policy
            </Link>
            <span className="text-base text-brand-gray font-normal">|</span>
            <Link
              href={RouteNames.Terms}
              className="text-base text-brand-gray font-normal"
            >
              Terms of Service
            </Link>
          </div>

          <p className="text-base font-normal text-brand-gray whitespace-nowrap">
            &copy; {new Date().getFullYear()} All Rights Reserved by Automation
            Architecture AI
          </p>
        </div>
      </div>
    </footer>
  );
}
