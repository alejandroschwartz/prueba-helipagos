"use client"

import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navbar() {

  return (
    <nav className="relative flex items-center justify-between p-2 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu />
      </div>
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
                Personajes
              </Link>
            </li>
            <li>
              <Link
                href="/planet"
                className="text-black font-bold transition-colors hover:text-green-600 underline-offset-4"
              >
                Planetas
              </Link>
            </li>
            <li>
              <Link
                href="/starship"
                className="text-black font-bold transition-colors hover:text-green-600 underline-offset-4"
              >
                Naves
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
