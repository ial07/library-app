import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import type { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { logout } from "@/features/auth/authSlice";

const Header: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    window.location.href = "/home";
  }
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur-sm">
      <nav className="custom-container mx-auto flex h-16 md:h-20 items-center justify-between ">
        <Link to="/home" className="text-2xl font-bold tracking-tight">
          <img src="/icons/Logo.svg" alt="logo" className="h-10.5" />
        </Link>
        <div className="flex items-center gap-4">
          {!token ? (
            <div className="items-center gap-4 hidden md:flex">
              <Button className="w-41" variant={"secondary"} asChild>
                <Link to="/auth?type=login">Login</Link>
              </Button>
              <Button className="w-41" asChild>
                <Link to="/auth?type=register">Register</Link>
              </Button>
            </div>
          ) : (
            <>
              <Link to="/cart">
                <div className="py-2 pr-2 relative cursor-pointer">
                  {items.length > 0 && (
                    <div className="absolute size-5 flex-center text-white bg-danger rounded-full right-0">
                      {items.length}
                    </div>
                  )}
                  <img src="/icons/Bag.svg" alt="bag" />
                </div>
              </Link>

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
                  <DropdownMenuItem asChild>
                    <Link
                      className="cursor-pointer"
                      to="/settings?type=profile"
                    >
                      Profile
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      className="cursor-pointer"
                      to="/settings?type=borrowed"
                    >
                      Borrowed List
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      className="cursor-pointer"
                      to="/settings?type=reviews"
                    >
                      Reviews
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="text-danger"
                    onClick={handleLogout}
                  >
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
