"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ICategoryItem {
  name: string;
  url: string;
}

const catItems: ICategoryItem[] = [
  { name: "Mięso", url: "mieso" },
  { name: "Produkty mrożone", url: "mrozonki" },
  { name: "Opakowania", url: "opakowania" },
  { name: "Pieczywo", url: "pieczywo" },
  { name: "Przyprawy i dodatki", url: "przyprawy-dodatki" },
  { name: "Sosy i jogurty", url: "sosy-jogurty" },
  { name: "Sprzęt", url: "sprzet" },
  { name: "Tłuszcze", url: "tluszcze" }
];

export default function CategoriesMenu() {
  const pathname: string = usePathname();
  return (
    <aside className="w-64 p-6 pt-10">
      <h2 className="text-2xl font-bold mb-6 text-black">
        Kategorie:
      </h2>
      <ul className="space-y-4">
        {catItems.map((item) => (
          <li key={item.url} className="group">
            <Link href={item.url}>
              <span 
                className={`${pathname == '/produkty/' + item.url ? 'text-laser' : 'text-black'} text-lg block relative 
                  hover:text-laser transition-colors 
                  group`}
                >
                  {item.name}
                <span 
                  className={`block h-0.5 bg-laser ${pathname == '/produkty/' + item.url ? 'text-laser' : 'scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'}`}
                ></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
