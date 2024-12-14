import React from "react";


export default function Home() {
  // Главные карточки (2 верхние большие)
  const mainCards = [
    {
      id: 1,
      imageSrc: "/images/Inter-0.png",
      buttonText: "Подробнее",
    },
    {
      id: 2,
      imageSrc: "/images/Group2.png",
      buttonText: "Читать обзор",
    },
    {
      id: 3,
      imageSrc: "/images/Group3.png",
      buttonText: "Читать обзор",
    },
  ];

  // Нижние карточки (4 карточки)
  const bottomCards = [
    { id: 3, imageSrc: "/images/2.png", title: "." },
    { id: 4, imageSrc: "/images/2.png", title: "." },
    { id: 5, imageSrc: "/images/2.png", title: "." },
    { id: 6, imageSrc: "/images/2.png", title: "." },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-purple-700 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            <img src="/images/хедер.png" alt="Logo" className="h-10" />
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-gray-400">.</a>
            <a href="#faq" className="hover:text-gray-400">.</a>
            <a href="#login" className="hover:text-gray-400">.</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Главные карточки */}
        <section className="grid gap-6 lg:grid-cols-2 sm:grid-cols-1 p-6">
          {mainCards.map((card) => (
            <article key={card.id} className="bg-gray-800 p-4 rounded-md">
              <img
                src={card.imageSrc}
                alt="Card Image"
                className="rounded-md object-cover h-48 w-full"
              />
              <button className="mt-4 bg-orange-500 text-black py-2 px-4 rounded-md">
                {card.buttonText}
              </button>
            </article>
          ))}
        </section>

        {/* Нижние карточки */}
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
          {bottomCards.map((card) => (
            <div key={card.id} className="bg-gray-800 p-4 rounded-md">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="rounded-md object-cover h-32 w-full"
              />
              <h3 className="text-md font-bold mt-2">{card.title}</h3>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="p-6 mt-12 bg-gray-900 text-center text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/футтер.png"
              alt="Footer Logo"
              className="w-24 h-24 object-cover rounded-md mb-4"
            />
            <p className="text-gray-400">.</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-2">.</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-400">.</a></li>
              <li><a href="#services" className="hover:text-gray-400">.</a></li>
              <li><a href="#contact" className="hover:text-gray-400">.</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-bold mb-2">.</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
              <a href="https://instagram.com" className="hover:text-gray-400">.</a>
              <a href="https://twitter.com" className="hover:text-gray-400">.</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
