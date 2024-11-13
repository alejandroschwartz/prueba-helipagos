import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-24 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="text-2xl flex flex-col items-center">
        <p>
          Bienvenidos la aplicación de <b className="text-green-700">Star Wars </b> 
          para prueba de <b className="text-green-700">Helipagos</b>
        </p>
      </main>

      <footer className="mt-36 flex flex-col items-center justify-center">
        <p className="text-xl">
          Creado por <b>Alejandro Schwartz</b>  
        </p>
        <a
          className="mt-4 flex items-center text-blue-400 hover:underline hover:underline-offset-4"
          href="https://alejandroschwartz.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ver mas en: alejandroschwartz.com.ar
        </a>
      </footer>
    </div>
  );
}
