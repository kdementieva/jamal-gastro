"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
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

  return (
    <nav
      className={`flex h-14 items-center fixed w-full z-20 transition-colors text-white duration-300 ${
        isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="basis-1/4 ml-10">
        <Link href="/">
          <span>LOGO</span>
        </Link>
      </div>

      <div className="basis-3/4 h-full">
        <ul className="flex space-x-5 h-full items-center justify-end mr-10">
          {navItems.map((item) =>
            item.scroll ? (
              <li
                key={item.url}
                className="group relative overflow-hidden cursor-pointer"
              >
                {pathname === "/" ? (
                  <span onClick={() => (item.url === "/" ? scrollToTop() : handleScrollToSection(item.url))}>
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
    </nav>
  );
}
