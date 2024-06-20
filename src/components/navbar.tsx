import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import logo from "../../public/suit_favicon.png";
import Link from 'next/link';
import { ShoppingCart } from "./cart/page"; // Importa o novo componente
import { useCart } from "../../src/context/cartContext"; // Importa o contexto do carrinho

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

function NavItem({ children, href, className }: NavItemProps) {
  return (
    <li className={`mx-4 ${className}`}>
      <Link href={href || "#"} passHref legacyBehavior>
        <a className="font-medium text-black">
          {children}
        </a>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={"white"}
      className="fixed top-0 z-50 border-0"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center mr-4 w-12 h-12 rounded-full bg-white">
            <img src={logo.src} alt="Logo" />
          </div>
          <Link href="/" passHref legacyBehavior>
            <a className="ml-2 text-black text-xl font-semibold">
              Lotus Alfaiataria
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-6">
            <NavItem href="/landing">Início</NavItem>
            <ShoppingCart /> {/* Usa o novo componente */}
            <NavItem href="/logout">Sair</NavItem> {/* Botão de sair */}
          </ul>
        </div>
        <IconButton
          variant="text"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col items-center gap-4">
            <NavItem href="/landing">Início</NavItem>
            <ShoppingCart /> {/* Usa o novo componente */}
            <NavItem href="/logout">Sair</NavItem> {/* Botão de sair */}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
