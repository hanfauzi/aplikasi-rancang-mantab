"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const KualitasKami = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const keunggulan = [
    {
      icon: "/assets/sistem.svg",
      title: "Stabilitas Sistem",
      description: "Infrastruktur handal dengan performa tinggi.",
    },
    {
      icon: "/assets/integrasi.svg",
      title: "Integrasi Mudah",
      description: "API fleksibel dan mudah diintegrasikan.",
    },
    {
      icon: "/assets/layanan.svg",
      title: "Layanan Lengkap",
      description: "Semua kebutuhan PPOB dalam satu sistem.",
    },
    {
      icon: "/assets/keamanan.svg",
      title: "Keamanan Terjamin",
      description: "Standar keamanan tinggi untuk data & transaksi.",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % keunggulan.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + keunggulan.length) % keunggulan.length
    );

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#024FC5] text-2xl md:text-4xl font-bold mb-12">
          Dibangun untuk Pertumbuhan Bisnis Digital
        </h2>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keunggulan.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                className="w-20 h-20 mb-4"
              />
              <h3 className="font-bold text-[#024FC5] mb-2">{item.title}</h3>
              <p className="text-sm text-[#052B63]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out touch-pan-y"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (!touchStartX.current) return;
                const diff = touchStartX.current - e.changedTouches[0].clientX;

                if (Math.abs(diff) > 50) {
                  if (diff > 0) {
                    nextSlide();
                  } else {
                    prevSlide();
                  }
                }

                touchStartX.current = null;
              }}
            >
              {keunggulan.map((item, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg max-w-xs mx-auto">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-20 h-20 mx-auto mb-4"
                    />
                    <h3 className="text-center font-bold text-[#024FC5] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-center text-[#052B63]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {keunggulan.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full ${
                  index === currentSlide
                    ? "w-8 bg-[#024FC5]"
                    : "w-2 border-2 border-[#024FC5]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KualitasKami;
