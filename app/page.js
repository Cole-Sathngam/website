import Image from "next/image";
import coleLogo from '/public/cole.png';
import tannerLogo from '/public/tanner.png';

export default function Home() {
  return (
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
  );
}
