import { useState } from "react";
import React from "react";
import MenuToggle from "./menuToggle/MenuToggle";
import NewspaperHeader from "./newspaperHeader/NewspaperHeader";
import NavBar from "./navbar/NavBar";
import "./Header.css"

function Header() {
    
  return (
    <header>
        <MenuToggle />
        <NewspaperHeader />
        <NavBar />
    </header>
  );
}

export default Header;
