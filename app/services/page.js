const Services = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-16">
      <main className="flex flex-col items-center justify-center p-8 w-full max-w-4xl"> {/* Adjusted max-w to give more space */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl flex flex-col">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">Our Services</h1>
        <div className="overflow-y-auto flex-grow">
          <ul className="space-y-4 pr-4">
            <li>
              <h2 className="text-xl font-semibold text-black">Website Design</h2>
              <p className="text-black">
                We create visually appealing and user-friendly website designs that reflect your brand and engage your audience.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-black">Website Development</h2>
              <p className="text-black">
                Our development team builds robust and scalable websites using the latest technologies to ensure optimal performance.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-black">E-commerce Solutions</h2>
              <p className="text-black">
                We provide comprehensive e-commerce solutions to help you sell your products online and grow your business.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-semibold text-black">Maintenance</h2>
              <p className="text-black">
                We offer ongoing maintenance services to ensure your website remains up-to-date, secure, and running smoothly.
              </p>
            </li>
          </ul>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Services;