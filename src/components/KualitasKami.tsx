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
      description:
        "Didukung infrastruktur yang handal untuk memastikan transaksi berjalan lancar dan minim gangguan.",
    },
    {
      icon: "/assets/integrasi.svg",
      title: "Integrasi Mudah",
      description:
        "API dan sistem yang dirancang agar mudah diintegrasikan dengan berbagai platform bisnis dan aplikasi digital.",
    },
    {
      icon: "/assets/layanan.svg",
      title: "Layanan Lengkap",
      description:
        "Beragam produk PPOB tersedia dalam satu sistem terpusat untuk efisiensi operasional.",
    },
    {
      icon: "/assets/keamanan.svg",
      title: "Keamanan Terjamin",
      description:
        "Mengutamakan perlindungan data dan transaksi dengan standar keamanan yang ketat.",
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
                <div
                  key={index}
                  className="w-full shrink-0 flex justify-center"
                >
                  {/* OUTER */}
                  <div className="w-[343px] h-[343px] flex items-center justify-center">
                    {/* INNER CARD */}
                    <div className="w-[303px] h-[303px] bg-white rounded-[15px] p-5 shadow-lg flex flex-col gap-4">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="w-24 h-24 mx-auto mb-6"
                      />

                      <h3 className="text-center text-xl font-extrabold text-[#024FC5] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-center text-[#052B63]">
                        {item.description}
                      </p>
                    </div>
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
