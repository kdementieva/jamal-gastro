"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface INavItem {
  name: string;
  url: string;
  scroll: boolean;
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
    { name: "Strona główna", url: "/", scroll: true },
    { name: "O nas", url: "o-nas", scroll: true },
    { name: "Oferta", url: "oferta", scroll: true },
    { name: "Produkty", url: "produkty", scroll: true },
    { name: "Kontakt", url: "/kontakt", scroll: false }
  ];

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (item: INavItem) => {
    if (pathname === "/" && item.scroll) {
      if (item.url === "/") {
        scrollToTop();
      } else {
        handleScrollToSection(item.url);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`flex h-14 items-center ${pathname !== '/' ? '' : 'fixed'} w-full z-20 transition-colors text-white duration-300 ${
        (isScrolled || pathname !== '/') ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="basis-1/4 ml-10">
        <Link href="/">
          <Image 
          src="/logo.png"
          alt="logo"
          height={50}
          width={50}
          />
        </Link>
      </div>

      <div className="basis-3/4 h-full hidden md:block">
        <ul className="flex space-x-5 h-full items-center justify-end mr-10">
          {navItems.map((item) =>
            item.scroll ? (
              <li
                key={item.url}
                className="group relative overflow-hidden cursor-pointer"
              >
                {pathname === "/" ? (
                  <span onClick={() => handleNavigation(item)}>
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-laser transform
                        scale-x-0 group-hover:scale-x-100 transition-transform
                        duration-300 origin-left"
                    ></span>
                  </span>
                ) : (
                  <Link href="/">
                    <span>
                      {item.name}
                      <span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-laser transform
                          scale-x-0 group-hover:scale-x-100 transition-transform
                          duration-300 origin-left"
                      ></span>
                    </span>
                  </Link>
                )}
              </li>
            ) : (
              <li key={item.url} className="group relative overflow-hidden">
                <Link href={item.url}>
                  <span className="relative">
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-laser transform
                        scale-x-0 group-hover:scale-x-100 transition-transform
                        duration-300 origin-left"
                    ></span>
                  </span>
                </Link>
              </li>
            )
          )}
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
          {navItems.map((item) => (
            <li key={item.url} className="py-4 text-2xl w-full text-center">
              {pathname === "/" && item.scroll ? (
                <button
                  className="w-full"
                  onClick={() => {
                    handleNavigation(item);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ) : (
                <Link href={item.url}>
                  <span
                    className={`h-full ${
                      pathname === item.url ? "text-laser" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
