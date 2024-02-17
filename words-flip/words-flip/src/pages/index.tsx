import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     <a href="/training" className="relative">
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-400"></span>
        <span className="fold-500 relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 dark:bg-black">Начать изучать слова</span>
    </a>
    </main>
  );
}
