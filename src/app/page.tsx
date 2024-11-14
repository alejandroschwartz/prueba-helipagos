import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-24 items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="pb-12 text-3xl flex flex-col items-center text-center">
        <p>
          Bienvenidos la aplicación de <b className="text-green-700">Star Wars </b> <br/>
          para prueba de <b className="text-green-700">Helipagos</b>
        </p>
      </main>

      <div className="w-full flex justify-center bg-green-700 my-12 py-12">
        <div className="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img className="rounded-t-lg max-h-48 w-full object-cover" src="https://www.latercera.com/resizer/v2/K45ZKL6X2NF4RJ5TPKUJS4PHHU.jpg?quality=80&smart=true&auth=8246c580fdab312419b7f5b9a8b2097f46d4b5f061a3d4225f8662ef4f60791d&width=690&height=502" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Listado de personajes</h5>
              <p className="mb-3 font-normal text-gray-700">
                Aqui encontrará una lista de personajes de la saga de Star Wars.
              </p>
              <Link href="/person" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                VER MAS
              </Link>
            </div>
        </div>
        <div className="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img className="rounded-t-lg max-h-48 w-full object-cover" src="https://i.pinimg.com/originals/e0/b6/dd/e0b6dd17bbfbdc74e2c62cea8056b461.png" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Listado de planetas</h5>
              <p className="mb-3 font-normal text-gray-700">
                Aqui encontrará una lista de planetas de la saga de Star Wars.
              </p>
              <Link href="/planet" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                VER MAS
              </Link>
            </div>
        </div>
        <div className="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img className="rounded-t-lg max-h-48 w-full object-cover" src="https://media.vandal.net/m/9-2024/2/20249213114999_1.jpg" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Listado de Naves</h5>
              <p className="mb-3 font-normal text-gray-700">
                Aqui encontrará una lista de naves espaciales de la saga de Star Wars.
              </p>
              <Link href="/starship" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                VER MAS
              </Link>
            </div>
        </div>
      </div>

    </div>
  );
}
