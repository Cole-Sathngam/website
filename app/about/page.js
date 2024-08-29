import Image from "next/image";
import coleLogo from '/public/cole.png';
import tannerLogo from '/public/tanner.png';

export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 animate-gradient-x min-h-screen flex items-center justify-center">
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex justify-center gap-5">
          <Image src={coleLogo} alt="cole logo" className="w-48 h-48 rounded-full transition-filter duration-300 hover:filter-drop-shadow-lg" />
          <Image src={tannerLogo} alt="tanner logo" className="w-48 h-48 rounded-full transition-filter duration-300 hover:filter-drop-shadow-lg" />
        </div>
        <h1 className="text-5xl mt-8">
          About Us
        </h1>
        <p className="mt-10">
          We are Cole and Tanner, two developers who love Next.js. We built this site to show off our skills and to help others learn how to use Next.js. We hope you enjoy it! 🚀
        </p>
      </div>
    </main>
    </div>
  );
}
