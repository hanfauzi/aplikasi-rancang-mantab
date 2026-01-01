"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const LayananKami = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const layanan = [
    {
      icon: "/assets/listrik-air.svg",
      title: "Tagihan Listrik & Air",
      description:
        "Pembayaran tagihan listrik dan air secara real-time dengan proses cepat dan akurat.",
    },
    {
      icon: "/assets/bpjs.svg",
      title: "Jaminan Sosial & Kesehatan",
      description:
        "Layanan pembayaran BPJS dan jaminan sosial lainnya dengan sistem aman.",
    },
    {
      icon: "/assets/internet.svg",
      title: "Internet & Telepon Rumah",
      description:
        "Pembayaran internet dan telepon rumah dari berbagai penyedia.",
    },
    {
      icon: "/assets/multifinance.svg",
      title: "Multifinance",
      description:
        "Pembayaran cicilan dan pembiayaan multifinance secara praktis.",
    },
    {
      icon: "/assets/pulsa.svg",
      title: "Pulsa & Paket Data",
      description:
        "Isi ulang pulsa dan paket data semua operator secara instan.",
    },
    {
      icon: "/assets/voucher game.svg",
      title: "Voucher Game & Streaming",
      description: "Voucher game dan hiburan digital yang cepat dan siap jual.",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % layanan.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + layanan.length) % layanan.length);

  return (
    <section
      id="layanan"
      className="relative py-16 md:py-24 overflow-hidden bg-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(121.82deg,rgba(0,170,247,1)_0.9%,rgba(2,79,197,1)_101.14%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <h2 className="text-center text-white text-2xl md:text-4xl font-bold mb-12">
          Layanan Lengkap untuk Berbagai Kebutuhan Transaksi
        </h2>

        {/* ===== DESKTOP GRID ===== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {layanan.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
              <Image
                src={item.icon}
                alt={item.title}
                width={120}
                height={120}
                className="w-24 h-24 mb-6"
              />

              <h3 className="text-xl font-bold text-[#024FC5] mb-3">
                {item.title}
              </h3>

              <p className="text-[#052B63] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ===== MOBILE CAROUSEL ===== */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out touch-pan-y"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
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
              {layanan.map((item, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-8 shadow-lg max-w-sm mx-auto">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={120}
                      height={120}
                      className="w-24 h-24 mx-auto mb-6"
                    />

                    <h3 className="text-lg font-bold text-[#024FC5] text-center mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#052B63] text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {layanan.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 border-2 border-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananKami;
