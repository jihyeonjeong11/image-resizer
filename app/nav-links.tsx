import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <nav className="bg-primary px-navHorizontalPadding py-navVerticalPadding grid grid-cols-[0.8fr_0.2fr]">
      <div>
        <span>Image Resizer</span>
      </div>
      <ul className="flex justify-between">
        <Link href="hello">Home</Link>

        <Link className={`link `} href="/about">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
