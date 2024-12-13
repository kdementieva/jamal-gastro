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
  { name: "Frytki", url: "frytki" },
  { name: "Opakowania", url: "opakowania" },
  { name: "Pieczywo", url: "pieczywo" },
  { name: "Przyprawy", url: "przyprawy" },
  { name: "Dodatki", url: "dodatki" },
  { name: "Sosy i jogurty", url: "sosy-jogurty" },
  { name: "Sprzęt", url: "sprzet" },
  { name: "Tłuszcze", url: "tluszcze" },
  { name: "Napoje", url: "napoje" }
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
                className={`${pathname == '/produkty/' + item.url ? 'text-red-700' : 'text-black'} text-lg block relative 
                  hover:text-red-700 transition-colors 
                  group`}
                >
                  {item.name}
                <span 
                  className={`block h-0.5 bg-red-700
                    ${pathname == '/produkty/' + item.url ? '' :
                      'scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'}
                    `}
                ></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
