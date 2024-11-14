import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="my-12 flex flex-col items-center justify-center">
      <p className="text-xl">
        Creado por <b>Alejandro Schwartz</b>  
      </p>
      <Link
        className="mt-4 flex items-center text-blue-400 hover:underline hover:underline-offset-4"
        href="https://alejandroschwartz.com.ar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ver mas en: alejandroschwartz.com.ar
      </Link>
    </footer>
  )
}

export default Footer