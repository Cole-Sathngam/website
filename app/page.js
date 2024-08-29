import Image from "next/image";
import coleLogo from '/public/cole.png';
import tannerLogo from '/public/tanner.png';
import '../app/globals.css'; // Ensure this path is correct

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 animate-gradient-x min-h-screen flex items-center justify-center">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex justify-center gap-5">
            <Image src={coleLogo} alt="cole logo" className="w-48 h-48 rounded-full transition-filter duration-300 hover:filter-drop-shadow-lg" />
            <Image src={tannerLogo} alt="tanner logo" className="w-48 h-48 rounded-full transition-filter duration-300 hover:filter-drop-shadow-lg" />
          </div>
          <h1 className="text-9xl mt-8">
            Join The Cause!
          </h1>
          <p className="mt-4">
          </p>
        </div>
      </main>
    </div>
  );
}