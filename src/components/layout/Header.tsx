import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur-sm">
      <nav className="custom-container mx-auto flex h-16 md:h-20 items-center justify-between ">
        <Link to="/home" className="text-2xl font-bold tracking-tight">
          <img src="/icons/Logo.svg" alt="logo" className="h-10.5" />
        </Link>
        <div className="flex gap-4">
          <Button className="w-41" variant={"secondary"} asChild>
            <Link to="/">Login</Link>
          </Button>
          <Button className="w-41" asChild>
            <Link to="/">Register</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
