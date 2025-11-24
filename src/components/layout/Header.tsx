import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur-sm">
      <nav className="custom-container mx-auto flex h-16 md:h-20 items-center justify-between ">
        <Link to="/home" className="text-2xl font-bold tracking-tight">
          <img src="/icons/Logo.svg" alt="logo" className="h-10.5" />
        </Link>
        <div className="flex items-center gap-4">
          {!token ? (
            <>
              <Button className="w-41" variant={"secondary"} asChild>
                <Link to="/?type=login">Login</Link>
              </Button>
              <Button className="w-41" asChild>
                <Link to="/?type=register">Register</Link>
              </Button>
            </>
          ) : (
            <>
              <div className="py-2 pr-2 relative cursor-pointer">
                <div className="absolute size-5 flex-center text-white bg-danger rounded-full right-0">
                  1
                </div>
                <img src="/icons/Bag.svg" alt="bag" />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <img
                      src="/images/author.png"
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="md:text-md-semibold text-sm-semibold hidden md:block">
                      John Doe
                    </span>
                    <ChevronDown className="size-5 hidden md:inline" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Borrowed List</DropdownMenuItem>
                  <DropdownMenuItem>Reviews</DropdownMenuItem>
                  <DropdownMenuItem className="text-danger">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
