import React from 'react';
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-104px)] items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md text-center bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-mine-shaft mb-4">Ups! Ta strona nie istnieje.</h1>
        <p className="text-abbey mb-6">
          Wygląda na to, że strona, której szukasz, jest niedostępna lub została przeniesiona.
        </p>
        <Link href='/'>
          <button className="inline-block bg-shuttle-gray text-white px-6 py-3 rounded-lg shadow-md hover:bg-abbey transition duration-300">
            Wróć do strony głównej
          </button>
        </Link>
      </div>
    </div>
  );
}
