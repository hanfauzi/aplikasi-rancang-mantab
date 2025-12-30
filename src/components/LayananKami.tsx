"use client";
import Image from "next/image";
import { useState } from "react";

const LayananKami = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const layanan = [
    {
      icon: "/assets/listrik & air.svg",
      title: "Tagihan Listrik & Air",
      description:
        "Pembayaran tagihan listrik dan air secara real-time dengan proses cepat dan akurat untuk kebutuhan pelanggan harian.",
    },
    {
      icon: "/assets/bpjs.svg",
      title: "Jaminan Sosial & Kesehatan",
      description:
        "Layanan pembayaran BPJS dan jaminan sosial lainnya dengan sistem yang aman dan terverifikasi.",
    },
    {
      icon: "/assets/internet.svg",
      title: "Internet & Telepon Rumah",
      description:
        "Pembayaran tagihan internet dan telepon rumah dari berbagai penyedia dalam satu platform terpadu.",
    },
    {
      icon: "/assets/multifinance.svg",
      title: "Multifinance",
      description:
        "Fasilitas pembayaran cicilan dan pembiayaan dari berbagai perusahaan multifinance secara praktis.",
    },
    {
      icon: "/assets/pulsa.svg",
      title: "Pulsa & Paket Data",
      description:
        "Pengisian pulsa dan paket data semua operator dengan proses instan dan ketersediaan lengkap.",
    },
    {
      icon: "/assets/voucher game.svg",
      title: "Voucher Game & Streaming",
      description:
        "Penyediaan voucher game dan layanan hiburan digital yang cepat, aman, dan siap jual.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % layanan.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + layanan.length) % layanan.length);
  };

  return (
    <section
      id="layanan"
      className="py-16 md:py-24 relative overflow-hidden bg-white sleek-zoom-90"
    >
      {/* Background gradient - only bottom half */}
      <div
        className="absolute inset-x-0 bottom-0 h-full z-0"
        style={{
          background:
            "linear-gradient(121.82deg, rgba(0, 170, 247, 1) 0.9%, rgba(2, 79, 197, 1) 101.14%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[48px] md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Layanan Lengkap untuk Berbagai Kebutuhan Transaksi
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {layanan.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center md:justify-start mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                height={120}
                width={120}
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#024FC5] mb-4 text-center md:text-left">
                {item.title}
              </h3>
              <p className="text-[#052B63] text-center leading-relaxed text-sm lg:text-base md:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {layanan.map((item, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-8 shadow-lg mx-auto max-w-md">
                    <div className="flex justify-center mb-6">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        className="w-24 h-24 object-contain"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#1B227D] mb-4 text-center">
                      {item.title}
                    </h3>
                    <p className="text-[#1B1C32] text-center leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {layanan.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-transparent border-2 border-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Touch/Swipe handlers */}
          <div
            className="absolute inset-0 z-10"
            onTouchStart={(e) => {
              const touch = e.touches[0];
              const startX = touch.clientX;

              const handleTouchMove = (e: TouchEvent) => {
                const touch = e.touches[0];
                const diff = startX - touch.clientX;

                if (Math.abs(diff) > 50) {
                  if (diff > 0) {
                    nextSlide();
                  } else {
                    prevSlide();
                  }
                  document.removeEventListener("touchmove", handleTouchMove);
                }
              };

              document.addEventListener("touchmove", handleTouchMove);
              document.addEventListener(
                "touchend",
                () => {
                  document.removeEventListener("touchmove", handleTouchMove);
                },
                { once: true }
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LayananKami;