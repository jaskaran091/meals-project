"use client";

import Link from "next/link";
import React from "react";
import style from "./nav-link.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${style.active} ${style.link}` : style.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
