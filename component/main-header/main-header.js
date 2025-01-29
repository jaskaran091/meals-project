import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import style from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link className={style.logo} href="/">
          <Image src={logoImg} priority alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
