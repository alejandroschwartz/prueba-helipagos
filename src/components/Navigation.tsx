"use client"

import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="relative flex items-center justify-between p-2 lg:px-6">
      <div className="z-10 fixed w-full hidden lg:block top-0 left-0 bg-white border-zinc-300 border-b-2 py-5 px-8 m-0 md:px-16 space-x-4">
        <div className="max-w-7xl m-auto flex justify-between">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <span className="text-green-700 font-bold align-middle text-xl md:hidden lg:block">
              Prueba Helipago
            </span>
          </Link>
          <ul className="hidden gap-6 text-lg md:flex md:items-center">
            <li>
              <Link
                href="/person"
                className="text-black font-bold transition-colors hover:text-green-600 underline-offset-4"
              >
                Person
              </Link>
            </li>
            <li>
              <Link
                href="/planet"
                className="text-black font-bold transition-colors hover:text-green-600 underline-offset-4"
              >
                Planet
              </Link>
            </li>
            <li>
              <Link
                href="/starship"
                className="text-black font-bold transition-colors hover:text-green-600 underline-offset-4"
              >
                Starship
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
