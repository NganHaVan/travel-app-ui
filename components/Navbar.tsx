import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="h-full gap-12 lg:flex hidden">
        {NAV_LINKS.map(link => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16  flexCenter cursor-pointer pb-1.5 hover:font-bold transition-all text-gray-500"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          title="Login"
          type="button"
          variant="btn_dark_green"
          icon="/user.svg"
        />
      </div>

      {/* Hamburger button */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
}
