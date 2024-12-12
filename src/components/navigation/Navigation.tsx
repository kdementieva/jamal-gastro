"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface INavItem {
  name: string;
  url: string;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname: string = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: INavItem[] = [
    { name: "Strona główna", url: "/#strona-glowna" },
    { name: "O nas", url: "/#o-nas" },
    { name: "Oferta", url: "/#oferta" },
    { name: "Produkty", url: "/#produkty" },
    { name: "Kontakt", url: "/kontakt" }
  ];

  return (
    <nav
      className={`flex h-14 items-center ${pathname !== '/' ? '' : 'fixed'} w-full z-20 transition-colors text-white duration-300 ${
        (isScrolled || pathname !== '/') ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <Link href="/#strona-glowna" className="ml-10">
        <div className="relative h-14 w-24">
          <Image 
            src="/logo.webp"
            alt="logo"
            fill
            priority={true}
            className="invert"
            sizes="100%"
          />
        </div>
      </Link>
      <div className="w-full h-full hidden md:block">
        <ul className="flex space-x-5 h-full items-center justify-end mr-10">
          {navItems.map((item: INavItem) => (
            <li key={item.url} className="group relative overflow-hidden cursor-pointer">
              <Link href={item.url}>
                {item.name}
              </Link>
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-laser transform
                  scale-x-0 group-hover:scale-x-100 transition-transform
                  duration-300 origin-left"
              ></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden flex items-center z-50 ml-auto mr-4">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? (
            <svg
              className="w-8 h-8 text-laser"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="fixed inset-0 flex flex-col items-center justify-center bg-white text-black font-bold md:hidden z-40">
          {navItems.map((item: INavItem) => (
            <li key={item.url} className="mb-4">
              <Link 
                href={item.url} 
                onClick={() => setIsOpen(false)} 
                className="text-xl"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
