import { StyledNavigation } from "@/styles/styled";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <StyledNavigation>
      <Link href="/">Home</Link>
      <Link href="/converter">Converter</Link>
      <Link href="/watchlist">Currencies list</Link>
    </StyledNavigation>
  );
};

export default NavBar;
