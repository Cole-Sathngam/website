import Image from "next/image";
import logo from '/images/logo-no-brackets-mini.png'

export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 animate-gradient-x min-h-screen flex items-center justify-center">
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex justify-center gap-5">
          <Image src={logo} alt="logo" className="w-48 h-48 transition-filter duration-300 hover:filter-drop-shadow-lg" />
        </div>
        <h1 className="text-5xl mt-8">
          About Us
        </h1>
        <p className="mt-10 text-center text-lg">
  We are Cole and Tanner, two passionate web developers with a love for crafting beautiful, functional websites that help small businesses thrive. With a deep understanding of the challenges small companies face, we’re dedicated to creating tailored web solutions that not only look great but also deliver results. We believe that every business, no matter the size, deserves a strong online presence, and we’re here to make that happen. We take pride in our work, and there’s nothing we enjoy more than seeing our clients succeed with a website we’ve built. Let’s bring your vision to life, one pixel at a time.
        </p>
      </div>
    </main>
    </div>
  );
}
